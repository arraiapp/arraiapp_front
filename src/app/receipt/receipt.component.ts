import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="container mt-4">
    <div class="header">
      <h4>Comprovante de Consumo</h4>
    </div>
    
    <!-- Data e Hora -->
    <div class="date-time text-center mb-3">
      <span>Data e Hora: 07/11/2024 14:35</span>
    </div>

    <!-- Itens Consumidos -->
    <div class="item">
      <div>Cachorro Quente (2x)</div>
      <div>R$ 12,00</div>
    </div>
    <div class="item">
      <div>Refrigerante Guaraná (2x)</div>
      <div>R$ 8,00</div>
    </div>

    <!-- Total -->
    <div class="item total">
      <div>Total</div>
      <div>R$ 20,00</div>
    </div>
  </div>

  <!-- Botão Fechar Comprovante no rodapé -->
  <div class="footer">
    <button class="btn btn-primary w-100" routerLink="../wallet">Fechar Comprovante</button>
  </div>

  `,
  styleUrl: './receipt.component.scss'
})
export class ReceiptComponent {

}
