import { Component } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styles: [`
    .footer {
      position: relative;
      background: transparent;
      color: #f5f6fa;
      margin-top: -1px;
      overflow: visible;
    }
    
    .footer-content {
      /* Sobe o fundo roxo por trás do CTA (sem cortar o card) */
      margin-top: calc(-1 * var(--footer-bg-pull));
      padding: calc(var(--footer-bg-pull) + 4.25rem) 0 2.25rem;
      background: linear-gradient(135deg, #160c3a 0%, #2c0f6d 45%, #1a0f3f 100%);
      position: relative;
      z-index: 1;
      overflow: hidden;
    }
    
    .footer-content::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 10% 10%, rgba(255,255,255,0.08), transparent 35%),
                  radial-gradient(circle at 80% 0%, rgba(255,255,255,0.06), transparent 40%),
                  radial-gradient(circle at 50% 100%, rgba(255,255,255,0.05), transparent 35%);
      pointer-events: none;
      z-index: 0;
    }
    
    .footer-content > .container,
    .footer-content .container {
      position: relative;
      z-index: 1;
    }
    
    .footer-content.no-cta {
      margin-top: 0;
      padding-top: 4.5rem;
    }
    
    
    .footer-title {
      color: #f5f6fa;
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 1rem;
      max-width: 18rem;
    }
    
    .footer-subtitle {
      color: #f5f6fa;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .footer-text {
      color: #d5d8e6;
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 0.5rem;
      max-width: 21rem;
    }

    .footer-illustration {
      width: 180px;
      height: 140px;
      background: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    }
    
    .footer-links {
      list-style: none;
      padding: 0;
    }
    
    .footer-links li {
      margin-bottom: 0.75rem;
    }
    
    .footer-link {
      color: #d5d8e6;
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      display: inline-block;
    }
    
    .footer-link:hover {
      color: #ffb347;
      transform: translateX(5px);
      text-decoration: underline;
    }
    
    .footer-contact .footer-link {
      color: #d5d8e6;
    }
    
    .footer-contact .footer-link:hover {
      color: #ffb347;
      text-decoration: underline;
    }
    
    .footer-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.12);
      border: none;
      margin: 2rem 0;
    }
    
    .footer-copyright {
      color: #cdd2e3;
      font-size: 0.875rem;
    }
    
    .footer-contact svg {
      color: #d5d8e6;
      flex-shrink: 0;
    }
    
    @media (max-width: 991px) {
      /* responsivo do footer apenas */
    }
    
    @media (max-width: 768px) {
      .footer-content {
        padding: 3rem 0 1.5rem;
      }
      
      .footer-title {
        font-size: 1.2rem;
        text-align: center;
      }
      
      .footer-subtitle {
        font-size: 1rem;
        text-align: center;
        margin-top: 1.5rem;
      }
      
      .footer-links {
        text-align: center;
      }
      
      .footer-contact {
        text-align: center;
      }
      
      .footer-text {
        font-size: 0.9rem;
        margin-left: auto;
        margin-right: auto;
      }

      .footer-illustration {
        margin: 1.5rem auto 0;
      }
    }
    
    @media (max-width: 576px) {
      .footer-content {
        padding: 2.5rem 0 1.25rem;
      }
      
      .footer-title {
        font-size: 1.1rem;
      }
      
      .footer-subtitle {
        font-size: 0.95rem;
      }
      
      .footer-text {
        font-size: 0.85rem;
      }
      
      .footer-copyright {
        font-size: 0.8rem;
      }
    }
  `]
})
export class Footer {
  currentYear = new Date().getFullYear();
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isHomePage = this.router.url === '/' || this.router.url === '/home';
      });
    
    // Verificar rota inicial
    this.isHomePage = this.router.url === '/' || this.router.url === '/home';
  }
}
