// src/app/pages/work-detail/work-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WORKS } from '../../data/works.data';
import { Work } from '../../models/work.model';

@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="work-detail">
      <div class="container" *ngIf="work; else notFound">
        <div class="work-detail__header">
          <h1 class="work-detail__title">{{ work.title }}</h1>
          
          <div class="work-detail__meta">
            <span class="year-badge">{{ work.year }}</span>
            <span class="category">{{ work.category }}</span>
          </div>

          <p class="work-detail__description">{{ work.description }}</p>
        </div>

        <img 
          [src]="work.imageFull || work.image"
          [alt]="work.title"
          class="work-detail__image"
          loading="lazy">

        <!-- Дополнительный контент можно добавить позже через rich-text или markdown -->
        <section class="work-detail__content">
          <h2>Project Background</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </div>

      <ng-template #notFound>
        <div class="container">
          <h1>Work not found</h1>
          <p>Sorry, we couldn't find that project.</p>
        </div>
      </ng-template>
    </main>
  `,
  styles: `
    .work-detail {
      padding: 80px 0;
    }
    .container {
      max-width: 1150px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .work-detail__title {
      font-size: 44px;
      margin: 0 0 25px 0;
      line-height: 1.2;
    }
    .work-detail__meta {
      display: flex;
      align-items: center;
      gap: 25px;
      margin: 30px 0 40px;
      flex-wrap: wrap;
    }
    .year-badge {
      background: #142850;
      color: white;
      padding: 8px 18px;
      border-radius: 20px;
      font-size: 18px;
      font-weight: 600;
    }
    .category {
      font-size: 20px;
      color: #8695A4;
    }
    .work-detail__description {
      font-size: 18px;
      line-height: 1.7;
      color: #444;
      max-width: 800px;
    }
    .work-detail__image {
      width: 100%;
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 50px 0;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .work-detail__content {
      margin-top: 60px;
      font-size: 18px;
      line-height: 1.8;
      max-width: 800px;
    }
    .work-detail__content h2 {
      font-size: 34px;
      margin: 50px 0 25px;
    }
    @media (max-width: 768px) {
      .work-detail__title { font-size: 36px; }
      .work-detail__meta { gap: 15px; }
    }
  `
})
export class WorkDetailComponent implements OnInit {
  work?: Work;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.work = WORKS.find(w => w.id === id);
  }
}