import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interface/customer.entity';
import { Output, EventEmitter } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output() getCustomer = new EventEmitter<string>();

  constructor(
    private customerService: CustomerService,
    private notification: NzNotificationService
  ) { }

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

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.customerService.addCustomer(this.dataAddCustomer).subscribe(() => {
      this.isVisible = false
      this.createNotification('success')
      this.getCustomer.emit()
      this.clearDataAddCustomer()
    })
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Add Data Successfully',
      `Full Name: <strong><i> ${this.dataAddCustomer.name} </i></strong> <br>
      Age: <strong><i> ${this.dataAddCustomer.age} </i></strong> <br>
      Phone: <strong><i> ${this.dataAddCustomer.phone} </i></strong> <br>
      Address: <strong><i> ${this.dataAddCustomer.address} </i></strong> <br>`
    );
  }
}
