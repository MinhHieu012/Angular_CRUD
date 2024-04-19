import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from './types/customer.entity';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient) { }
  public getCustomers(): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:3000/customers');
  }
}
