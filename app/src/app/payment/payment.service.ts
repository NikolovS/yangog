import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IPayment } from '../shared/interfaces';


const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  listPayments(): Observable<IPayment[]> {
    return this.http.get<IPayment[]>(`${apiUrl}/payment`, { withCredentials: true });
  }
  getPayment(id: string): Observable<IPayment> {
    return this.http.get<IPayment>(`${apiUrl}/payment/${id}`, { withCredentials: true });
  }
  createPayment(data: any): Observable<IPayment> {
    return this.http.post<IPayment>(`${apiUrl}/payment`, data, { withCredentials: true });
  }
  updatePayment(id: string, data: IPayment): Observable<IPayment> {
    return this.http.put<IPayment>(`${apiUrl}/payment/${id}`, data, { withCredentials: true });
  }
  deletePayment(id: string): Observable<any> {
    return this.http.delete<IPayment>(`${apiUrl}/payment/${id}`, { withCredentials: true });
  }



}
