import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Usuario } from 'src/app/_model/Usuario';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
})
export class ListaUsuariosComponent implements OnInit, OnDestroy{

  listaUsuario: Usuario[];
  public item: Usuario;
  hasChildren: boolean;
  navigationSubscription;

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    public route: ActivatedRoute) {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.listar();
      }
    });
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.usuarioService.listar().subscribe(data => {
      this.listaUsuario = data;
    });
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
