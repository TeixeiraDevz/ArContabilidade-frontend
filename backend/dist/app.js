"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const node_path_1 = require("node:path");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const landing_routes_1 = require("./landing/presentation/routes/landing.routes");
const http_error_middleware_1 = require("./shared/errors/http-error-middleware");
function createApp() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: process.env.FRONTEND_URL || 'http://localhost:4200'
    }));
    app.use(express_1.default.json());
    app.get('/api/health', (_request, response) => {
        response.status(200).json({
            status: 'ok',
            service: 'ar-landing-backend'
        });
    });
    const storageFilePath = (0, node_path_1.resolve)(process.cwd(), 'data', 'landing-contacts.json');
    app.use('/api/landing', (0, landing_routes_1.createLandingRouter)(storageFilePath));
    app.use(http_error_middleware_1.httpErrorMiddleware);
    return app;
}
