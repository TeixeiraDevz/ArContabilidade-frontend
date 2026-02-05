export interface RecursoPlano {
  nome: string;
  incluido: boolean;
}

export interface Plano {
  id: string;
  nome: 'Básico' | 'Intermediário' | 'Enterprise';
  publicoIdeal: string;
  regimesAtendidos: string[];
  faturamentoMedioMensal: string;
  atividadeEmpresa: string[];
  canaisAtendimento: string[];
  relatoriosGerenciais: string;
  recursos: RecursoPlano[];
  imagemUrl?: string;
  descricaoResumida?: string;
  recursosPrincipais?: string[];
  diferenciais?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface PlanoDTO {
  nome: 'Básico' | 'Intermediário' | 'Enterprise';
  publicoIdeal: string;
  regimesAtendidos: string[];
  faturamentoMedioMensal: string;
  atividadeEmpresa: string[];
  canaisAtendimento: string[];
  relatoriosGerenciais: string;
  recursos: RecursoPlano[];
  imagemUrl?: string;
  descricaoResumida?: string;
  recursosPrincipais?: string[];
  diferenciais?: string[];
}

