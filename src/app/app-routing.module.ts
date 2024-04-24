import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { AddComponent } from './modal/add/add.component';
import { UpdateComponent } from './modal/update/update.component';
import { DeleteComponent } from './modal/delete/delete.component';

const routes: Routes = [
  { path: '', component: HouseComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
