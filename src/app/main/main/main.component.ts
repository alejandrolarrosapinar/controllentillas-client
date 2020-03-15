import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuario: User;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.comprobarUsuario();
  }

  private comprobarUsuario(): void{
    this.usuario =JSON.parse(localStorage.getItem('usuario'));
    
    if(this.usuario!=null){
      this.usuario = this.usuario[0];
    }else{
      this.usuario = JSON.parse(localStorage.getItem('nuevoUsuario'));
    }

    if(this.usuario==null){
      this.router.navigate(['/login']);
    }
    console.log(this.usuario);
  }

  cerrarSession(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('nuevoUsuario');
    this.router.navigate(['/login']);
  }

}
