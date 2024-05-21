import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  private tokenKey = 'auth-token';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user).pipe(
      tap((res: any) => {
        this.setToken(res.accessToken);
        this.userService.setFullName(user.fullName);
        this.router.navigate(['/starships']);
      })
    );
  }

  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((res: any) => {
        this.setToken(res.accessToken);
        const userFullName = res.user.fullName;
        if (userFullName) {
          this.userService.setFullName(userFullName);
        } else {
          this.userService.setFullName(null);
        }
        this.router.navigate(['/starships']);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.userService.setFullName(null);
    this.router.navigate(['/login']);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
