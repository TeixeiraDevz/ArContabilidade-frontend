import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: [`
    .footer {
      position: relative;
      background: #ffffff;
      color: #1a1a1a;
      padding: 3.5rem 0 2rem;
      margin-top: -1px;
      border-top: 1px solid #e9ecef;
    }
    
    .footer::before {
      content: '';
      position: absolute;
      top: -4px;
      left: 0;
      right: 0;
      height: 8px;
      background: rgba(102, 126, 234, 0.1);
      filter: blur(12px);
    }
    
    .footer-title {
      color: #1a1a1a;
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 1rem;
      max-width: 18rem;
    }
    
    .footer-subtitle {
      color: #1a1a1a;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .footer-text {
      color: #6c757d;
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
      color: #6c757d;
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      display: inline-block;
    }
    
    .footer-link:hover {
      color: #667eea;
      transform: translateX(5px);
      text-decoration: underline;
    }
    
    .footer-contact .footer-link {
      color: #6c757d;
    }
    
    .footer-contact .footer-link:hover {
      color: #667eea;
      text-decoration: underline;
    }
    
    .footer-divider {
      height: 1px;
      background: #e9ecef;
      border: none;
      margin: 2rem 0;
    }
    
    .footer-copyright {
      color: #6c757d;
      font-size: 0.875rem;
    }
    
    .footer-contact svg {
      color: #6c757d;
      flex-shrink: 0;
    }
    
    @media (max-width: 768px) {
      .footer {
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
