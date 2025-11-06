import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styles: [`
    .navbar {
      background: rgba(255, 255, 255, 0.95) !important;
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    
    .navbar-brand {
      color: #667eea !important;
      font-size: 1.25rem;
      transition: transform 0.3s ease;
    }
    
    .navbar-brand:hover {
      transform: scale(1.05);
    }
    
    .logo-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .nav-link {
      color: #333 !important;
      font-weight: 500;
      padding: 0.5rem 1rem !important;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .nav-link:hover {
      color: #667eea !important;
    }
    
    .nav-link.active {
      color: #667eea !important;
    }
    
    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 3px;
      background: #667eea;
      border-radius: 2px;
    }
    
    @media (max-width: 991px) {
      .navbar-collapse {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  `]
})
export class Header {

}
