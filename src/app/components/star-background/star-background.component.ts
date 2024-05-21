import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-star-background',
  standalone: true,
  imports: [],
  template: '<div id="starfield"></div><div id="starfield2"></div>',
  styleUrl: './star-background.component.scss'
})
export class StarBackgroundComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.createStarfield();
  }

  createStarfield() {
    const starfield = this.renderer.selectRootElement('#starfield', true);
    const stars = 1000;

    for (let i = 0; i < stars; i++) {
      const star = this.renderer.createElement('div');
      this.renderer.setStyle(star, 'position', 'absolute');
      this.renderer.setStyle(star, 'width', '2px');
      this.renderer.setStyle(star, 'height', '2px');
      this.renderer.setStyle(star, 'background', 'white');
      this.renderer.setStyle(star, 'borderRadius', '50%');
      this.renderer.setStyle(star, 'top', `${Math.random() * 100}vh`);
      this.renderer.setStyle(star, 'left', `${Math.random() * 100}vw`);
      this.renderer.appendChild(starfield, star);
    }
  }
}
