<!-- 57d04a88-c486-4452-8041-8816d99e6a55 6f0ed192-4cf5-4c4e-beb4-bf399679bf31 -->
# Elevar Design Inspirado no Stable

## Objetivo

Melhorar o design do site inspirado no Stable (stableapp.cloud), adicionando animações sutis com objetos de escritório, mantendo a identidade de escritório de contabilidade.

## Paleta de Cores

- **Azul**: #2563eb (azul profissional)
- **Branco**: #ffffff (fundo limpo)
- **Preto**: #1a1a1a (textos principais)
- **Roxo**: #667eea (destaques e gradientes)

## Animações com Objetos de Escritório

### 1. Hero Section

- Animação de calculadora flutuante (SVG animado)
- Gráficos aparecendo suavemente
- Documentos deslizando
- Efeito parallax sutil

### 2. Cards de Serviços

- Ícones com animação de "escrever" (caneta)
- Hover com efeito de papel sendo virado
- Animação de gráfico crescendo
- Micro-interações ao passar o mouse

### 3. Seção de Métricas

- Números contando (count-up animation)
- Ícones de calculadora/gráfico animados
- Efeito de "digitando" nos números

### 4. Cards de Planos

- Animação de documento abrindo
- Hover com efeito de prancheta
- Badge "Mais Popular" com pulso sutil

### 5. Diferenciais

- Ícones com animação de movimento
- Efeito de "check" aparecendo
- Transições suaves entre estados

## Melhorias de Design (Estilo Stable)

### Tipografia

- Fontes mais modernas e limpas
- Hierarquia clara de tamanhos
- Espaçamento generoso entre linhas

### Espaçamentos

- Padding e margins mais generosos
- Seções com mais respiro
- Cards com espaçamento interno adequado

### Gradientes e Sombras

- Gradientes sutis (azul → roxo)
- Sombras suaves e modernas
- Efeitos de profundidade

### Micro-interações

- Hover effects suaves
- Transições de 0.3s ease
- Feedback visual em todos os elementos clicáveis

### Layout

- Container max-width adequado
- Grid responsivo melhorado
- Espaçamento consistente

## Estrutura de Arquivos

```
frontend/src/
├── styles.scss (variáveis de cores e animações globais)
├── app/
│   └── features/
│       └── home/
│           └── pages/
│               └── home/
│                   ├── home.html
│                   └── home.ts (estilos e animações)
```

## Animações CSS a Implementar

1. **@keyframes float** - Objetos flutuando
2. **@keyframes slideIn** - Elementos entrando
3. **@keyframes countUp** - Números contando
4. **@keyframes write** - Efeito de escrita
5. **@keyframes pulse** - Pulsação sutil
6. **@keyframes fadeInUp** - Fade in com movimento

## Objetos de Escritório para Animar

- Calculadora (hero)
- Gráficos/Charts (métricas)
- Documentos (planos)
- Caneta (serviços)
- Prancheta (diferenciais)
- Check marks (benefícios)

## Manter Campos Padrões

- Home (hero, serviços, planos, métricas, diferenciais, CTA)
- Clientes
- Equipe
- Login
- Footer
- Header

## Arquivos-Chave

- `frontend/src/styles.scss` - Variáveis CSS e animações globais
- `frontend/src/app/app/features/home/pages/home/home.ts` - Estilos e animações da home
- `frontend/src/app/app/features/home/pages/home/home.html` - Estrutura HTML

### To-dos

- [x] Adicionar variáveis CSS para paleta de cores (azul, branco, preto, roxo) no styles.scss
- [x] Criar animações CSS com objetos de escritório (calculadora, gráficos, documentos, caneta)
- [x] Adicionar animações sutis no hero (calculadora flutuante, gráficos, parallax)
- [x] Melhorar animações dos cards (hover effects, micro-interações, objetos de escritório)
- [ ] Adicionar animação de contagem nos números e ícones animados na seção de métricas
- [ ] Melhorar tipografia com hierarquia clara e espaçamentos generosos
- [ ] Adicionar gradientes sutis e sombras modernas seguindo estilo Stable
- [ ] Implementar micro-interações em todos os elementos interativos