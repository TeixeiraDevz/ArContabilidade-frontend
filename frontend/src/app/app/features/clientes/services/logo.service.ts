import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogoService {
  private readonly clearbitApi = 'https://logo.clearbit.com';
  private readonly faviconApi = 'https://www.google.com/s2/favicons?domain=';
  private readonly brasilApi = 'https://brasilapi.com.br/api/cnpj/v1';
  
  // Mapeamento de logos conhecidos por CNPJ
  private readonly logosConhecidos: Map<string, string> = new Map([
    // AR Contabilidade
    ['09410506000143', 'https://logo.clearbit.com/arcontabilidade.com.br'],
    
    // Impacto Infovias (dois CNPJs)
    ['37606962000107', 'https://logo.clearbit.com/impactoinfovias.com.br'],
    ['42635090000137', 'https://logo.clearbit.com/impactoinfovias.com.br'],
    
    // Construtora Savassi
    ['03952190000135', 'https://logo.clearbit.com/construtorasavassi.com.br'],
    
    // Cohen Comunicação
    ['43286487000123', 'https://logo.clearbit.com/cohencomunicacao.com.br'],
    
    // Arteprintbox
    ['03516849000100', 'https://logo.clearbit.com/arteprintbox.com.br'],
    
    // Paperbox
    ['17230003000114', 'https://logo.clearbit.com/paperbox.com.br'],
    
    // Trans Pantanal
    ['64126758000404', 'https://logo.clearbit.com/transpantanal.com.br'],
    
    // Transbrito
    ['13053658000103', 'https://logo.clearbit.com/transbrito.com.br'],
    
    // ILS Logistics
    ['04866319000155', 'https://logo.clearbit.com/ilslogistics.com.br'],
    
    // IEX Comissaria
    ['09639773000197', 'https://logo.clearbit.com/iexcomissaria.com.br'],
    
    // Belíssimas Lentes
    ['36110703000110', 'https://logo.clearbit.com/belissimaslentes.com.br'],
    
    // Ambient Clear
    ['37465173000195', 'https://logo.clearbit.com/ambientclear.com.br'],
    
    // Ambient Office
    ['35637190000137', 'https://logo.clearbit.com/ambientoffice.com.br'],
  ]);

  constructor(private http: HttpClient) {}

  /**
   * Busca logo da empresa por nome ou CNPJ
   * Tenta múltiplas fontes em ordem de prioridade
   */
  buscarLogo(nomeEmpresa: string, cnpj?: string): Observable<string | null> {
    return this.buscarLogoMultiplo(nomeEmpresa, cnpj);
  }


  /**
   * Tenta construir domínio baseado no nome da empresa
   */
  private construirDominioPorCNPJ(nomeEmpresa: string): string | null {
    return this.extrairDominio(nomeEmpresa);
  }

  /**
   * Extrai possível domínio do nome da empresa
   */
  private extrairDominio(nomeEmpresa: string): string | null {
    if (!nomeEmpresa) return null;

    // Remove caracteres especiais e normaliza
    const nomeLimpo = nomeEmpresa
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim();

    // Tenta extrair palavras-chave que podem ser domínio
    const palavras = nomeLimpo.split(/\s+/);
    
    // Remove palavras comuns de empresa
    const palavrasFiltradas = palavras.filter(p => 
      !['ltda', 'eireli', 'me', 'ep', 'epp', 'sa', 'spe', 'filial', 'matriz'].includes(p) &&
      p.length > 2
    );

    if (palavrasFiltradas.length === 0) return null;

    // Estratégias para construir domínio:
    // 1. Primeira palavra significativa
    // 2. Combinação de palavras principais
    // 3. Palavra mais curta (geralmente marca)
    
    // Tentar primeira palavra
    let dominio = palavrasFiltradas[0] + '.com.br';
    
    // Se primeira palavra for muito curta, tentar combinação
    if (palavrasFiltradas[0].length < 4 && palavrasFiltradas.length > 1) {
      dominio = palavrasFiltradas[0] + palavrasFiltradas[1].substring(0, 3) + '.com.br';
    }

    return dominio;
  }

  /**
   * Busca informações da empresa por CNPJ e tenta obter logo
   */
  private buscarPorCNPJ(cnpj: string): Observable<string | null> {
    const cnpjLimpo = cnpj.replace(/\D/g, '');
    const url = `${this.brasilApi}/${cnpjLimpo}`;
    
    return this.http.get<any>(url).pipe(
      map((data: any) => {
        // BrasilAPI retorna informações da empresa
        // Tentar extrair domínio do email ou site se disponível
        if (data.email) {
          const dominio = data.email.split('@')[1];
          if (dominio) {
            const clearbitUrl = `${this.clearbitApi}/${dominio}`;
            return clearbitUrl;
          }
        }
        
        // Tentar buscar por nome da empresa
        const nomeEmpresa = data.nome || data.razao_social;
        if (nomeEmpresa) {
          const dominio = this.extrairDominio(nomeEmpresa);
          if (dominio) {
            return `${this.clearbitApi}/${dominio}`;
          }
        }
        
        return null;
      }),
      catchError(() => of(null))
    );
  }

  /**
   * Gera URL de logo baseada no CNPJ (para logos já salvas localmente)
   */
  getLogoLocal(cnpj: string): string {
    const cnpjLimpo = cnpj.replace(/\D/g, '');
    return `/images/clientes/${cnpjLimpo}.png`;
  }

  /**
   * Verifica se uma URL de imagem é válida
   */
  verificarImagemValida(url: string): Observable<boolean> {
    return this.http.head(url, { observe: 'response' }).pipe(
      map(response => response.status === 200),
      catchError(() => of(false))
    );
  }

  /**
   * Busca logo usando múltiplas estratégias sequencialmente e retorna a primeira válida
   */
  buscarLogoMultiplo(nomeEmpresa: string, cnpj?: string): Observable<string | null> {
    // Estratégia 1: Logo conhecido no mapeamento
    if (cnpj) {
      const cnpjLimpo = cnpj.replace(/\D/g, '');
      const logoConhecido = this.logosConhecidos.get(cnpjLimpo);
      if (logoConhecido) {
        return this.verificarImagemValida(logoConhecido).pipe(
          switchMap(valida => valida ? of(logoConhecido) : this.tentarProximasEstrategias(nomeEmpresa, cnpj))
        );
      }
    }

    return this.tentarProximasEstrategias(nomeEmpresa, cnpj);
  }

  /**
   * Tenta as próximas estratégias de busca de logo
   */
  private tentarProximasEstrategias(nomeEmpresa: string, cnpj?: string): Observable<string | null> {
    const dominio = this.extrairDominio(nomeEmpresa);
    
    // Estratégia 2: Clearbit com domínio extraído
    if (dominio) {
      const clearbitUrl = `${this.clearbitApi}/${dominio}`;
      return this.http.head(clearbitUrl, { observe: 'response' }).pipe(
        map(() => clearbitUrl),
        catchError(() => {
          // Se Clearbit falhar, tentar BrasilAPI
          if (cnpj) {
            return this.buscarPorCNPJ(cnpj).pipe(
              catchError(() => {
                // Último recurso: favicon
                return of(`${this.faviconApi}${dominio}&sz=256`);
              })
            );
          }
          // Último recurso: favicon
          return of(`${this.faviconApi}${dominio}&sz=256`);
        })
      );
    }

    // Estratégia 3: BrasilAPI + Clearbit (se não tiver domínio extraído)
    if (cnpj) {
      return this.buscarPorCNPJ(cnpj).pipe(
        catchError(() => {
          // Tentar construir domínio do nome como último recurso
          const dominioCNPJ = this.construirDominioPorCNPJ(nomeEmpresa);
          if (dominioCNPJ) {
            return of(`${this.faviconApi}${dominioCNPJ}&sz=256`);
          }
          return of(null);
        })
      );
    }

    return of(null);
  }
}

