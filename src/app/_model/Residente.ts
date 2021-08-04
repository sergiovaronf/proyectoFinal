import { Usuario } from 'src/app/_model/Usuario';
import { Direccion } from './Direccion';
export class Residente{
    id_usuario : number;
    nombre : string;
    apellido : string;
    telefono : string;
    direccion : Direccion[];
    usuario : Usuario;
}