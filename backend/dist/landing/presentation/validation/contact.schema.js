"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactSchema = void 0;
const zod_1 = require("zod");
exports.createContactSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(3).max(120),
    email: zod_1.z.string().trim().email().max(180),
    phone: zod_1.z.string().trim().min(8).max(30),
    company: zod_1.z.string().trim().max(150).optional(),
    message: zod_1.z.string().trim().min(5).max(2000)
});
