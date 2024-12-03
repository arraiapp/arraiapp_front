import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Tickets } from '../store/ticket';
import { CommonModule } from '@angular/common';
import { Register } from '../register/register-interface';

@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container mt-4">
    <div class="header">
      <h4>Comprovante de Consumo</h4>
    </div>
    
    <!-- Data e Hora -->
    <div class="date-time text-center mb-3">
      <span>Data e Hora: {{ currentDateTime }}</span>
    </div>

    @for (ticket of userTickets; track $index) {
      <div class="item">
        <div>{{ ticket.description }} X{{ ticket.quantity }}</div>
        <div>{{ (ticket.value) * (ticket.quantity ?? 1)| currency: 'BRL' : 'symbol' : '1.2-2' }}</div>
      </div>
    }

  <div class="footer">
    <button class="btn btn-primary w-100" (click)="navegateWallet()">Fechar Comprovante</button>
  </div>

  `,
  styleUrl: './receipt.component.scss'
})
export class ReceiptComponent implements OnInit{

  userData: Register | undefined;
  userTickets: Tickets[] = [];
  currentDateTime: string;

  ngOnInit(): void {
    // Recupera os dados do usuário
    this.userTickets = history.state.userTickets;
    this.userData = history.state.userData;
  }

  constructor(
    private router : Router,
  ){
    this.currentDateTime = new Date().toLocaleString(); 
  }

  navegateWallet(){
      this.router.navigate(["/wallet"], { state: { userData: this.userData } });
  }

}
