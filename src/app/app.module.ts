import { CuidadosComponent } from './pages/cuidados/cuidados.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaComponent } from './pages/registro/tienda/tienda.component';
import { RecicladorComponent } from './pages/registro/reciclador/reciclador.component';
import { ResidenteComponent } from './pages/registro/residente/residente.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { VerUsuarioComponent } from './pages/lista-usuarios/ver-usuario/ver-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaUsuariosComponent, 
    VerUsuarioComponent, 
    LoginComponent,
    RegistroComponent,
    ResidenteComponent,
    RecicladorComponent,
    TiendaComponent,
    CuidadosComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
