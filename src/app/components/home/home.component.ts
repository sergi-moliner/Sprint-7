import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { StarshipsListComponent } from '../starships-list/starships-list.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, StarshipsListComponent, RouterModule, RouterOutlet, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  currentUser: string | null = null;

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn) {
      this.currentUser = this.userService.getFullNameFromLocalStorage();
    }
  }


}
