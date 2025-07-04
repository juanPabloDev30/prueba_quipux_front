import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlaylistsComponent } from './playlists/playlists.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'playlists', component: PlaylistsComponent }, // ← Mueve esta arriba
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }