import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container d-flex flex-column">
    <div class="header">
      <h3>Selecione suas Fichas</h3>
    </div>
    
    <!-- Fichas quadradas maiores -->
    <div class="ficha-container">
      <div class="ficha" onclick="this.classList.toggle('selected')">Cachorro quente (2x)</div>
      <div class="ficha" onclick="this.classList.toggle('selected')">Refrigerante fanta</div>
      <div class="ficha" onclick="this.classList.toggle('selected')">Pescaria</div>
      <div class="ficha" onclick="this.classList.toggle('selected')">Maçã do amor</div>
      <div class="ficha" onclick="this.classList.toggle('selected')">Refrigerante guaraná (3x)</div>
      <div class="ficha" onclick="this.classList.toggle('selected')">Canjica (2x)</div>
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
            <h4 class="modal-title" id="modalTitle">Quantas fichas deseja consumir?</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
          </div>

          <form>
            <!-- Modal Body -->
            <div class="modal-body">
              <div class="d-flex flex-column mb-3">
                <label class="form-label">Cachorro quente</label>
                <input type="number" class="form-control text-center" formControlName="quantidade">
              </div>
              <div class="d-flex flex-column mb-3">
                <label class="form-label">Refrigerante guaraná</label>  
                <input type="number" class="form-control text-center" formControlName="quantidade">
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="modal-footer">
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal" routerLink="../receipt">Comprar</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

`,
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {

}
