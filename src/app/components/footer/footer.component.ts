import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <!-- ← ИЗМЕНИЛ .social → .social-links -->
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
          <img src="/icons/fb.png" alt="">
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
          <img src="/icons/insta.png" alt="">
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
          <img src="/icons/twitter.png" alt="">
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
          <img src="/icons/linkedin.png" alt="">
        </a>
      </div>
      <p>Copyright ©2025 All rights reserved</p>
    </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {}