import { resolve } from 'node:path';
import cors from 'cors';
import express from 'express';
import { createLandingRouter } from './landing/presentation/routes/landing.routes';
import { httpErrorMiddleware } from './shared/errors/http-error-middleware';

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: process.env.FRONTEND_URL || 'http://localhost:4200'
    })
  );

  app.use(express.json());

  app.get('/api/health', (_request, response) => {
    response.status(200).json({
      status: 'ok',
      service: 'ar-landing-backend'
    });
  });

  const storageFilePath = resolve(process.cwd(), 'data', 'landing-contacts.json');
  app.use('/api/landing', createLandingRouter(storageFilePath));

  app.use(httpErrorMiddleware);

  return app;
}
