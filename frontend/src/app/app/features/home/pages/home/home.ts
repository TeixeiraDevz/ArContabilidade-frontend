import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styles: [`
    :host {
      display: block;
      background: var(--color-gray-light);
      min-height: 100vh;
    }
    
    .hero-section {
      position: relative;
      background: var(--color-white);
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      padding-top: 100px;
      padding-bottom: 80px;
    }
    
    .hero-blur-shapes {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      pointer-events: none;
      overflow: hidden;
    }
    
    .blur-shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
      animation: float 8s ease-in-out infinite;
    }
    
    .shape-1 {
      width: 400px;
      height: 400px;
      background: var(--color-purple);
      top: -100px;
      left: -100px;
      animation-delay: 0s;
    }
    
    .shape-2 {
      width: 500px;
      height: 500px;
      background: var(--color-blue);
      top: 50%;
      right: -150px;
      transform: translateY(-50%);
      animation-delay: 2s;
    }
    
    .shape-3 {
      width: 350px;
      height: 350px;
      background: var(--color-purple-dark);
      bottom: -100px;
      left: 20%;
      animation-delay: 4s;
    }
    
    .hero-section .container {
      position: relative;
      z-index: 2;
    }
    
    .services-section {
      margin-top: 5rem;
    }
    
    .hero-logo {
      margin-bottom: 5rem;
      margin-top: 2rem;
    }
    
    .logo-text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }
    
    .logo-text {
      font-size: 4rem;
      font-weight: 700;
      color: var(--color-black);
      letter-spacing: -0.05em;
      line-height: 1;
    }
    
    .logo-subtitle {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--color-gray);
      letter-spacing: 0.02em;
    }
    
    .laptop-container {
      max-width: 900px;
      margin: 0 auto;
      perspective: 1000px;
      opacity: 0;
      transform: translateY(80px);
      transition: opacity 1s ease-out, transform 1.1s ease-out;
      will-change: transform, opacity;
    }
    
    .laptop-container.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .laptop-frame {
      position: relative;
      transform-style: preserve-3d;
      animation: laptopFloat 8s ease-in-out infinite;
      animation-delay: 2s;
      animation-play-state: paused;
    }
    
    .laptop-container.is-visible .laptop-frame {
      animation-play-state: running;
    }
    
    .laptop-screen {
      background: #1a1a1a;
      border-radius: 12px 12px 0 0;
      padding: 8px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      transform: rotateX(5deg) rotateY(-2deg);
    }
    
    @keyframes laptopAppear {
      0% {
        opacity: 0;
        transform: translateY(50px) scale(0.9);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    .screen-content {
      background: var(--color-white);
      border-radius: 6px;
      overflow: hidden;
      aspect-ratio: 16/10;
      position: relative;
      box-shadow: inset 0 0 0 1px rgba(102, 126, 234, 0.08);
    }
    
    .site-preview {
      height: 100%;
      display: flex;
      flex-direction: column;
      background: var(--color-white);
      position: relative;
      overflow: hidden;
      border-radius: 6px;
    }
    
    .preview-header {
      background: var(--color-white);
      padding: 1rem 1.5rem;
      border-bottom: 1px solid #e9ecef;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .preview-logo-small {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-purple);
    }
    
    .preview-nav {
      display: flex;
      gap: 1.5rem;
      font-size: 0.85rem;
      color: var(--color-gray);
    }
    
    .preview-nav span {
      transition: color var(--transition-fast);
    }
    
    .preview-nav span:first-child {
      color: var(--color-purple);
      font-weight: 600;
    }
    
    .preview-content {
      flex: 1;
      background: linear-gradient(180deg, rgba(102, 126, 234, 0.18) 0%, rgba(118, 75, 162, 0.18) 100%);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .ceo-artwork {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    
    .ceo-artwork::before,
    .ceo-artwork::after {
      content: '';
      position: absolute;
      bottom: -8%;
      width: 38%;
      max-width: 300px;
      aspect-ratio: 1/1.25;
      background: radial-gradient(circle at 50% 20%, rgba(255, 218, 195, 0.95) 0%, rgba(245, 182, 169, 0.85) 30%, rgba(102, 126, 234, 0.3) 100%);
      border-radius: 48% 48% 36% 36%;
      filter: drop-shadow(0 28px 45px rgba(102, 126, 234, 0.45));
      animation: float 7s ease-in-out infinite;
    }
    
    .ceo-artwork::before {
      left: 12%;
      transform: rotate(-6deg);
      animation-delay: 0.6s;
    }
    
    .ceo-artwork::after {
      right: 12%;
      transform: rotate(6deg);
      animation-delay: 1.1s;
    }
    
    .ceo-head {
      position: absolute;
      bottom: 32%;
      width: 22%;
      max-width: 170px;
      aspect-ratio: 1;
      border-radius: 50%;
      background: linear-gradient(135deg, #f8c7bc 0%, #f2a59c 100%);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
      animation: float 7s ease-in-out infinite;
    }
    
    .ceo-head.left {
      left: 20%;
      transform: rotate(-4deg);
      animation-delay: 0.3s;
    }
    
    .ceo-head.right {
      right: 20%;
      transform: rotate(4deg);
      animation-delay: 0.9s;
    }
    
    .ceo-hair {
      position: absolute;
      inset: -16%;
      border-radius: 48% 48% 36% 36%;
      background: linear-gradient(135deg, #2d2a44 0%, #504a82 100%);
      box-shadow: 0 22px 35px rgba(45, 42, 68, 0.45);
      animation: floatReverse 9s ease-in-out infinite;
    }
    
    .ceo-hair.right {
      background: linear-gradient(135deg, #4b2f54 0%, #7a46a4 100%);
    }
    
    .ceo-overlay {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 620px;
      height: 65%;
      border-radius: 42% 42% 28% 28%;
      background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 55%, rgba(118, 75, 162, 0.15) 100%);
      filter: blur(0);
      box-shadow:
        inset 0 12px 25px rgba(255, 255, 255, 0.45),
        0 25px 40px rgba(102, 126, 234, 0.35);
      animation: pulse 8s ease-in-out infinite;
    }
    
    .ceo-overlay::before,
    .ceo-overlay::after {
      content: '';
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.45);
      filter: blur(15px);
      animation: float 9s ease-in-out infinite;
    }
    
    .ceo-overlay::before {
      top: 18%;
      left: 12%;
      animation-delay: 0.4s;
    }
    
    .ceo-overlay::after {
      top: 24%;
      right: 10%;
      animation-delay: 1.2s;
    }
    .preview-card {
      background: var(--color-white);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: var(--shadow-sm);
    }
    
    .preview-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-black);
      margin-bottom: 1.5rem;
    }
    
    .preview-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    
    .stat-item {
      padding: 1.5rem;
      background: var(--color-gray-light);
      border-radius: 8px;
    }
    
    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-purple);
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      font-size: 0.9rem;
      color: var(--color-gray);
    }
    
    .laptop-base {
      width: 100%;
      height: 20px;
      background: #2a2a2a;
      border-radius: 0 0 8px 8px;
      margin-top: -4px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .laptop-base {
      position: relative;
    }
    
    .laptop-base::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 150px;
      height: 4px;
      background: #1a1a1a;
      border-radius: 0 0 4px 4px;
    }
    
    @keyframes laptopFloat {
      0%, 100% {
        transform: translateY(0) rotateX(5deg) rotateY(-2deg);
      }
      50% {
        transform: translateY(-10px) rotateX(5deg) rotateY(-2deg);
      }
    }
    
    @media (max-width: 991px) {
      .logo-text {
        font-size: 3rem;
      }
      
      .logo-subtitle {
        font-size: 1.25rem;
      }
      
      .laptop-container {
        max-width: 100%;
        padding: 0 1rem;
      }
      
      .laptop-screen {
        transform: rotateX(0deg) rotateY(0deg);
      }
      
      .laptop-frame {
        animation: none;
      }
      
      .preview-stats {
        grid-template-columns: 1fr;
      }

      .preview-content {
        padding: 2rem 1.75rem 1.75rem;
      }

      .preview-hero {
        flex-direction: column;
        align-items: center;
        gap: 1.75rem;
      }

      .ceo-illustration {
        width: 280px;
        height: 220px;
      }

      .ceo {
        width: 140px;
        height: 210px;
        bottom: -15px;
      }

      .preview-dialog {
        max-width: 100%;
        text-align: center;
      }

      .preview-footer {
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
      }
    }
    
    @media (max-width: 576px) {
      .logo-text {
        font-size: 2.5rem;
      }
      
      .logo-subtitle {
        font-size: 1rem;
      }
      
      .preview-header {
        flex-direction: column;
        gap: 0.75rem;
        align-items: flex-start;
      }
      
      .preview-nav {
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .preview-content {
        padding: 1.75rem 1.25rem 1.5rem;
      }

      .ceo-illustration {
        width: 220px;
        height: 190px;
      }

      .ceo {
        width: 120px;
        height: 190px;
        bottom: -10px;
      }

      .preview-dialog {
        padding: 1.25rem 1.1rem;
      }

      .preview-dialog-title {
        font-size: 1.15rem;
      }

      .preview-dialog-text {
        font-size: 0.9rem;
      }

      .preview-footer {
        margin-top: 1.75rem;
      }

      .preview-pill {
        padding: 0.5rem 1rem;
      }
    }
    
    .hero-buttons .btn {
      transition: all var(--transition-normal);
      min-width: 200px;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: var(--shadow-md);
    }
    
    .hero-buttons .btn:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: var(--shadow-xl) !important;
    }
    
    .hero-buttons .btn-primary {
      background: var(--color-white);
      color: var(--color-purple);
      border: 2px solid var(--color-white);
    }
    
    .hero-buttons .btn-primary:hover {
      background: rgba(255, 255, 255, 0.95);
      color: var(--color-purple-dark);
      transform: translateY(-3px) scale(1.02);
    }
    
    .hero-buttons .btn-outline-light {
      border: 2px solid rgba(255, 255, 255, 0.8);
      color: white;
      background: transparent;
    }
    
    .hero-buttons .btn-outline-light:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: white;
      transform: translateY(-3px) scale(1.02);
    }
    
    .min-vh-75 {
      min-height: 75vh;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 768px) {
      .hero-section {
        min-height: 80vh;
        background-attachment: scroll;
      }
      
      .hero-title {
        font-size: 2rem !important;
      }
      
      .hero-subtitle {
        font-size: 1.1rem !important;
      }
      
      .hero-buttons {
        flex-direction: column;
        width: 100%;
      }
      
      .hero-buttons .btn {
        width: 100%;
        max-width: 300px;
      }
      
      .min-vh-75 {
        min-height: 60vh;
      }
    }
    
    @media (max-width: 576px) {
      .hero-title {
        font-size: 1.75rem !important;
      }
      
      .hero-subtitle {
        font-size: 1rem !important;
      }
      
      .hero-buttons .btn {
        padding: 0.75rem 2rem !important;
        font-size: 0.95rem;
      }
    }
    
    .servico-card {
      transition: all var(--transition-normal);
      height: 100%;
      border-radius: 12px;
      background: var(--color-white);
      box-shadow: var(--shadow-sm);
      overflow: hidden;
      position: relative;
    }
    
    .servico-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-primary);
      transform: scaleX(0);
      transition: transform var(--transition-normal);
      transform-origin: left;
    }
    
    .servico-card:hover::before {
      transform: scaleX(1);
    }
    
    .servico-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: var(--shadow-xl);
      border-color: var(--color-purple);
    }
    
    .servico-card .card-body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .servico-card .card-title {
      font-size: 1.2rem;
      margin-bottom: -1px;
      color: var(--color-black);
    }
    
    .servico-card .card-text {
      color: var(--color-gray-dark);
      line-height: 1.6;
      margin-bottom: 0;
    }
    
    .servico-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-normal);
      position: relative;
    }
    
    .servico-card:hover .servico-icon {
      transform: scale(1.15) rotate(5deg);
      animation: calculatorType 0.5s ease-in-out;
    }
    
    .servico-card:hover .servico-icon svg {
      fill: var(--color-purple);
      filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3));
    }
    
    .planos-section {
      margin-top: 4.5rem;
      padding-top: 5rem;
      background: var(--color-white);
      border-radius: 24px;
      box-shadow: 0 20px 40px rgba(102, 126, 234, 0.08);
    }
    
    .planos-section .section-title {
      margin-top: 0;
    }
    
    .planos-section .section-subtitle {
      margin-top: 1rem;
    }
    
    @media (max-width: 768px) {
      .planos-section {
        margin-top: 3.5rem;
        padding-top: 4rem;
      }
    }
    
    @media (max-width: 576px) {
      .planos-section {
        margin-top: 3rem;
        padding-top: 3.5rem;
      }
    }
    
    .plano-card {
      border: 2px solid #e9ecef;
      transition: all var(--transition-normal);
      height: 100%;
      border-radius: 16px;
      background: var(--color-white);
      box-shadow: var(--shadow-sm);
      position: relative;
      overflow: hidden;
    }
    
    .plano-card::after {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
      opacity: 0;
      transition: opacity var(--transition-normal);
    }
    
    .plano-card:hover::after {
      opacity: 1;
    }
    
    .plano-card:hover {
      border-color: var(--color-purple);
      box-shadow: var(--shadow-xl);
      transform: translateY(-8px) scale(1.02);
    }
    
    .plano-card.featured {
      border-color: var(--color-purple);
      box-shadow: var(--shadow-xl);
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%);
      animation: pulse 3s ease-in-out infinite;
    }
    
    .plano-card.featured:hover {
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
    }
    
    .plano-card .card-body {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    
    .plano-card .card-title {
      font-size: 1.45rem;
      color: var(--color-black);
      margin-bottom: 0;
    }
    
    .plano-card .text-muted {
      color: var(--color-gray);
      margin-bottom: 0;
    }
    
    .plano-card .card-text {
      color: var(--color-gray-dark);
      line-height: 1.6;
      margin-bottom: 0;
    }
    
    .plano-card .list-unstyled {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 0;
    }
    
    .benefit-item {
      animation: slideIn 0.5s ease-out forwards;
      opacity: 0;
      transform: translateX(-10px);
    }
    
    .check-icon {
      color: var(--color-purple);
      font-weight: 700;
      font-size: 1.2rem;
      display: inline-block;
      animation: scaleIn 0.4s ease-out;
      transition: all var(--transition-normal);
    }
    
    .benefit-item:hover .check-icon {
      transform: scale(1.3) rotate(15deg);
      color: var(--color-blue);
    }
    
    .benefit-item:hover {
      transform: translateX(5px);
      color: var(--color-black);
    }
    
    .section-title {
      font-size: 2.75rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--color-black);
      letter-spacing: -0.02em;
      line-height: 1.2;
      text-align: center;
    }
    
    .section-subtitle {
      font-size: 1.3rem;
      color: var(--color-gray);
      margin-bottom: 3.5rem;
      line-height: 1.7;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 400;
      text-align: center;
    }
    
    .diferenciais-section {
      padding-top: 5rem;
      padding-bottom: 5rem;
      background: var(--color-gray-light);
    }
    
    .diferenciais-title {
      font-size: 2.75rem;
      font-weight: 700;
      color: var(--color-black);
      margin-bottom: 3.5rem;
      text-align: center;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }
    
    .diferencial-card {
      text-align: left;
      padding: 2.5rem;
      height: 100%;
      transition: all var(--transition-normal);
      background: var(--color-white);
      border-radius: 16px;
      box-shadow: var(--shadow-sm);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    
    .diferencial-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--gradient-primary);
      transform: scaleY(0);
      transition: transform var(--transition-normal);
      transform-origin: top;
    }
    
    .diferencial-card:hover::before {
      transform: scaleY(1);
    }
    
    .diferencial-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: var(--shadow-xl);
    }
    
    .diferencial-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-normal);
      position: relative;
    }
    
    .diferencial-card:hover .diferencial-icon {
      transform: scale(1.15) rotate(5deg);
      animation: float 2s ease-in-out infinite;
    }
    
    .diferencial-card:hover .diferencial-icon svg {
      fill: var(--color-purple);
      filter: drop-shadow(0 4px 12px rgba(102, 126, 234, 0.3));
    }
    
    .diferencial-subtitle {
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--color-black);
      margin-bottom: 0;
      line-height: 1.3;
      letter-spacing: -0.01em;
    }
    
    .diferencial-text {
      font-size: 1.1rem;
      color: var(--color-gray-dark);
      line-height: 1.7;
      margin-bottom: 0;
      text-align: left;
      font-weight: 400;
    }
    
    @media (max-width: 991px) {
      .diferenciais-title {
        font-size: 2rem;
        margin-bottom: 2.5rem;
      }
      
      .diferencial-subtitle {
        font-size: 1.3rem;
      }
      
      .diferencial-text {
        font-size: 1rem;
      }
      
      .diferencial-card {
        padding: 1.5rem;
        text-align: center;
      }
      
      .diferencial-text {
        text-align: center;
      }
    }
    
    @media (max-width: 576px) {
      .diferenciais-section {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }
      
      .diferenciais-title {
        font-size: 1.75rem;
        margin-bottom: 2rem;
      }
      
      .diferencial-subtitle {
        font-size: 1.2rem;
        margin-bottom: 0.75rem;
      }
      
      .diferencial-text {
        font-size: 0.95rem;
        line-height: 1.6;
      }
      
      .diferencial-card {
        padding: 1.25rem;
      }
      
      .diferencial-icon {
        margin-bottom: 1.5rem !important;
      }
      
      .diferencial-icon svg {
        width: 48px;
        height: 48px;
      }
    }
    
    .cta-section {
      background: var(--gradient-primary);
      color: white;
      padding: 6rem 0 4rem;
      margin-top: 4rem;
      margin-bottom: 0;
      position: relative;
      overflow: hidden;
    }
    
    .cta-section::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      border-radius: 50%;
      animation: pulse 4s ease-in-out infinite;
    }
    
    .cta-section::after {
      content: '';
      position: absolute;
      bottom: -80%;
      left: -25%;
      width: 680px;
      height: 680px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 85%);
      border-radius: 50%;
      animation: pulse 6s ease-in-out infinite;
      animation-delay: 1s;
    }
    
    .cta-section .container {
      position: relative;
      z-index: 1;
    }
    
    .cta-title {
      font-size: 3rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1.75rem;
      line-height: 1.2;
      text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: -0.02em;
    }
    
    .cta-subtitle {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 3rem;
      line-height: 1.7;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 400;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    }
    
    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .cta-btn-primary,
    .cta-btn-secondary {
      padding: 1.125rem 2.75rem;
      font-size: 1.15rem;
      font-weight: 600;
      border-radius: 12px;
      transition: all var(--transition-normal);
      min-width: 240px;
      text-decoration: none;
      display: inline-block;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
    
    .cta-btn-primary::before,
    .cta-btn-secondary::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      transform: translate(-50%, -50%);
      transition: width 0.6s ease, height 0.6s ease;
    }
    
    .cta-btn-primary:hover::before,
    .cta-btn-secondary:hover::before {
      width: 300px;
      height: 300px;
    }
    
    .cta-btn-primary {
      background: var(--color-white);
      color: var(--color-purple);
      border: 2px solid var(--color-white);
      box-shadow: var(--shadow-lg);
    }
    
    .cta-btn-primary:hover {
      background: rgba(255, 255, 255, 0.95);
      color: var(--color-purple-dark);
      transform: translateY(-4px) scale(1.03);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
    }
    
    .cta-btn-primary:active {
      transform: translateY(-2px) scale(1.01);
    }
    
    .cta-btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.9);
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    }
    
    .cta-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: white;
      transform: translateY(-4px) scale(1.03);
      box-shadow: 0 15px 35px rgba(255, 255, 255, 0.25);
    }
    
    .cta-btn-secondary:active {
      transform: translateY(-2px) scale(1.01);
    }
    
    /* Micro-interações em links e botões */
    a, button {
      transition: all var(--transition-normal);
      position: relative;
    }
    
    a:not(.btn):hover {
      transform: translateX(3px);
    }
    
    .btn:not(:disabled):hover {
      transform: translateY(-2px);
    }
    
    .btn:not(:disabled):active {
      transform: translateY(0) scale(0.98);
    }
    
    @media (max-width: 991px) {
      .cta-section {
        padding: 4rem 0 3rem;
      }
      
      .cta-title {
        font-size: 2.25rem;
      }
      
      .cta-subtitle {
        font-size: 1.15rem;
      }
      
      .cta-buttons {
        gap: 1rem;
      }
      
      .cta-btn-primary,
      .cta-btn-secondary {
        min-width: 200px;
        padding: 0.875rem 2rem;
      }
    }
    
    @media (max-width: 576px) {
      .cta-section {
        padding: 3rem 0 2.5rem;
        margin-top: 2rem;
      }
      
      .cta-title {
        font-size: 1.75rem;
        margin-bottom: 1.25rem;
      }
      
      .cta-subtitle {
        font-size: 1rem;
        margin-bottom: 2rem;
      }
      
      .cta-buttons {
        flex-direction: column;
        width: 100%;
        gap: 1rem;
      }
      
      .cta-btn-primary,
      .cta-btn-secondary {
        width: 100%;
        max-width: 300px;
        padding: 0.875rem 1.5rem;
        font-size: 1rem;
      }
    }
  `]
})
export class Home implements OnInit, OnDestroy {
  @ViewChild('laptopRef', { static: true }) laptopRef?: ElementRef<HTMLElement>;
  screenVisible = false;
  private screenObserver?: IntersectionObserver;

  ngOnInit(): void {
    const laptopEl = this.laptopRef?.nativeElement;
    if (laptopEl && typeof IntersectionObserver !== 'undefined') {
      this.screenObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.screenVisible = true;
              this.screenObserver?.disconnect();
            }
          });
        },
        { threshold: 0.35 }
      );

      this.screenObserver.observe(laptopEl);
    } else {
      // Fallback: exibe diretamente caso IntersectionObserver não esteja disponível
      this.screenVisible = true;
    }
  }

  ngOnDestroy(): void {
    this.screenObserver?.disconnect();
  }

  servicos = [
    {
      titulo: 'Contabilidade, demonstração e pareceres',
      descricao: 'Gestão completa da sua contabilidade com relatórios e pareceres especializados',
      icone: 'chart'
    },
    {
      titulo: 'Gestão de folha de pagamento',
      descricao: 'Processamento completo de folha com portal do colaborador',
      icone: 'users'
    },
    {
      titulo: 'Processamento fiscal e Legislação',
      descricao: 'Cumprimento de todas as obrigações fiscais e legais',
      icone: 'file'
    },
    {
      titulo: 'Gestão Societária',
      descricao: 'Abertura, alterações e gestão completa de contratos sociais',
      icone: 'building'
    },
    {
      titulo: 'Integração com ERPs',
      descricao: 'Integração com mais de 400 sistemas ERP e controle financeiro',
      icone: 'link'
    },
    {
      titulo: 'Portal do cliente',
      descricao: 'Acesso 24/7 com checklist, documentos digitais e relatórios',
      icone: 'monitor'
    }
  ];

  planos = [
    {
      nome: 'Smart',
      subtitulo: 'Ideal para novos negócios',
      descricao: 'Perfeito para empresas em fase inicial de crescimento',
      destacado: false,
      beneficios: [
        'ME (Microempresas) ou EPP (Empresas de Pequeno Porte)',
        'Empresas do Simples Nacional e Lucro Presumido',
        'Todos os segmentos (Comércio, Serviço, Indústria)',
        'Portal do Cliente on-line (24 horas disponível)',
        'Atendimento com especialistas em seu segmento',
        'Suporte via WhatsApp, e-mail e telefone',
        'Folha de pagamento e encargos',
        'Apuração das obrigações fiscais',
        'Contabilidade e relatórios gerenciais'
      ]
    },
    {
      nome: 'Agile',
      subtitulo: 'Ideal para empresas em crescimento',
      descricao: 'Para empresas que precisam de um parceiro estratégico',
      destacado: true,
      beneficios: [
        'Todos os benefícios do plano Smart e mais:',
        'Empresas do Simples Nacional, Lucro Presumido e Lucro Real',
        'Contabilidade e relatórios gerenciais personalizados',
        'Gestão de Folha com plataforma administrativa',
        'Integração com o software financeiro da sua empresa',
        'Suporte contínuo com especialistas',
        'Reuniões estratégicas quando necessário',
        'Planejamento Tributário',
        'Diagnóstico Fiscal',
        'Relatórios e Dashboard (B.I) personalizados'
      ]
    },
    {
      nome: 'Outsourcing',
      subtitulo: 'Ideal para grandes empresas',
      descricao: 'Atendimento consultivo e personalizado para empresas em constante desenvolvimento',
      destacado: false,
      beneficios: [
        'Todos os benefícios do plano Agile e mais:',
        'Empresas do Lucro Presumido e Lucro Real',
        'Contabilidade consultiva para gestores',
        'Relatórios gerenciais personalizados com dashboard',
        'Trabalhamos no seu ERP com profissionais especializados',
        'Atendimento consultivo com especialistas',
        'Gestor de projeto dedicado',
        'Atendimento a auditorias externas',
        'Report Internacional para operações globais'
      ]
    }
  ];

}
