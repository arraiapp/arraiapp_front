import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tickets } from './ticket';
import { Checkout } from './checkout';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private userData: Tickets | undefined;

  //Passa o endereço da nossa Api (Tem que colocar isso em um arquivo depois, ta paia assim.)
  private apiUrl: string = "http://ec2-3-86-32-26.compute-1.amazonaws.com:8080";

  private paymentUrl: string = "https://sandbox.api.pagseguro.com/checkouts";

  constructor(private http: HttpClient, private params: HttpParams) { 
    this.apiUrl
  }

  getAll(): Observable<Tickets[]> {
    return this.http.get<Tickets[]>(`${this.apiUrl}/api/ticket/getAll`);
  }

  buyTicket(checkout : Checkout){
    return this.http.post(`${this.apiUrl}/api/checkout/new-checkout`, checkout);
  }

}