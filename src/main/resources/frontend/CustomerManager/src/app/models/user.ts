import {Customer} from "./customer";

export class User {

  login:string;
  password:string;
  customers : Customer[];


  constructor(login: string, password: string, customers: Customer[]) {
    this.login = login;
    this.password = password;
    this.customers = customers;
  }
}
