import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {
    this.errorMessage = null;
    this.authService.login(this.username, this.password).subscribe({
      next: user => {
        console.log('Login exitoso:', user);
        this.router.navigate(['/playlists']); 
      },
      error: err => {
        console.error('Error de login:', err);
        this.errorMessage = 'Credenciales inválidas. Inténtalo de nuevo.';
      }
    });
  }
}