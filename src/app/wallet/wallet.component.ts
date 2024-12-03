import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { Tickets } from '../store/ticket';
import { WalletService } from './wallet.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Checkout } from '../store/checkout';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container d-flex flex-column">
    <div class="header">
      <h3>Selecione suas Fichas</h3>
    </div>
    
    <!-- Fichas quadradas maiores -->
    <div class="ficha-container">
    @for (ticket of tickets; track ticket.description) { 
      <div class="ficha" onclick="this.classList.toggle('selected')" (click)="selectTicket(ticket)">{{ ticket.description }} x{{ ticket.quantity}}</div>
    }
    </div>
    
    <!-- Botões no rodapé -->
    <div class="btn-container mt-4">
      <button class="btn btn-secondary w-50" routerLink="../home-page">Voltar</button>
      <button class="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#myModal">Consumir Fichas</button>
    </div>
  </div>

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h3 class="modal-title" id="modalTitle">Quantas fichas deseja consumir?</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
          </div>
          <form>
            <!-- Modal Body -->
            <div class="modal-body">
            @for (ticketModal of selectedTickets; track ticketModal.description) { 
              <div class="d-flex flex-column mb-3">
                <label class="form-label">{{ticketModal.description}}</label>
                <input type="number" class="form-control text-center" (change)="updateQuantity(ticketModal)" [formControl]="quantity">
              </div>
            }
            </div>

            <!-- Modal Footer -->
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" (click)="buyTicket()">Consumir</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

`,
  styleUrl: './wallet.component.scss'
})
export class WalletComponent implements OnInit{

  tickets: Tickets[] = [];
  userData: any;
  selectedTickets: Tickets[] = [];
  index: number | undefined;
  userTicket: Checkout = {
    customer: null,
    tickets : []
  };

  quantity = new FormControl(0);
  
  constructor(
    private walletService: WalletService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Recupera os dados do usuário
    this.userData = history.state.userData;
    this.getAlltickets();
  }

  selectTicket(ticket: Tickets): void {
    const ticketCopy: Tickets = { ...ticket }; 
    
    if (this.selectedTickets.some(t => t.id === ticketCopy.id)) {

      this.selectedTickets = this.selectedTickets.filter(item => item.id !== ticketCopy.id);
    } else {

      this.selectedTickets.push(ticketCopy);
    }
  }

  updateQuantity(ticket: Tickets): void {
    this.index = this.selectedTickets.findIndex(t => t.id === ticket.id);
  
    if (this.index !== -1 && this.quantity.value !== null) {
      this.selectedTickets[this.index].quantity = this.quantity.value;
      console.log("Quantidade atualizada com sucesso!", this.selectedTickets[this.index]);
    }
  }

  buyTicket(){
    this.userTicket.customer        = this.userData; 
    this.userTicket.tickets         = this.selectedTickets;
    this.walletService.consumeTicket(this.userTicket).subscribe({
      next: () => {
        console.log("Compra feita com suceso!")  
      },
      error: (err: any) => console.log(err),
    });
    this.router.navigate(["/receipt"], { state: { userTickets: this.selectedTickets, userData: this.userData } });
  }

  getAlltickets(): void {
    this.walletService.getAll(this.userData.cpf).subscribe((response: Tickets[]) => {
      if (response) {
        this.tickets = response.map(ticket => ({ ...ticket }));
      }
    });
  }
 
}
