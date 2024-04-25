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

  sort: any = 'Sort Data'

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
    this.customerService.getTextSearch(this.textSearch).subscribe((data: any) => {
      this.listCustomer = data
    })
  }

  handleSortASC() {
    this.customerService.SortASC().subscribe((data: any) => {
      this.listCustomer = data
      this.sort = 'Sorted Name A to Z'
    })
  }

  handleSortDESC() {
    this.customerService.SortDESC().subscribe((data: any) => {
      this.listCustomer = data
      this.sort = 'Sorted Name Z to A'
    })
  }

  totalItem: any;
  itemsPerPage: number = 2;
  totalPage: any;
  currentPage: number = 1;

  
}