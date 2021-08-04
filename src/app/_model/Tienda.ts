import { Usuario } from 'src/app/_model/Usuario';
import { Direccion } from './Direccion';
export class Tienda{
    idUsuario : number;
    nombre : string;
    idTipoDocumento : number;
    documento : string;
    telefono : string;
    direccion : Direccion[];
    usuario : Usuario;
}