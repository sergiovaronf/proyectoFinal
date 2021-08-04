import { UsuarioService } from 'src/app/_service/usuario.service';
import { Usuario } from 'src/app/_model/Usuario';
import { Residente } from './../../../_model/Residente';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuardsCheckStart, Router, ActivatedRoute } from '@angular/router';
import { asapScheduler } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-residente',
  templateUrl: './residente.component.html',
  styleUrls: ['./residente.component.scss'],
})
export class ResidenteComponent implements OnInit {

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
      'telefono': new FormControl('', [Validators.required]),
      'contraseña': new FormControl('', [Validators.required]),
    });
  }

  guardar(){
    let residente = new Residente();
    let user = new Usuario();
    user.email = this.form.value['correo'];
    user.password = this.form.value['contraseña'];
    user.id_rol = 4;
    user.estado = true;
    
    residente.nombre = this.form.value['nombre'];
    residente.apellido = this.form.value['apellido'];
    residente.telefono = this.form.value['telefono'];
    residente.usuario = user;
    console.log(residente);

    this.usaurioService.guardarResidente(residente).subscribe(()=>{
      this.mensajeAlerta("El Residente se a Creado");
      this.router.navigate(['/login']);
    });
  }
}
