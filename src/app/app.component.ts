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
    age: null,
    phone: '',
    address: ''
  }

  selectedCustomer: Customer = {
    id: 0,
    name: '',
    age: null,
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
    this.customerService.addCustomer(this.addCustomer).subscribe(() => {
      this.get()
      this.addCustomer = {
        name: '',
        age: null,
        phone: '',
        address: ''
      }
    })
  }

  edit(customer: Customer) {
    this.selectedCustomer = customer
  }

  update(dataUpdate: Customer) {
    this.customerService.updateCustomer(dataUpdate).subscribe(() => {
      this.get()
      this.selectedCustomer = {
        id: 0,
        name: '',
        age: null,
        phone: '',
        address: ''
      }
    })
  }

  delete(id: Customer) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.get()
    })
  }
}