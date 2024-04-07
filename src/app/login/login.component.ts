import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ServicesComponent],
  template: `
    <body>
      <section class="face face-front">
        <div class="content">
          <h2>Login</h2>
          <form>
            <div class="field-wrapper">
              <input type="text" name="username" placeholder="username" #username>
              <label>Usuário</label>
            </div>
            <div class="field-wrapper">
              <input type="password" name="password" placeholder="password" autocomplete="new-password" #password>
              <label>Senha</label>
            </div>
            <div class="field-wrapper">
              <!-- >Quando clicado pega o que está dentro de usuário e passa como parâmtro para a função triggerLogin< -->
              <input type="submit" (click)="triggerLogin(username.value, password.value)">
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

export class LoginComponent{
  // Método construtor de LoginComponent recebe os serviços da nossa API e do nosso Router
  constructor(private apiService: ServicesComponent, private router: Router) { }

  /*
  Função responsável pelo login, recebe como parâmetro usuário e senha e passa para o metódo login herdado da nossa api,
  Caso receba dados de reposta ( diferente de null ) passa para a homepage passando o Id na url (Depois vai ser modificado para o Id não ficar evidente).
  Caso não receba dados alerta um erro ( também vai ser modificado pra ter tratamento de erro.)
  */ 
  triggerLogin(username : string, password : string) {
    this.apiService.login(username, password).subscribe((results : any) =>{
      if (results != null){
        console.log(results.id)
        this.router.navigate(['/home-page', results.id]);
      }else{
        alert("Ocorreu um erro!")
      }
    });
  }

}

