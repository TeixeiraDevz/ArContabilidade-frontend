# Backend Landing Page AR

API Node.js + Express + TypeScript para a landing page.

## Rodando localmente

```bash
npm install
npm run dev
```

## Endpoints

- `GET /api/health` - health check
- `GET /api/landing/facilitators` - lista de facilitadores contábeis
- `POST /api/landing/contacts` - cria lead de contato da landing
- `GET /api/landing/contacts` - lista leads cadastrados

## Exemplo de payload (`POST /api/landing/contacts`)

```json
{
  "name": "Maria da Silva",
  "email": "maria@email.com",
  "phone": "+55 92 99999-0000",
  "company": "Empresa Exemplo",
  "message": "Gostaria de uma consultoria."
}
```
