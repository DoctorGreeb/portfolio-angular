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
    <div class="container" *ngIf="work">
      <h1>{{ work.title }}</h1>
      <div class="meta">
        <span class="year">{{ work.year }}</span>
        <span class="category">{{ work.category }}</span>
      </div>
      <p>{{ work.description }}</p>
      <img [src]="work.image" [alt]="work.title" style="width:100%; border-radius:8px; margin:40px 0;">
      <div style="margin-top:50px; line-height:1.8;">
        <h2>Project Background</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
    </div>
  `,
  styles: [`
    .container { max-width: 1150px; margin: 80px auto; padding: 0 20px; }
    .year { background: #142850; color: white; padding: 5px 15px; border-radius: 16px; font-size: 18px; margin-right: 25px; }
    .category { font-size: 20px; color: #8695A4; }
    .meta { margin: 30px 0; }
    h1 { font-size: 40px; margin-bottom: 20px; }
  `]
})
export class WorkDetailComponent implements OnInit {
  work?: Work;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.work = WORKS.find(w => w.id === id);
  }
}