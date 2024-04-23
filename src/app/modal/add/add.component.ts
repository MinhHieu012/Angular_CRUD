import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interface/customer.entity';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output() getCustomer = new EventEmitter<string>();

  dataAddCustomer: Customer = {
    name: '',
    age: null,
    phone: '',
    address: ''
  }

  clearDataAddCustomer() {
    this.dataAddCustomer = {
      name: '',
      age: null,
      phone: '',
      address: ''
    }
  }

  isVisible = false;

  constructor(private customerService: CustomerService) { }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.customerService.addCustomer(this.dataAddCustomer).subscribe(() => {
      this.clearDataAddCustomer()
      this.isVisible = false
      this.getCustomer.emit()
    })
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
