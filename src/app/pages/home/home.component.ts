// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkCardComponent } from '../../components/work-card/work-card.component';
import { WORKS } from '../../data/works.data';

interface Post {
  title: string;
  date: string;
  tags: string[];
  preview: string;
}

const RECENT_POSTS: Post[] = [
  {
    title: 'Making a design system from scratch',
    date: '12 Feb 2020',
    tags: ['Design', 'Pattern'],
    preview: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    title: 'Creating pixel perfect icons in Figma',
    date: '12 Feb 2020',
    tags: ['Figma', 'Icon Design'],
    preview: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  }
];

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
          <img src="/images/john.png" alt="John" class="hero-img">
        </div>
      </div>
    </section>

    <!-- СЕКЦИЯ -->
    <section class="recent-posts">
      <div class="wrapping-container">
      <div class="container">
        <div class="recent-posts__header">
          <h2>Recent posts</h2>
          <a href="#" class="view-all">View all</a>
        </div>

        <div class="posts-grid">
          <div class="post-card" *ngFor="let post of recentPosts">
            <h3>{{ post.title }}</h3>
            <div class="post-meta">
              <span>{{ post.date }}</span>
              <span class="divider"> | </span>
              <span class="tags">{{ post.tags.join(', ') }}</span>
            </div>
            <p>{{ post.preview }}</p>
          </div>
        </div>
      </div>
      </div>
    </section>
    <!-- КОНЕЦ СЕКЦИИ -->

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

    /* СТИЛИ ДЛЯ POSTS */
    .recent-posts {
      background: #ffffffff;
      padding: 60px 0;
      margin: 80px 0;
      width: 100%;
    }

    .wrapping-container {
      max-width: 1150px;
      margin: 0 auto;
      background: #EDF7FA;
      padding: 0 0 60px;
    } 

    .recent-posts__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }
    .view-all {
      color: #FF6464;
      text-decoration: none;
      font-weight: 500;
    }
    .view-all:hover { text-decoration: underline; }

    .posts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 30px;
    }
    .post-card {
      background: white;
      padding: 25px;
      border-radius: 6px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }
    .post-card h3 {
      font-size: 26px;
      margin: 0 0 15px 0;
      line-height: 1.3;
    }
    .post-meta {
      color: #888;
      font-size: 16px;
      margin-bottom: 15px;
    }
    .divider { margin: 0 10px; }
    .post-card p {
      color: #555;
      line-height: 1.7;
      margin: 0;
    }
    /* КОНЕЦ СТИЛЕЙ */

    @media (max-width: 768px) {
      .hero-grid { grid-template-columns: 1fr; text-align: center; }
      .recent-posts__header { flex-direction: column; align-items: flex-start; gap: 15px; }
      .posts-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class HomeComponent {
  featured = WORKS.slice(0, 3);
  recentPosts = RECENT_POSTS; 
}