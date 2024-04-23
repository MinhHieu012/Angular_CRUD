import { Component } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { Customer } from './interface/customer.entity';

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
    window.confirm('Are you sure with this info \n'
      + 'Full Name: ' + this.addCustomer.name + '\n'
      + 'Age: ' + this.addCustomer.age + '\n'
      + 'Phone: ' + this.addCustomer.phone + '\n'
      + 'Address: ' + this.addCustomer.address + '\n'
    )
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

  edit(customerInput: Customer) {
    this.selectedCustomer = customerInput
  }

  update(dataUpdate: Customer) {
    window.confirm(
      'Are you sure with this info \n'
      + 'Full Name: ' + this.selectedCustomer.name + '\n'
      + 'Age: ' + this.selectedCustomer.age + '\n'
      + 'Phone: ' + this.selectedCustomer.phone + '\n'
      + 'Address: ' + this.selectedCustomer.address + '\n'
    )
    this.customerService.updateCustomer(dataUpdate).subscribe(() => {
      this.get()
      this.selectedCustomer = {
        id: null,
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