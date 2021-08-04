import { Router } from '@angular/router';
import { Usuario } from './../../_model/Usuario';
import { UsuarioService } from './../../_service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
    this.inicializarFormularioVacio();
  }

  onLogin(){
    let user = new Usuario();
    user.email = this.form.value['email'];
    user.password = this.form.value['contraseña'];


    return this.usuarioService.login(user).subscribe(data =>{
      sessionStorage.setItem("access_token",data.JWT);
      console.log(data);
      this.router.navigate(['/cuidados']);
    });
  }

  inicializarFormularioVacio() {
    this.form = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'contraseña': new FormControl('', [Validators.required])
    });
  }
}
