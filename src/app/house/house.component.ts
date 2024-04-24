import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../interface/customer.entity';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})

export class HouseComponent {
  addCustomer: Customer = {
    name: '',
    age: null,
    phone: '',
    address: ''
  };

  selectedCustomer: Customer = {
    id: 0,
    name: '',
    age: null,
    phone: '',
    address: ''
  };

  textSearch: any = '';

  listCustomer: any;

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.getCustomers()
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((data: any) => {
      this.listCustomer = data
    })
  }

  callGetCustomersBack(eventData: any) {
    this.getCustomers()
  }

  gettextSearch() {
    this.customerService.getTextSearch(this.textSearch).subscribe((data:any) => {
      console.log(this.listCustomer, 'check list customer');
      console.log(data, 'check data');

    })
  }
}