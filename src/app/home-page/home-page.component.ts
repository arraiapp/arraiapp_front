import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  template: `
    <h1> HOMEPAGE! </h1>
    <div>
      <label for="cpf">Id</label>
      <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" required>
    </div>
  `,
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
