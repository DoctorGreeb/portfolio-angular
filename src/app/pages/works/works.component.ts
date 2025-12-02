// src/app/pages/works/works.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkCardComponent } from '../../components/work-card/work-card.component';
import { WORKS } from '../../data/works.data';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, WorkCardComponent],
  template: `
    <main class="works-page">
      <div class="container">
        <h1 class="page-title">Work</h1>
        <app-work-card *ngFor="let work of works" [work]="work"></app-work-card>
      </div>
    </main>
  `,
  styles: [`
    .page-title { font-size: 40px; margin: 60px 0 40px; }
    .container { max-width: 1150px; margin: 0 auto; padding: 0 20px; }
  `]
})
export class WorksComponent {
  works = WORKS; 
}