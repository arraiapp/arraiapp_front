//Pacotes core do angular
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

//importa a constante routeConfig
import routeConfig from './app.routes';

import { provideClientHydration } from '@angular/platform-browser';
//Exporta o route config para o arquivo de configuração da aplicação
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig)]
};
