import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HttpClientModule } from '@angular/common/http';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './modal/add/add.component';
import { UpdateComponent } from './modal/update/update.component';
import { DeleteComponent } from './modal/delete/delete.component';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HouseComponent } from './house/house.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    HouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    HttpClientModule,
    NzInputModule,
    FormsModule,
    NzModalModule,
    NzButtonModule,
    BrowserAnimationsModule,
    NzNotificationModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule
  ],
  providers: [
    HttpClient, 
    NzModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
