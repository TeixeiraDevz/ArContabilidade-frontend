"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpErrorMiddleware = httpErrorMiddleware;
const zod_1 = require("zod");
const app_error_1 = require("./app-error");
function httpErrorMiddleware(error, _request, response, _next) {
    if (error instanceof app_error_1.AppError) {
        response.status(error.statusCode).json({
            message: error.message,
            details: error.details ?? null
        });
        return;
    }
    if (error instanceof zod_1.ZodError) {
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
