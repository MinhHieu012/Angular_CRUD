import { Component, Output, EventEmitter } from '@angular/core';
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
      this.totalPage = Math.ceil(this.listCustomer.length / this.itemsPerPage);
      this.showTotalPage()
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
  itemsPerPage: number = 1;
  totalPage: any;
  currentPage: number = 1;

  showItemPerPage(page: number) {
    const start = this.itemsPerPage * (page - 1);
    const end = start + this.itemsPerPage;
    return this.listCustomer.slice(start, end);
  }

  showTotalPage() {
    const totalPage = Math.ceil(this.listCustomer.length / this.itemsPerPage);
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.getCustomerOnPage()
  }

  getCustomerOnPage() {
    this.customerService.getCustomersOnPage(this.currentPage, this.itemsPerPage).subscribe(() => {
      this.getCustomers()
    })
  }

  onClickNavigationNext(page: number) {
    this.currentPage = page
  }

  onClickNavigationPrevious(page: number) {
    this.currentPage = page;
  }
}