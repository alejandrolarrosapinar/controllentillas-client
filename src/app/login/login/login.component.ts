import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  servicio: LoginServiceService

  constructor(servicioParam: LoginServiceService, private router: Router) {
    this.user = new User();
    this.servicio = servicioParam;
  }

  ngOnInit() {
    //if(localStorage.getItem('usuario')!=null){
    //  this.router.navigate(['/main']);
    //}
  }

  onSubmit() {
    this.servicio.loggin(this.user).subscribe(response => {
      //console.log(response);
      if (response != null) {
        this.router.navigate(['/main']);
        localStorage.setItem('usuario', JSON.stringify(response));
      } else {
        this.router.navigate(['/loginIncorrecto']);
      }
    }, (error => {
      alert('error');
    }));
  }

  irRegistrar() {
    this.router.navigate(['/signUp']);
  }

}
