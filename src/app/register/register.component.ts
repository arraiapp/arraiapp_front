import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  template: `
    <body>
    <div class="form-container">
        <div class="mb-4">
            <h1 class="app-title">ARRAIAPP</h1>
        </div>
        <div class="card register-card">
            <div class="card-body">
                <h5 class="card-title text-center">Cadastro</h5>
                <form>
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" required>
                    </div>
                    <div class="mb-3">
                        <label for="cpf" class="form-label">CPF</label>
                        <input type="text" class="form-control" id="cpf" placeholder="Digite seu CPF" required>
                    </div>
                    <div class="mb-3">
                        <label for="senha" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="senha" placeholder="Digite sua senha" required>
                    </div>
                    <div class="mb-3">
                        <label for="repetir-senha" class="form-label">Repetir Senha</label>
                        <input type="password" class="form-control" id="repetir-senha" placeholder="Repita sua senha" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Cadastrar</button>
                    <button type="submit" class="btn btn-primary w-100 login-btn" routerLink="register">Voltar para o login</button>
                </form>
            </div>
        </div>
    </div>
  `,
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
