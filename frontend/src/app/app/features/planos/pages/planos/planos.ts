import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './planos.html',
  styles: [`
    :host {
      display: block;
      background: var(--color-gray-light);
    }

    .planos-hero {
      padding: 7rem 0 4rem;
      background: linear-gradient(140deg, rgba(102, 126, 234, 0.18) 0%, rgba(118, 75, 162, 0.18) 100%);
      position: relative;
      overflow: hidden;
    }

    .planos-hero::before,
    .planos-hero::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.35;
      pointer-events: none;
    }

    .planos-hero::before {
      width: 360px;
      height: 360px;
      background: rgba(102, 126, 234, 0.6);
      top: -120px;
      left: -80px;
    }

    .planos-hero::after {
      width: 420px;
      height: 420px;
      background: rgba(118, 75, 162, 0.5);
      bottom: -160px;
      right: -120px;
    }

    .badge-soft {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1.1rem;
      border-radius: 999px;
      background: rgba(102, 126, 234, 0.15);
      color: var(--color-purple);
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      color: var(--color-black);
      margin-bottom: 1.25rem;
      letter-spacing: -0.025em;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: var(--color-gray);
      line-height: 1.75;
      max-width: 750px;
      margin: 0 auto 2.5rem;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .hero-actions .btn {
      min-width: 200px;
      padding: 0.95rem 2.5rem;
      border-radius: 14px;
      font-weight: 600;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    }

    .hero-actions .btn-primary {
      background: var(--gradient-primary);
      color: white;
      border: none;
      box-shadow: 0 22px 40px rgba(102, 126, 234, 0.28);
    }

    .hero-actions .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 26px 48px rgba(118, 75, 162, 0.35);
    }

    .hero-actions .btn-outline {
      background: rgba(255, 255, 255, 0.85);
      color: var(--color-purple);
      border: 1.5px solid rgba(102, 126, 234, 0.3);
    }

    .hero-actions .btn-outline:hover {
      transform: translateY(-3px);
      box-shadow: 0 22px 40px rgba(102, 126, 234, 0.18);
    }

    .planos-cards {
      padding: 5rem 0;
      margin-top: -3rem;
    }

    .plano-card {
      background: var(--color-white);
      border-radius: 24px;
      padding: 2.5rem 2.25rem;
      box-shadow: 0 25px 55px rgba(102, 126, 234, 0.12);
      height: 100%;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    }

    .plano-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top right, rgba(102, 126, 234, 0.08), transparent 70%);
      opacity: 0;
      transition: opacity var(--transition-normal);
    }

    .plano-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 35px 60px rgba(102, 126, 234, 0.2);
    }

    .plano-card:hover::after {
      opacity: 1;
    }

    .plano-card.destacado {
      border: 1.5px solid rgba(102, 126, 234, 0.35);
      box-shadow: 0 30px 75px rgba(102, 126, 234, 0.22);
      background: linear-gradient(160deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
    }

    .badge-top {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      padding: 0.45rem 0.9rem;
      border-radius: 999px;
      background: rgba(102, 126, 234, 0.15);
      color: var(--color-purple);
      font-weight: 600;
      font-size: 0.85rem;
    }

    .plano-header h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--color-black);
      margin-bottom: 0.35rem;
    }

    .plano-subtitle {
      color: var(--color-gray);
      margin-bottom: 0;
      font-size: 1rem;
    }

    .plano-description {
      color: var(--color-gray-dark);
      line-height: 1.7;
      margin-bottom: 0;
    }

    .plano-benefits {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .plano-benefits li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 0.98rem;
      color: var(--color-black);
    }

    .check-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: rgba(102, 126, 234, 0.18);
      color: var(--color-purple);
      font-weight: 700;
      flex-shrink: 0;
    }

    .plano-footer {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-top: auto;
    }

    .plano-footer .btn {
      padding: 0.85rem 1rem;
      border-radius: 12px;
      font-weight: 600;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    }

    .plano-footer .btn-primary {
      background: var(--gradient-primary);
      color: white;
      border: none;
      box-shadow: 0 18px 35px rgba(102, 126, 234, 0.25);
    }

    .plano-footer .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 22px 42px rgba(118, 75, 162, 0.32);
    }

    .btn-link {
      text-decoration: none;
      color: var(--color-purple);
      font-weight: 600;
      font-size: 0.95rem;
      align-self: center;
      transition: color var(--transition-fast);
    }

    .btn-link:hover {
      color: var(--color-purple-dark);
    }

    .planos-diferenciais {
      padding: 5rem 0 6rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-black);
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
      color: var(--color-gray);
      line-height: 1.7;
      margin-bottom: 0;
    }

    .feature-card {
      background: var(--color-white);
      border-radius: 20px;
      padding: 2.25rem 2rem;
      height: 100%;
      box-shadow: 0 22px 45px rgba(102, 126, 234, 0.1);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 30px 55px rgba(102, 126, 234, 0.16);
    }

    .feature-icon {
      width: 60px;
      height: 60px;
      border-radius: 18px;
      background: rgba(102, 126, 234, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-purple);
    }

    .feature-card h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--color-black);
      margin-bottom: 0;
    }

    .feature-card p {
      color: var(--color-gray-dark);
      margin-bottom: 0;
      line-height: 1.7;
    }

    @media (max-width: 991px) {
      .hero-title {
        font-size: 2.4rem;
      }

      .planos-cards {
        margin-top: 0;
      }
    }

    @media (max-width: 768px) {
      .planos-hero {
        padding: 5.5rem 0 3.5rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.05rem;
      }

      .plano-card {
        padding: 2rem;
      }

      .form-group.two-columns {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 576px) {
      .hero-actions .btn {
        width: 100%;
      }
    }
  `]
})
export class Planos {
  planos = [
    {
      nome: 'Smart',
      subtitulo: 'Ideal para novos negócios',
      descricao: 'Perfeito para empresas que estão iniciando e precisam estruturar processos contábeis e fiscais.',
      destacado: false,
      beneficios: [
        'Atendimento especializado para ME e EPP',
        'Apuração de impostos do Simples Nacional',
        'Folha de pagamento essencial',
        'Organização de documentos digitais',
        'Relatórios financeiros trimestrais',
        'Suporte via WhatsApp e e-mail'
      ]
    },
    {
      nome: 'Agile',
      subtitulo: 'Para empresas em expansão',
      descricao: 'Engloba consultoria estratégica, indicadores e integrações que acompanham o ritmo de crescimento.',
      destacado: true,
      beneficios: [
        'Todos os serviços do plano Smart',
        'Planejamento tributário consultivo',
        'Relatórios e dashboards personalizados (B.I.)',
        'Gestão de folha completa com controle de ponto',
        'Integração com ERP e plataformas financeiras',
        'Reuniões estratégicas periódicas com especialistas'
      ]
    },
    {
      nome: 'Outsourcing',
      subtitulo: 'Para operações complexas',
      descricao: 'Equipe dedicada, integração profunda com seus sistemas e suporte consultivo de alta performance.',
      destacado: false,
      beneficios: [
        'Todos os serviços do plano Agile',
        'Equipe alocada dedicada à sua empresa',
        'Gestão de processos específicos (fiscal, financeiro, RH)',
        'Suporte em auditorias e report internacional',
        'Fluxo de fechamento mensal customizado',
        'Service desk com SLA definido'
      ]
    }
  ];
}

