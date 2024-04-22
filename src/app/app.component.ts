import { Component, OnInit } from '@angular/core';
import customers from './database/database.json';
import { CustomerService } from './customer.service';
import { Customer } from './types/customer.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  addCustomer: Customer = {
    name: '',
    age: 0,
    phone: '',
    address: ''
  }

  customer: any
  listCustomer: any

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.customerService.getCustomers().subscribe((data: any) => {
      this.listCustomer = data
    })
  }

  add() {
    this.customerService.addCustomer(this.addCustomer).subscribe((customer: any) => {
      this.addCustomer = customer
      this.get()
    })
  }

  delete(id: Customer) {
    this.customerService.deleteCustomer(id).subscribe((customer: any) => {
      this.get()
    })
  }
}