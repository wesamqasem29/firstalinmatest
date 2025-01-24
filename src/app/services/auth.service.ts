import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(): void {
    this.isAuthenticated = true;
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
  }

  checkAuthentication(): boolean {
    const loggedIn = localStorage.getItem('isLoggedIn');
    return loggedIn === 'true';
  }
}