import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './app/layout/header/header';
import { Footer } from './app/layout/footer/footer';
import { FooterCta } from './app/layout/footer-cta/footer-cta';
import { AssistantWidget } from './app/features/assistente/components/assistant-widget/assistant-widget';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FooterCta, Footer, AssistantWidget],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ar-gestao-frontend');
}
