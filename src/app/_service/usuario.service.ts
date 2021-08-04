import { Usuario } from './../_model/Usuario';
import { Tienda } from './../_model/Tienda';
import { Reciclador } from './../_model/Reciclador';
import { Residente } from './../_model/Residente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = `${environment.HOST}/usuario`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Usuario[]>(`${this.url}/listar`);
  }

  obtenerUsuario(id: number){
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  obtenerResidente(id: number){
    return this.http.get<Residente>(`${this.url}/residente/${id}`);
  }

  obtenerReciclador(id: number){
    return this.http.get<Reciclador>(`${this.url}/reciclador/${id}`);
  }

  obtenerTienda(id: number){
    return this.http.get<Tienda>(`${this.url}/tienda/${id}`);
  }

  cambiarEstado(user : Usuario) {
    return this.http.put(`${this.url}/estado`, user);
  }

  guardarResidente(residente : Residente){
    return this.http.post(`${this.url}/guardar/residente`, residente);
  }

  guardarReciclador(reciclador : Reciclador){
    return this.http.post(`${this.url}/guardar/reciclador`, reciclador);
  }

  guardarTienda(tienda : Tienda){
    return this.http.post(`${this.url}/guardar/tienda`, tienda);
  }

  login(usuario : Usuario){
    return this.http.post<any>(`${this.url}/login`, usuario);
  }
}
