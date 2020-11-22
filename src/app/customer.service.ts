import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'https://thawing-eyrie-77613.herokuapp.com';

  constructor(private http: HttpClient) { }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/creacliente`, customer);
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listclientes`);
  }

  getOperations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/kpideclientes`);
  }
}