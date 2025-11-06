import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: [`
    .footer {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 0 2rem;
      margin-top: 5rem;
    }
    
    .footer-title {
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .footer-subtitle {
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .footer-text {
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 0.5rem;
    }
    
    .footer-links {
      list-style: none;
      padding: 0;
    }
    
    .footer-links li {
      margin-bottom: 0.75rem;
    }
    
    .footer-link {
      color: rgba(255, 255, 255, 0.85);
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      display: inline-block;
    }
    
    .footer-link:hover {
      color: white;
      transform: translateX(5px);
      text-decoration: underline;
    }
    
    .footer-contact .footer-link {
      color: rgba(255, 255, 255, 0.9);
    }
    
    .footer-contact .footer-link:hover {
      color: white;
      text-decoration: underline;
    }
    
    .footer-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      margin: 2rem 0;
    }
    
    .footer-copyright {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.875rem;
    }
    
    .footer-contact svg {
      color: rgba(255, 255, 255, 0.9);
      flex-shrink: 0;
    }
    
    @media (max-width: 768px) {
      .footer {
        padding: 3rem 0 1.5rem;
      }
      
      .footer-title {
        font-size: 1.25rem;
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
      }
    }
    
    @media (max-width: 576px) {
      .footer {
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
}
