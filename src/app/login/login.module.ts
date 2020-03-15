import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { LoginIncorrectoComponent } from './login-incorrecto/login-incorrecto.component';
import { SignUpComponent } from './sign-up/sign-up.component';






@NgModule({
  declarations: [LoginComponent, LoginIncorrectoComponent, SignUpComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
    
  ],exports:[
    
  ]
})
export class LoginModule { }
