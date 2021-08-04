import { JwtHelperService } from '@auth0/angular-jwt';
import { Component } from '@angular/core';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  verificarRol () {
    const helper = new JwtHelperService();
    let rol: number;
    let token = sessionStorage.getItem("access_token");
      if (!helper.isTokenExpired(token)) {
        const decodedToken = helper.decodeToken(token);
        rol = decodedToken.Rol;
      }
      return rol;
  }

  cerrarSesion(){
    sessionStorage.clear();
  }
}
