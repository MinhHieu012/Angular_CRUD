import { Component, Input } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interface/customer.entity';
import { Output, EventEmitter } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  @Input() itemId : any;
  @Input() itemName : any;
  @Output() callGetCustomersBackAfterDelete = new EventEmitter<any>();

  constructor(
    private modalService: NzModalService, 
    private customerService: CustomerService,
    private notification: NzNotificationService
  ) { }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Delete Customer',
      nzContent: `You want to delete item has name <strong>${this.itemName}</strong> <br> This action cannot be undone!`,
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOnOk: () => {
        this.customerService.deleteCustomer(this.itemId).subscribe(() => {
          this.createNotification('success')
          this.callGetCustomersBackAfterDelete.emit()
        })
      }
    })
  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Delete Data Successfully',
      `Data Delete <br> Full Name: <strong><i> ${this.itemName} </i></strong> <br>`
    );
  }
}
