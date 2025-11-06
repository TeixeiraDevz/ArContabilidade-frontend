import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styles: [`
    .navbar {
      background: transparent !important;
      box-shadow: none;
      padding: 1rem 0;
      transition: all var(--transition-normal);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    
    .navbar .container {
      display: inline-flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(102, 126, 234, 0.15);
      border-radius: 50px;
      padding: 0.4rem 1.25rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
      width: auto;
      margin: 0 auto;
      gap: 0.5rem;
      transition: all var(--transition-normal);
    }
    
    .navbar.scrolling .container {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(102, 126, 234, 0.2);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .navbar:not(.scrolling) .container {
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(102, 126, 234, 0.1);
    }
    
    .navbar:not(.scrolling) .nav-link {
      color: var(--color-black) !important;
      text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
    }
    
    .navbar:not(.scrolling) .navbar-brand {
      filter: drop-shadow(0 1px 2px rgba(255, 255, 255, 0.8));
    }
    
    .navbar.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .navbar.hidden {
      opacity: 0;
      transform: translateY(-100%);
      pointer-events: none;
    }
    
    .navbar-brand {
      padding: 0;
      margin: 0;
      margin-right: 0.5rem;
      transition: transform var(--transition-normal);
    }
    
    .navbar-brand:hover {
      transform: scale(1.05);
    }
    
    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .logo-container svg {
      width: 24px;
      height: 24px;
      transition: transform var(--transition-normal);
    }
    
    .navbar-brand:hover .logo-container svg {
      transform: rotate(5deg);
    }
    
    .nav-link {
      color: var(--color-black) !important;
      font-weight: 500;
      font-size: 0.9rem;
      padding: 0.4rem 0.9rem !important;
      transition: all var(--transition-normal);
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      border: none;
      background: none;
    }
    
    .nav-link:hover {
      color: var(--color-purple) !important;
      transform: translateY(-1px);
    }
    
    .dropdown {
      position: relative;
    }
    
    .dropdown-toggle {
      cursor: pointer;
    }
    
    .dropdown-menu {
      border: none;
      box-shadow: var(--shadow-lg);
      border-radius: 8px;
      padding: 0.5rem 0;
      margin-top: 0.5rem;
      min-width: 180px;
    }
    
    .dropdown-item {
      padding: 0.625rem 1.25rem;
      color: var(--color-black);
      transition: all var(--transition-fast);
      font-size: 0.9rem;
    }
    
    .dropdown-item:hover {
      background: var(--color-gray-light);
      color: var(--color-purple);
    }
    
    .external-icon {
      opacity: 0.6;
      transition: all var(--transition-normal);
    }
    
    .nav-link:hover .external-icon {
      opacity: 1;
      transform: translate(2px, -2px);
    }
    
    
    .navbar-toggler {
      border: none;
      padding: 0.25rem 0.5rem;
    }
    
    .navbar-toggler:focus {
      box-shadow: none;
    }
    
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    
    @media (max-width: 991px) {
      .navbar .container {
        border-radius: 20px;
        padding: 0.75rem 1.5rem;
      }
      
      .navbar-collapse {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
      
      .navbar-nav {
        flex-direction: column;
        align-items: flex-start !important;
        gap: 0.5rem !important;
      }
    }
    
    @media (max-width: 576px) {
      .navbar .container {
        border-radius: 16px;
        padding: 0.625rem 1rem;
      }
    }
  `]
})
export class Header implements OnInit, OnDestroy {
  private scrollTimeout: any;
  private lastScrollY = 0;
  private isScrolling = false;
  navbarClass = 'navbar visible';
  
  ngOnInit() {
    this.lastScrollY = window.scrollY;
  }
  
  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > this.lastScrollY;
    
    // Limpar timeout anterior
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    // Se está no topo, mostrar navbar transparente (sem classe scrolling)
    if (currentScrollY < 50) {
      this.navbarClass = 'navbar visible';
      this.isScrolling = false;
    } else {
      // Se está rolando para baixo, esconder navbar
      if (scrollingDown && currentScrollY > 50) {
        this.isScrolling = true;
        this.navbarClass = 'navbar scrolling hidden';
      } else if (!scrollingDown) {
        // Se está rolando para cima, mostrar navbar opaca
        this.navbarClass = 'navbar scrolling visible';
        this.isScrolling = false;
      }
      
      // Após parar de rolar (150ms sem scroll), mostrar navbar novamente
      this.scrollTimeout = setTimeout(() => {
        if (this.isScrolling) {
          this.navbarClass = 'navbar scrolling visible';
          this.isScrolling = false;
        }
      }, 150);
    }
    
    this.lastScrollY = currentScrollY;
  }
}
