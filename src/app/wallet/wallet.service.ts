import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tickets } from '../store/ticket';
import { Observable } from 'rxjs/internal/Observable';
import { Checkout } from '../store/checkout';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  //Passa o endereço da nossa Api (Tem que colocar isso em um arquivo depois, ta paia assim.)
  private apiUrl: string = "http://ec2-3-86-32-26.compute-1.amazonaws.com:8080";

  constructor(private http: HttpClient, private params: HttpParams) { 
    this.apiUrl
  }

  getAll(userCPF : String): Observable<Tickets[]> {
    return this.http.post<Tickets[]>(`${this.apiUrl}/api/customer-ticket/list-customer-tickets`, userCPF);
  }

  consumeTicket(userTicket: Checkout): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/customer-ticket/consume-ticket`, userTicket)
  }

}