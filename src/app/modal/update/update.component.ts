import { Component, Input } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interface/customer.entity';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  constructor(private customerService: CustomerService) { }

  @Input() dataCustomerId: any;
  @Input() dataCustomerName: any;
  @Input() dataCustomerAge: any;
  @Input() dataCustomerPhone: any;
  @Input() dataCustomerAddress: any;
  @Output() callGetCustomersBackAfterUpdate = new EventEmitter<any>();

  isVisible = false;

  dataUpdateCustomer: Customer = {
    id: 0,
    name: '',
    age: null,
    phone: '',
    address: ''
  };

  showModal(): void {
    this.dataUpdateCustomer.id = this.dataCustomerId;
    this.dataUpdateCustomer.name = this.dataCustomerName;
    this.dataUpdateCustomer.age = this.dataCustomerAge;
    this.dataUpdateCustomer.phone = this.dataCustomerPhone;
    this.dataUpdateCustomer.address = this.dataCustomerAddress;
    this.isVisible = true;
  }

  handleOk(): void {
    this.customerService.updateCustomer(this.dataUpdateCustomer).subscribe(() => {
      this.isVisible = false
      this.callGetCustomersBackAfterUpdate.emit()
    })
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
