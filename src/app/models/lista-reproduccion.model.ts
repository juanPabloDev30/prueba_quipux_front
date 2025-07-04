import { Cancion } from './cancion.model';

export interface ListaReproduccion {
  nombre: string;
  descripcion: string;
  abierta?: boolean
  canciones?: Cancion[];
}