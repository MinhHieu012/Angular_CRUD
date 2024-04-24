import { Component, Input } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interface/customer.entity';
import { Output, EventEmitter } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  @Input() itemId : any;
  @Input() itemName : any;
  @Output() callGetCustomersBackAfterDelete = new EventEmitter<any>();

  constructor(private modalService: NzModalService, private customerService: CustomerService) { }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'You want to delete item with this name: ' + this.itemName + '?',
      nzContent: 'This action cannot be undone!',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOnOk: () => {
        this.customerService.deleteCustomer(this.itemId).subscribe(() => {
          this.callGetCustomersBackAfterDelete.emit()
        })
      }
    })
  }
}
