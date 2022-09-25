import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { DashboardRoutes } from './dashboard';
import { CalculadoraRoutes } from './calculadora';
import { ConversorRoutes } from './conversor';
import { TarefaRoutes } from './tarefas';
import { JogoDaVelhaRoutes } from './jogo-da-velha';

export const routes: Routes = [
	{ path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  	{ path: 'sign-in', component: SignInComponent },
 	{ path: 'register-user', component: SignUpComponent },
  	{ path: 'dashboard', component: DashboardComponent },
  	{ path: 'forgot-password', component: ForgotPasswordComponent },
  	{ path: 'verify-email-address', component: VerifyEmailComponent },
	{ 
		path: '', 
		redirectTo: '/dashboard', 
		pathMatch: 'full' 
	},
	...DashboardRoutes,
	...CalculadoraRoutes,
	...ConversorRoutes,
	...TarefaRoutes,
	...JogoDaVelhaRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
