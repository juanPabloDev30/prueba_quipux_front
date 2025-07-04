import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { ListaReproduccion } from '../models/lista-reproduccion.model';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
  standalone: false
})
export class PlaylistsComponent implements OnInit {
  listas: (ListaReproduccion & { abierta?: boolean })[] = [];

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.playlistService.getLists().subscribe({
      next: data => this.listas = data.map(lista => ({ ...lista, abierta: false })),
      error: err => console.error('Error al cargar listas', err)
    });
  }

  toggle(lista: ListaReproduccion): void {
    lista.abierta = !lista.abierta;
  }
}
