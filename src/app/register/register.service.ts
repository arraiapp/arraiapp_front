import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registers } from './register-interface';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  //Passa o endereço da nossa Api (Tem que colocar isso em um arquivo depois, ta paia assim.)
  private apiUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient, private params: HttpParams) { 
    this.apiUrl
  }

    // Chama o método de registrar da nossa API, recebendo como parametro o json de todos os dados necessários.
    register(register: Registers): Observable<any> {
      return this.http.post(`${this.apiUrl}/api/customer/register`, register);
    }


}