import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { AppError } from './app-error';

export function httpErrorMiddleware(
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction
): void {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      message: error.message,
      details: error.details ?? null
    });
    return;
  }

  if (error instanceof ZodError) {
    response.status(400).json({
      message: 'Dados inválidos na requisição.',
      details: error.issues
    });
    return;
  }

  response.status(500).json({
    message: 'Erro interno no servidor.',
    details: null
  });
}
