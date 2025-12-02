// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkCardComponent } from '../../components/work-card/work-card.component';
import { WORKS } from '../../data/works.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WorkCardComponent],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-text">
            <h1>Hi, I am John,<br>Creative Technologist</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button class="btn">Download Resume</button>
          </div>
          <img src="assets/images/john.png" alt="John" class="hero-img">
        </div>
      </div>
    </section>

    <section class="featured">
      <div class="container">
        <h2>Featured works</h2>
        <app-work-card *ngFor="let work of featured" [work]="work"></app-work-card>
      </div>
    </section>
  `,
  styles: [`
    .container { max-width: 1150px; margin: 0 auto; padding: 0 20px; }
    .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin: 80px 0; }
    .hero-img { width: 100%; max-width: 343px; border-radius: 50%; }
    .btn { background: #FF6464; color: white; padding: 16px 30px; font-size: 20px; border: none; cursor: pointer; }
    h1 { font-size: 44px; margin-bottom: 40px; }
    h2 { font-size: 32px; margin-bottom: 50px; }
    @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr; text-align: center; } }
  `]
})
export class HomeComponent {
  featured = WORKS.slice(0, 3);
}