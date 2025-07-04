import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaReproduccion } from '../models/lista-reproduccion.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = 'http://localhost:8080/lists';

  constructor(private http: HttpClient, private auth: AuthService) {}

  getLists(): Observable<ListaReproduccion[]> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ListaReproduccion[]>(this.apiUrl, { headers });
  }
}
