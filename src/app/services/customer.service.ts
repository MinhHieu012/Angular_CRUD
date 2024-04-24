import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../interface/customer.entity';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('')

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:3000/customers')
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:3000/customers', customer)
  }

  public deleteCustomer(id: Customer): Observable<Customer> {
    return this.http.delete<Customer>(`http://localhost:3000/customers/${id}`)
  }

  public updateCustomer(dataUpdate: Customer): Observable<Customer> {
    return this.http.put<Customer>(`http://localhost:3000/customers/${dataUpdate.id}`, dataUpdate)
  }

  public getTextSearch(textSearch: any): Observable<Customer[]> {
     console.log(textSearch, 'check text search');
    return this.http.get<Customer[]>(`http://localhost:3000/customers?q=${textSearch}`)
  }
}