import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { LoginIncorrectoComponent } from './login/login-incorrecto/login-incorrecto.component';
import { MainComponent } from './main/main/main.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

const routes: Routes = [
  { path:'login',component: LoginComponent},
  {
    path: 'loginIncorrecto', component: LoginIncorrectoComponent
  },
  {
    path: 'main', component: MainComponent
  },{
    path:'signUp', component: SignUpComponent  
  },
  {
    path:'',component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
