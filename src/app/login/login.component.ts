import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [[CommonModule, RouterModule]],
  template: `
    <body>
      <section class="face face-front">
        <div class="content">
          <h2>Login</h2>
          <form onsubmit="event.preventDefault()">
            <div class="field-wrapper">
              <input type="text" name="username" placeholder="username">
              <label>Usuário</label>
            </div>
            <div class="field-wrapper">
              <input type="password" name="password" placeholder="password" autocomplete="new-password">
              <label>Senha</label>
            </div>
            <div class="field-wrapper">
              <input type="submit" routerLink="home-page">
            </div>
            <span class="psw"  routerLink="reset-password">Esqueceu a Senha?  </span>
            <span class="signup"  routerLink="register">Ainda possui? Cadastre-se!</span>
          </form>
        </div>
      </section>
    </body>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
}
