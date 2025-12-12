import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer-cta',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer-cta.html',
  styles: [`
    .footer-cta-shell {
      position: relative;
      padding: 0 1rem;
      /* Overlap do CTA para ficar "metade pra fora" (estilo Contplan) */
      margin-top: calc(-1 * var(--cta-overlap));
      margin-bottom: 3.5rem;
      z-index: 2;
    }

    /* Faixa branca atrás da parte do CTA que fica "para fora" (evita pegar o fundo cinza da seção anterior) */
    .footer-cta-shell::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: var(--cta-overlap);
      background: #ffffff;
      z-index: 0;
      pointer-events: none;
    }

    .footer-cta-card {
      position: relative;
      z-index: 1;
      border-radius: 28px;
      padding: 3.25rem 2.75rem;
      background: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: 0 22px 60px rgba(0, 0, 0, 0.16);
      max-width: 980px;
      margin: 0 auto;
    }

    .footer-cta-content {
      position: relative;
      z-index: 2;
    }

    .footer-cta-title {
      font-size: 2.75rem;
      color: #1a1a1a;
      margin-bottom: 1.25rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .footer-cta-subtitle {
      color: #6c757d;
      margin-bottom: 2rem;
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .footer-cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .footer-cta-btn-primary,
    .footer-cta-btn-secondary {
      padding: 0.95rem 2.4rem;
      border-radius: 14px;
      font-weight: 700;
      font-size: 1rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .footer-cta-btn-primary {
      background: linear-gradient(90deg, #ffb347, #ff6b6b);
      color: #120f23;
      border: none;
      box-shadow: 0 18px 35px rgba(255, 107, 107, 0.25);
    }

    .footer-cta-btn-secondary {
      border: 2px solid #667eea;
      color: #667eea;
      background: transparent;
      backdrop-filter: blur(4px);
    }

    .footer-cta-btn-secondary:hover {
      background: #667eea;
      color: white;
    }

    .footer-cta-btn-primary:hover,
    .footer-cta-btn-secondary:hover {
      transform: translateY(-4px);
    }

    @media (max-width: 991px) {
      .footer-cta-shell {
        margin-bottom: 3rem;
      }

      .footer-cta-card {
        padding: 2.75rem 2.25rem;
      }

      .footer-cta-title {
        font-size: 2.25rem;
      }

      .footer-cta-subtitle {
        font-size: 1.15rem;
      }

      .footer-cta-buttons {
        gap: 1rem;
      }

      .footer-cta-btn-primary,
      .footer-cta-btn-secondary {
        min-width: 200px;
        padding: 0.875rem 2rem;
      }
    }

    @media (max-width: 576px) {
      .footer-cta-shell {
        margin-bottom: 2rem;
      }

      .footer-cta-card {
        padding: 2rem 1.5rem;
      }

      .footer-cta-title {
        font-size: 1.75rem;
        margin-bottom: 1.25rem;
      }

      .footer-cta-subtitle {
        font-size: 1rem;
        margin-bottom: 2rem;
      }

      .footer-cta-buttons {
        flex-direction: column;
        width: 100%;
        gap: 1rem;
      }

      .footer-cta-btn-primary,
      .footer-cta-btn-secondary {
        width: 100%;
        max-width: 300px;
        padding: 0.875rem 1.5rem;
        font-size: 1rem;
      }
    }
  `]
})
export class FooterCta {
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


