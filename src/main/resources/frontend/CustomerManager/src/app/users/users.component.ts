import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {Subscription} from "rxjs/index";
import {UserService} from "../services/userService";
import * as $ from "jquery";
import {Router} from "@angular/router";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  accounts: User[];
  userSubscription: Subscription;

  constructor(private users: UserService,private router : Router) {
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem("user"))!= null && JSON.parse(localStorage.getItem("user")).login == 'admin') {
      this.users.getFromServer();
      this.userSubscription = this.users.userSubject.subscribe(
        (users: User[]) => {
          this.accounts = users;
        }
      );
      this.users.emitUserSubject();
    }
    else{
      this.router.navigateByUrl('');
    }
  }

  logout(){
    localStorage.setItem('user', null);
    this.router.navigateByUrl('');
  }

  deleteUser(index:number){
    location.reload();
    delete this.accounts[index];
    this.users.deleteUser(index);
  }

}
