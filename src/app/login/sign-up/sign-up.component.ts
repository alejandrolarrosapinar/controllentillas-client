import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  constructor(private servicio: LoginServiceService, private router: Router) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  registrar(){
    this.servicio.signUp(this.user).subscribe(response=>{
      console.log(response);
      if(response!=null){
        localStorage.setItem('nuevoUsuario',JSON.stringify(response));
        this.router.navigate(['/main']);
      }else{
        this.router.navigate(['/loginIncorrecto']);
      }
    },(error=>{
      alert('error');
    }));
  
  }

  

}
