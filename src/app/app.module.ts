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
  ],
  providers: [
    HttpClient, 
    NzModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
