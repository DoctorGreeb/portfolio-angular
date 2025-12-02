import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/works" routerLinkActive="active">Works</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header { padding: 27px 0; border-bottom: 1px solid #E0E0E0; margin-bottom: 54px; }
    .container { max-width: 1150px; margin: 0 auto; padding: 0 20px; }
    .nav { text-align: right; }
    .nav a { margin-left: 33px; font-size: 20px; font-weight: 500; color: #000; text-decoration: none; }
    .nav a.active, .nav a:hover { color: #FF6464; }
  `]
})
export class HeaderComponent {}