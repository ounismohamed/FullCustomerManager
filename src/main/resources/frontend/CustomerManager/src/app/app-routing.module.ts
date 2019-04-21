import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users/users.component";
import {MainComponent} from "./main/main.component";
import {FormComponent} from "./addcustomer/form.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: '' ,component: LoginComponent},
  {path: 'main' ,component: MainComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
