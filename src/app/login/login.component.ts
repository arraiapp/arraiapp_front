import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Logins } from './login-interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <body>
      <section class="face face-front">
        <div class="content">
          <h2>Login</h2>
          <form>
            <div class="field-wrapper">
              <input
                type="text"
                name="username"
                placeholder="username"
                [(ngModel)]="cpf"
              />
              <label>Usuário</label>
            </div>
            <div class="field-wrapper">
              <input
                type="password"
                name="password"
                placeholder="password"
                autocomplete="new-password"
                [(ngModel)]="senha"
              />
              <label>Senha</label>
            </div>
            <div class="field-wrapper">
              <!-- >Quando clicado pega o que está dentro de usuário e passa como parâmtro para a função triggerLogin< -->
              <input type="submit" (click)="validaLogin()" />
            </div>
            <span class="psw" routerLink="reset-password"
              >Esqueceu a Senha?
            </span>
            <span class="signup" routerLink="register"
              >Ainda possui? Cadastre-se!</span
            >
          </form>
        </div>
      </section>
    </body>
  `,
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  cpf: string = '';
  senha: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  validaLogin() {
    this.loginService.login(this.cpf, this.senha).subscribe({
      next: (vl : Logins) => {
        if (vl?.cpf != null) {
          this.router.navigate(['/home-page', vl.id]);
        }else{ 
          alert("Ocorreu um erro!");
        } 
      },
     error: err=> alert("Erro interno do sistema, favor comunicar ao administrador!")});
  }
}

