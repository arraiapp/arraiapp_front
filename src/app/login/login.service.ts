import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logins } from './login-interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Passa o endereço da nossa Api
  private apiUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient, private params: HttpParams) { 
    this.apiUrl
  }

  // Chama o método de login da nossa API, recebendo como parametro o cpf e senha.
  login(cpf: string, senha: string): Observable<Logins> {
    //return this.http.get<any>(`${this.apiUrl}/login?cpf=${cpf}&senha=${senha}` )
    return this.http.get<Logins>(`${this.apiUrl}/login?cpf=${cpf}&senha=${senha}`)
  }

}
