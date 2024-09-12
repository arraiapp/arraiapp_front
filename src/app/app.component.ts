import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,FormBuilder,Validators } from '@angular/forms';

//Component principal que carrega o router dentro de sua estrutruta, que por sua vez tem as rotas 
//de todas as paginas
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  template: `    
  <main>
    <body>
        <router-outlet></router-outlet>
    </body>
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontEnd';
}
