import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Work } from '../../models/work.model';

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="work-card" routerLink="/works/{{work.id}}">
      <img [src]="work.image" [alt]="work.title" class="work-card__img">
      <div class="work-card__content">
        <h3 class="work-card__title">{{ work.title }}</h3>
        <div class="work-card__meta">
          <span class="year">{{ work.year }}</span>
          <span class="category">{{ work.subtitle }}</span>
        </div>
        <p>{{ work.description }}</p>
      </div>
    </article>
  `,
  styles: [`
    .work-card { display: flex; gap: 30px; margin-bottom: 60px; cursor: pointer; }
    .work-card__img { width: 246px; height: 180px; object-fit: cover; border-radius: 6px; }
    .work-card__title { font-size: 30px; margin: 0 0 15px; }
    .year { background: #142850; color: white; padding: 0 10px; border-radius: 16px; font-size: 18px; margin-right: 20px; }
    .category { color: #8695A4; font-size: 20px; }
    p { margin: 15px 0 0; color: #666; }
  `]
})
export class WorkCardComponent {
  @Input() work!: Work;
}