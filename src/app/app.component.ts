import { Component, OnInit } from '@angular/core';
import customers from './database/database.json';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  customer: any
  listCustomer: any
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe((data:any) => {
      this.listCustomer = data
    })
  }
}