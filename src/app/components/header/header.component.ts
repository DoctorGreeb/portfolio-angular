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
    .header{padding:27px 0;border-bottom:1px solid #e0e0e0;margin-bottom:54px}
    .container{max-width:1150px;margin:0 auto;padding:0 20px;overflow:hidden}
    .nav{text-align:right;white-space:nowrap}
    .nav a{display:inline-block;margin-left:33px;font:500 20px/1 system-ui;color:#000;text-decoration:none}
    .nav a:first-child{margin-left:0}
    .nav a.active,.nav a:hover{color:#ff6464}
    @media(max-width:480px){.nav a{margin-left:20px;font-size:18px}}
  `]
})
export class HeaderComponent {}