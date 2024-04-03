import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


//Component principal que carrega o router dentro de sua estrutruta, que por sua vez tem as rotas 
//de todas as paginas
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
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
