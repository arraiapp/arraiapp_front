import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { CommonModule } from '@angular/common';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <body>
      <div *ngIf="userData">
        <div class="container mb-3 header">
          <div class="row">
            <div class="col-5 offset-1 title">
              <h3>ArraiApp</h3>
            </div>
          </div>
        </div>
        <div class="container card-content">
          <div class="card text-center mt-4 ">
            <div class="card-body">
              <h3>Bem vindo, {{this.userData.name}}!</h3>
              <button type="button" class="btn btn-info btn-lg btn-wallet">Carteira de fichas</button>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-sucess btn-success btn-buy" >Adquirir Ficha</button>
        </div>
      </div>
      <div *ngIf="!userData">
        <p>Carregando dados do usuário...</p>
      </div>
    </body>
  `,
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  userData: any;

  constructor(private homePageService: HomePageService) {}

  ngOnInit() {
    this.userData = this.homePageService.getUserData();
  }

}
