import { Usuario } from 'src/app/_model/Usuario';
import { Reciclador } from './../../../_model/Reciclador';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/_service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reciclador',
  templateUrl: './reciclador.component.html',
  styleUrls: ['./reciclador.component.scss'],
})
export class RecicladorComponent implements OnInit {

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
      'apellido': new FormControl('', [Validators.required]),
      'correo': new FormControl('', [Validators.required,]),
      'documento': new FormControl('', [Validators.required]),
      'telefono': new FormControl('', [Validators.required]),
      'contraseña': new FormControl('', [Validators.required]),
    });
  }

  guardar(){
    let reciclador = new Reciclador();
    let user = new Usuario();
    user.email = this.form.value['correo'];
    user.password = this.form.value['contraseña'];
    user.id_rol = 3;
    user.estado = false;
    
    reciclador.nombre = this.form.value['nombre'];
    reciclador.apellido = this.form.value['apellido'];
    reciclador.documento = this.form.value['documento'];
    reciclador.telefono = this.form.value['telefono'];
    reciclador.usuario = user;
    console.log(reciclador);

    this.usaurioService.guardarReciclador(reciclador).subscribe(()=>{
      this.mensajeAlerta("El Usuario Reciclador se a Creado");
      this.router.navigate(['/login']);
    });
  }
}
