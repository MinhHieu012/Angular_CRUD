import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../interface/customer.entity';
import { NzModalService } from 'ng-zorro-antd/modal';

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

  listCustomer: any;

  constructor(private customerService: CustomerService, private modal: NzModalService) { }

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

  add(): void {
    this.customerService.addCustomer(this.addCustomer).subscribe(() => {
      this.getCustomers()
      this.addCustomer = {
        name: '',
        age: null,
        phone: '',
        address: ''
      };
    });
  }

  edit(customerInput: Customer): void {
    this.selectedCustomer = { ...customerInput }
  }

  update(dataUpdate: Customer): void {
    this.customerService.updateCustomer(dataUpdate).subscribe(() => {
      this.getCustomers();
      this.selectedCustomer = {
        id: null,
        name: '',
        age: null,
        phone: '',
        address: ''
      }
    })
  }

  delete(id: Customer): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.getCustomers()
    })
  }
}
