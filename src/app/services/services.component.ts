import { Component } from '@angular/core';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

// É utilizado para que o serviço seja importado de maneira fácil em todo o projeto
@Injectable({
    providedIn: 'root'
  })
  
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent {
  
  //Passa o endereço da nossa Api
  private apiUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { 
    this.apiUrl
  }

  // Chama o método de login da nossa API, recebendo como parametro o cpf e senha.
  // Implementar tratamento de erro depois
  login(cpf: string, senha: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/login?cpf=${cpf}&senha=${senha}` )
    
  }

}
