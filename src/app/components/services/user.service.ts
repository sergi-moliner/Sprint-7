import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userKey = 'user-fullname';

  setFullName(name: string | null) {
    if (name) {
      localStorage.setItem(this.userKey, name);
    } else {
      localStorage.removeItem(this.userKey);
    }
  }

  getFullName(): string | null {
    return localStorage.getItem(this.userKey);
  }

  isLoggedIn(): boolean {
    return this.getFullName() !== null;
  }
}
