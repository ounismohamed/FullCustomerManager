import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../models/customer';
import {User} from "../models/user";
import {UserService} from "../services/userService";

@Component({
  selector: 'app-addcustomer',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  customerForm: FormGroup;
  update: boolean;
  updateButton: string;
  authenticatedUser:User;
  customerService:Customer[];
  index : number;

  constructor(private formBuilder: FormBuilder,
              private users:UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem("user"))!=null) {
      this.authenticatedUser = JSON.parse(localStorage.getItem("user"));
      this.customerService = this.authenticatedUser.customers;
      this.index = this.route.snapshot.params.id;
      this.initForm();
      if (this.route.snapshot.params.id) {
        this.update = true;
        this.updateButton = 'Update';

        this.customerForm.controls.firstName.setValue(this.customerService[this.index].firstName);
        this.customerForm.controls.lastName.setValue(this.customerService[this.index].lastName);
        this.customerForm.controls.gender.setValue(this.customerService[this.index].gender);
        this.customerForm.controls.email.setValue(this.customerService[this.index].email);
        this.customerForm.controls.address.setValue(this.customerService[this.index].address);
        this.customerForm.controls.city.setValue(this.customerService[this.index].city);
        this.customerForm.controls.state.setValue(this.customerService[this.index].state);
        this.customerForm.controls.order.setValue(this.customerService[this.index].order);
      } else {
        this.update = false;
        this.updateButton = 'Add';
      }
    }
    else{
      this.router.navigateByUrl('');
    }
  }

  initForm() {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      order: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }


  onSubmitForm() {
    const formValue = this.customerForm.value;
    const newCustomer = new Customer(
      formValue.firstName,
      formValue.lastName,
      formValue.gender,
      formValue.email,
      formValue.address,
      formValue.city,
      formValue.state,
      formValue.order);
    if (this.update == false) {
      this.users.updateUser(newCustomer,-1);
    } else {
      let i = this.route.snapshot.params.id;
      this.users.updateUser(newCustomer, i);
    }
    this.router.navigate(['main']);
  }

}
