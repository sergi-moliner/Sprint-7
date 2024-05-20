import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { StarshipsListComponent } from '../starships-list/starships-list.component';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, StarshipsListComponent, RouterOutlet, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  sections = ['HOME', 'STARSHIPS'];
  activeSection : string = '';

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  ngOnInit() {
    this.activeSection = this.sections[0];
  }

}
