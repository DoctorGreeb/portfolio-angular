import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="social">
        <a href="#"><img src="assets/icons/fb.svg" alt="fb"></a>
        <a href="#"><img src="assets/icons/insta.svg" alt="insta"></a>
        <a href="#"><img src="assets/icons/twitter.svg" alt="twitter"></a>
        <a href="#"><img src="assets/icons/linkedin.svg" alt="linkedin"></a>
      </div>
      <p>Copyright ©2020 All rights reserved</p>
    </footer>
  `,
  styles: [`
    .footer { padding: 51px 0 26px; text-align: center; }
    .social a { margin: 0 15px; }
    .social img { width: 30px; height: 30px; }
    p { margin-top: 26px; color: #8695A4; font-size: 14px; }
  `]
})
export class FooterComponent {}