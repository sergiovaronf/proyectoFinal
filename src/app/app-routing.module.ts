import { CuidadosComponent } from './pages/cuidados/cuidados.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaComponent } from './pages/registro/tienda/tienda.component';
import { RecicladorComponent } from './pages/registro/reciclador/reciclador.component';
import { ResidenteComponent } from './pages/registro/residente/residente.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { VerUsuarioComponent } from './pages/lista-usuarios/ver-usuario/ver-usuario.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'registro/residente', component: ResidenteComponent},
  {path: 'registro/reciclador', component: RecicladorComponent},
  {path: 'registro/tienda', component: TiendaComponent},
  {path: 'usuario', component: ListaUsuariosComponent, children:[
    {path: 'ver/:id_rol/:id', component: VerUsuarioComponent}
  ]},
  {path: 'cuidados', component: CuidadosComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
