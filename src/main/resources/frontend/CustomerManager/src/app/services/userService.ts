import {Injectable} from "@angular/core";
import {Subject} from 'rxjs';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Customer} from "../models/customer";

@Injectable()
export class UserService {

  userSubject = new Subject<User[]>();

  path = 'api/users';

  private users: User[] = [];

  constructor(private http: HttpClient, private router: Router) {
  }

  emitUserSubject() {
    this.userSubject.next(this.users.slice());
  }

  login(login: string, password: string) {
    this.http.get<User>(this.path + '/' + login + '/' + password)
      .subscribe(
        response => {
          if (response.login) {
            localStorage.setItem('user', JSON.stringify(response));
            if (response.login == 'admin')
              this.router.navigateByUrl('users');
            else
              this.router.navigateByUrl('main');
          }
          else {
            alert("bas credentials");
          }
        },
        error => {
          alert('fail');
        }
      )
  }

  getFromServer() {
    this.http.get<any[]>(this.path)
      .subscribe(
        response => {
          this.users = response;
          this.emitUserSubject();
        },
        error => {
          alert('fail');
        }
      )
  }

  addUser(user: User) {
    this.http
      .post(this.path, user)
      .subscribe(
        () => {
          this.users.push(user);
          this.emitUserSubject();
        },
        (error) => {
          alert('fail: ' + error);
        }
      );
  }

  deleteUser(i: number) {
    this.http
      .delete(this.path + '/' + this.users[i].login)
      .subscribe(
        () => {
          delete this.users[i];
          this.emitUserSubject();
        },
        (error) => {
          alert('fail: ' + error);
        }
      );
  }

  updateUser(customer: Customer, index: number) {
    var user = JSON.parse(localStorage.getItem("user"));
    if (index == -1) {
      user.customers.push(customer);
    }
    else {
      user.customers[index] = customer;
    }
    localStorage.setItem('user', JSON.stringify(user));
    this.http
      .put(this.path, user)
      .subscribe(
        () => {
          this.users[index] = user;
          this.emitUserSubject();
        },
        (error) => {
          alert('fail: ' + error);
        }
      );
  }
}
