import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styles: [`
    .hero-section {
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: white;
      min-height: 90vh;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
      z-index: 1;
    }
    
    .hero-section .container {
      position: relative;
      z-index: 2;
    }
    
    .hero-title {
      color: white;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      animation: fadeInUp 0.8s ease-out;
      line-height: 1.2;
    }
    
    .hero-subtitle {
      color: rgba(255, 255, 255, 0.95);
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
      animation: fadeInUp 1s ease-out;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .hero-buttons {
      animation: fadeInUp 1.2s ease-out;
    }
    
    .hero-buttons .btn {
      transition: all 0.3s ease;
      min-width: 200px;
    }
    
    .hero-buttons .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
    }
    
    .hero-buttons .btn-primary {
      background: white;
      color: #667eea;
      border: none;
    }
    
    .hero-buttons .btn-primary:hover {
      background: rgba(255, 255, 255, 0.95);
      color: #764ba2;
    }
    
    .hero-buttons .btn-outline-light:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
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
    
    .servico-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
    }
    
    .servico-card:hover .servico-icon {
      transform: scale(1.1);
    }
    
    .servico-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 100%;
    }
    
    .servico-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .plano-card {
      border: 2px solid #e9ecef;
      transition: all 0.3s ease;
      height: 100%;
    }
    
    .plano-card:hover {
      border-color: #667eea;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    }
    
    .plano-card.featured {
      border-color: #667eea;
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
    }
    
    .metrics-section {
      margin-top: 4rem;
      padding-top: 5rem;
    }
    
    .metrics-container {
      position: relative;
      text-align: center;
    }
    
    .metrics-arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      animation: bounce 2s infinite;
    }
    
    .metrics-arrow svg {
      opacity: 0.7;
      transition: all 0.3s ease;
    }
    
    .metrics-arrow:hover svg {
      opacity: 1;
      transform: scale(1.1);
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
    
    .metric-card {
      text-align: center;
      padding: 2rem 1rem;
      transition: all 0.3s ease;
      border-radius: 12px;
      background: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    
    .metric-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
    }
    
    .metric-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: #667eea;
      margin-bottom: 0.5rem;
      line-height: 1;
    }
    
    .metric-label {
      font-size: 0.9rem;
      color: #6c757d;
      margin-bottom: 0;
      font-weight: 500;
      line-height: 1.4;
    }
    
    @media (max-width: 991px) {
      .metric-number {
        font-size: 2rem;
      }
      
      .metric-label {
        font-size: 0.85rem;
      }
      
      .metrics-arrow svg {
        width: 50px;
        height: 50px;
      }
    }
    
    @media (max-width: 576px) {
      .metrics-section {
        margin-top: 2rem;
        padding-top: 3rem;
      }
      
      .metric-number {
        font-size: 1.75rem;
      }
      
      .metric-label {
        font-size: 0.8rem;
      }
      
      .metric-card {
        padding: 1.5rem 1rem;
      }
      
      .metrics-arrow svg {
        width: 40px;
        height: 40px;
      }
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .section-subtitle {
      font-size: 1.25rem;
      color: #6c757d;
      margin-bottom: 3rem;
    }
    
    .diferenciais-section {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    
    .diferenciais-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #333;
      margin-bottom: 3rem;
      text-align: center;
    }
    
    .diferencial-card {
      text-align: left;
      padding: 2rem;
      height: 100%;
      transition: all 0.3s ease;
    }
    
    .diferencial-card:hover {
      transform: translateY(-5px);
    }
    
    .diferencial-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
    }
    
    .diferencial-card:hover .diferencial-icon {
      transform: scale(1.1);
    }
    
    .diferencial-subtitle {
      font-size: 1.5rem;
      font-weight: 700;
      color: #333;
      margin-bottom: 1rem;
      line-height: 1.3;
    }
    
    .diferencial-text {
      font-size: 1.05rem;
      color: #6c757d;
      line-height: 1.7;
      margin-bottom: 0;
      text-align: left;
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
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 5rem 0;
      margin-top: 4rem;
    }
    
    .cta-title {
      font-size: 2.75rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    }
    
    .cta-subtitle {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 2.5rem;
      line-height: 1.6;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .cta-btn-primary,
    .cta-btn-secondary {
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 8px;
      transition: all 0.3s ease;
      min-width: 220px;
      text-decoration: none;
      display: inline-block;
    }
    
    .cta-btn-primary {
      background: white;
      color: #667eea;
      border: 2px solid white;
    }
    
    .cta-btn-primary:hover {
      background: rgba(255, 255, 255, 0.95);
      color: #764ba2;
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    .cta-btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }
    
    .cta-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
    }
    
    @media (max-width: 991px) {
      .cta-section {
        padding: 4rem 0;
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
        padding: 3rem 0;
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
export class Home {
  currentYear = new Date().getFullYear();

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

  metricas = [
    { numero: '35+', descricao: 'Anos de empresa' },
    { numero: '1200+', descricao: 'Colaboradores' },
    { numero: '400+', descricao: 'Softwares integrados' },
    { numero: '50k+', descricao: 'Folhas processadas' },
    { numero: '9.5', descricao: 'Na pesquisa de satisfação' },
    { numero: '2BI+', descricao: 'Receita administrada' }
  ];
}
