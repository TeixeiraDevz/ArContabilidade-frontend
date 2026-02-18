"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileContactLeadRepository = void 0;
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
class FileContactLeadRepository {
    storageFilePath;
    constructor(storageFilePath) {
        this.storageFilePath = storageFilePath;
    }
    async create(input) {
        const current = await this.readAll();
        current.push(input);
        await this.saveAll(current);
        return input;
    }
    async list() {
        return this.readAll();
    }
    async readAll() {
        await this.ensureStorageFile();
        const raw = await (0, promises_1.readFile)(this.storageFilePath, 'utf-8');
        if (!raw.trim()) {
            return [];
        }
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
            return [];
        }
        return parsed;
    }
    async saveAll(items) {
        await this.ensureStorageFile();
        await (0, promises_1.writeFile)(this.storageFilePath, JSON.stringify(items, null, 2), 'utf-8');
    }
    async ensureStorageFile() {
        const folder = (0, node_path_1.dirname)(this.storageFilePath);
        await (0, promises_1.mkdir)(folder, { recursive: true });
        await (0, promises_1.writeFile)(this.storageFilePath, '', { flag: 'a' });
        const raw = await (0, promises_1.readFile)(this.storageFilePath, 'utf-8');
        if (!raw.trim()) {
            await (0, promises_1.writeFile)(this.storageFilePath, '[]', 'utf-8');
        }
    }
}
exports.FileContactLeadRepository = FileContactLeadRepository;
