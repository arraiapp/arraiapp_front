import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Tickets } from './ticket';
import { StoreService } from './store.service';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { Checkout } from './checkout';
import { Register } from '../register/register-interface';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  template: `
    <h2 class="text-center mb-4">Fichas disponíveis:</h2>
    <div class="container">
      <div class="row justify-content-center">
        <!-- Loop pelos tickets cadastrados -->
        @for (ticket of tickets; track ticket.description) { 
        <div class="col-12 col-sm-6 col-md-4 mb-3">
          <div class="card ficha-card" data-bs-toggle="modal" data-bs-target="#myModal" (click)="selectTicket(ticket)">
            <div class="card-body d-flex justify-content-between align-items-center">
              <!-- Exibir informações do ticket -->
             <h5 class="card-title mb-0">{{ ticket.description }}</h5>
            <p class="card-text mb-0">{{ ticket.value }}</p>
            </div>
         </div>
        </div>
        }
      </div>
      <div class="mb-3 return">
        <a  class="form-label" routerLink="../home-page">Voltar para o login</a>
      </div>
    </div>
     
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title" id="modalTitle">Quantas fichas deseja?</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
          </div>

          <form [formGroup]="form" #signupForm="ngForm" (ngSubmit)="submit(signupForm)">
            <!-- Modal Body -->
            <div class="modal-body">
              <div class="d-flex align-items-center justify-content-center gap-3">
                <input type="number" class="form-control text-center w-100" formControlName="quantity">
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="modal-footer">
              <button type="submit" class="btn btn-danger">Comprar</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit {
  userData: Register | null = null; 
  tickets: Tickets[] = [];
  selectedTicket: Tickets | null = null;
  checkout: Checkout = {
    customer: null,
    tickets : []
  };

  form: FormGroup = new FormGroup({
    quantity: new FormControl('', Validators.required),
  });

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    // Recupera os dados do usuário
    this.userData = history.state.userData;
    this.getAlltickets();
  }

  getAlltickets() {
    this.storeService.getAll().subscribe((response: Tickets[]) => {
      if (response) {
        this.tickets = response;
      }
    });
  }

  selectTicket(tickets: Tickets): void {
    this.selectedTicket = tickets;
  }

  submit(form: FormGroupDirective) {
    if (form.valid && this.userData && this.selectedTicket) {

      this.checkout.customer        = this.userData; 
      this.selectedTicket.quantity  = form.value.quantity;
      this.checkout.tickets[0]       = this.selectedTicket;

      this.storeService.buyTicket(this.checkout).subscribe({
        next: (response: any) => {
          if (response) {
            window.location.href = response.links[1].href;
          }
        },
        error: (err: any) => console.log(err),
      });
    }
  }
}

