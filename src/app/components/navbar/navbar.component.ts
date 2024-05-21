import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { StarBackgroundComponent } from '../star-background/star-background.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterModule, StarBackgroundComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: string | null = null;
  sections = ['HOME', 'STARSHIPS'];
  activeSection: string = '';

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log('User:', user);
    });

    this.currentUser = this.userService.getFullNameFromLocalStorage();
  }

  logout(): void {
    this.authService.logout();
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
  }
}
