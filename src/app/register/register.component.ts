import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Registers } from './register-interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  template: `
    <body>
    <div class="form-container">
        <div class="mb-4">
            <h1 class="app-title">ARRAIAPP</h1>
        </div>
        <div class="card register-card">
            <div class="card-body">
                <h5 class="card-title text-center">Cadastro</h5>
                <form [formGroup]="form" #signupForm="ngForm" (ngSubmit)="submit(signupForm)">
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" formControlName="name" placeholder="Digite seu nome" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" class="form-control" formControlName="email" placeholder="Digite seu e-mail" required>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Telefone</label>
                        <input type="text" class="form-control" formControlName="phone" placeholder="Digite seu telefone" required>
                    </div>
                    <div class="mb-3">
                        <label for="cpf" class="form-label">CPF</label>
                        <input type="text" class="form-control" formControlName="cpf" placeholder="Digite seu CPF" required>
                    </div>
                    <div class="mb-3">
                        <label for="senha" class="form-label">Senha</label>
                        <input type="password" class="form-control" formControlName="password" placeholder="Digite sua senha" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Cadastrar</button>
                    <!-- Caso precise debugar os valores usa isso <pre>{{ form.value | json}}</pre> -->
                </form>
                <div class="mb-3 offset-2 hlogin">
                    <a  class="form-label" routerLink="../">Voltar para o login</a>
                </div>
            </div>
        </div>
    </div>
  `,
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

    form: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        cpf : new FormControl('', 
            [ Validators.required, Validators.minLength(11) ]
          ),
        password: new FormControl('', Validators.required)
    });
    
    get name() {return this.form.get("name")}
    get email() {return this.form.get("email")}
    get phone() {return this.form.get("phone")}
    get cpf() {return this.form.get("cpf")}
    get password() {return this.form.get("password")}
    

    constructor(
        private registerService: RegisterService,
      ) {}


    submit(form: FormGroupDirective){
        if (form.valid){
          this.registerService
          .register(form.value)
          .subscribe({
            next: (response: Registers) => {
            if (response) {
                alert('Cadastrado com sucesso!');
              }
            },
            error: (err) => console.log(err),
          });
        }
    }

}
