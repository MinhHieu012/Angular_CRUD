import { Component } from '@angular/core';
import customers from './database/database.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_crud';
  customers = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      phone: '123-456-7890',
      address: '123 Main St, Anytown USA',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      phone: '555-555-5555',
      address: '456 Oak St, Anytown USA',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      age: 35,
      phone: '987-654-3210',
      address: '789 Elm St, Anytown USA',
    },
    {
      id: 4,
      name: 'Alice Brown',
      age: 28,
      phone: '555-123-4567',
      address: '321 Pine St, Anytown USA',
    },
    {
      id: 5,
      name: 'Mike Davis',
      age: 32,
      phone: '555-555-1234',
      address: '789 Oak St, Anytown USA',
    }
  ];
}
