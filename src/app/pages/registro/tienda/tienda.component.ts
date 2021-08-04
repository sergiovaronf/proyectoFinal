import { Usuario } from 'src/app/_model/Usuario';
import { Tienda } from './../../../_model/Tienda';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/_service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'],
})
export class TiendaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private usaurioService : UsuarioService,
    private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
    this.inicializarFormularioVacio();
  }

  async mensajeAlerta(mensaje : string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  inicializarFormularioVacio() {
    this.form = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'correo': new FormControl('', [Validators.required,]),
      'documento': new FormControl('', [Validators.required]),
      'telefono': new FormControl('', [Validators.required]),
      'contraseña': new FormControl('', [Validators.required]),
    });
  }

  guardar(){
    let tienda = new Tienda();
    let user = new Usuario();
    user.email = this.form.value['correo'];
    user.password = this.form.value['contraseña'];
    user.id_rol = 3;
    user.estado = false;
    
    tienda.nombre = this.form.value['nombre'];
    tienda.documento = this.form.value['documento'];
    tienda.telefono = this.form.value['telefono'];
    tienda.usuario = user;
    console.log(tienda);

    this.usaurioService.guardarTienda(tienda).subscribe(()=>{
      this.mensajeAlerta("El Usuario Tienda se a Creado");
      this.router.navigate(['/login']);
    });
  }
}
