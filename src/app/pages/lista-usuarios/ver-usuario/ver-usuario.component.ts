import { Direccion } from './../../../_model/Direccion';
import { Tienda } from './../../../_model/Tienda';
import { Reciclador } from './../../../_model/Reciclador';
import { Residente } from './../../../_model/Residente';
import { UsuarioService } from 'src/app/_service/usuario.service';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Usuario } from 'src/app/_model/Usuario';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.scss'],
})
export class VerUsuarioComponent implements OnInit {

  residente: Residente;
  reciclador: Reciclador;
  tienda: Tienda;
  user: Usuario;
  listaDireccion: Direccion[];
  estado : boolean;

  private id: number = 0;
  private rol: number = 0;

  constructor(private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    public toastController: ToastController) {
    this.user = new Usuario;
    this.residente = new Residente;
    this.reciclador = new Reciclador;
    this.tienda = new Tienda;
    this.listaDireccion = [];
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'El estado se a cambiado.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.rol = params['id_rol'];
    });
    this.usuarioService.obtenerUsuario(this.id).subscribe(data => {
      this.user = data;
      this.estado = data.estado;
    });
    this.datos(this.id, this.rol);
  }

  datos(id: number, rol: number) {
    if (rol == 2) {
      this.usuarioService.obtenerTienda(id).subscribe(data => {
        this.tienda = data;
        this.listaDireccion = data.direccion;
      });
    }
    if (rol == 3) {
      this.usuarioService.obtenerReciclador(id).subscribe(data => {
        this.reciclador = data;
      });
    }
    if (rol == 4) {
      this.usuarioService.obtenerResidente(id).subscribe(data => {
        this.residente = data;
        this.listaDireccion = data.direccion;
      });
    }
  }

  cambiarEstado(){
    if(this.user.estado!= this.estado){
      this.usuarioService.cambiarEstado(this.user).subscribe();
      this.presentToast();
    }
  }  
}
