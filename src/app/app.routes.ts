// Modulo de rotas do angular
import { Routes } from '@angular/router';

// importando os components dos arquivos de páginas da aplicação
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { StoreComponent } from './store/store.component';
import { WalletComponent } from './wallet/wallet.component';
import { ReceiptComponent } from './receipt/receipt.component';

// Definindo contante com as lista das rotas
// path : Nome da página que fica na URL
// Component: Componenente que vai ser carregado
const routeConfig: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login Page'
    },
    {
        path: 'home-page',
        component: HomePageComponent,
        title: 'Home Page'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register Page'
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent,
        title: 'Reset Password Page'
    },    
    {
        path: 'store',
        component: StoreComponent,
        title: 'Store Page'
    },
    {
        path: 'wallet',
        component: WalletComponent,
        title: 'Wallet Page'
    },
    {
        path: 'receipt',
        component: ReceiptComponent,
        title: 'Receipt Page'
    }
];

export default routeConfig;
