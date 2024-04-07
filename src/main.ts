//Pacotes core do angular
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


//Roda o progama principal AppComponent e passa appConfig que possui algumas configurações da aplicação
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
