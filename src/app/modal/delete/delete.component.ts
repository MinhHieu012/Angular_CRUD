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
  constructor(private modalService: NzModalService, private customerService: CustomerService) { }
  
  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'You want to delete this item?',
      nzContent: 'This action cannot be undone!',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOnOk: () => {
        console.log("OK");
      }
    })
  }
}
