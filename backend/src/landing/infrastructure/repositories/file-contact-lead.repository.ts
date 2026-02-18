import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import {
  ContactLeadPersistenceDto,
  CreateContactLeadPersistenceDto
} from '../../application/dtos/contact-lead-persistence.dto';
import { ContactLeadRepository } from '../../application/repositories/contact-lead.repository';

export class FileContactLeadRepository implements ContactLeadRepository {
  constructor(private readonly storageFilePath: string) {}

  async create(input: CreateContactLeadPersistenceDto): Promise<ContactLeadPersistenceDto> {
    const current = await this.readAll();
    current.push(input);
    await this.saveAll(current);
    return input;
  }

  async list(): Promise<ContactLeadPersistenceDto[]> {
    return this.readAll();
  }

  private async readAll(): Promise<ContactLeadPersistenceDto[]> {
    await this.ensureStorageFile();
    const raw = await readFile(this.storageFilePath, 'utf-8');
    if (!raw.trim()) {
      return [];
    }

    const parsed = JSON.parse(raw) as ContactLeadPersistenceDto[];
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  }

  private async saveAll(items: ContactLeadPersistenceDto[]): Promise<void> {
    await this.ensureStorageFile();
    await writeFile(this.storageFilePath, JSON.stringify(items, null, 2), 'utf-8');
  }

  private async ensureStorageFile(): Promise<void> {
    const folder = dirname(this.storageFilePath);
    await mkdir(folder, { recursive: true });
    await writeFile(this.storageFilePath, '', { flag: 'a' });
    const raw = await readFile(this.storageFilePath, 'utf-8');
    if (!raw.trim()) {
      await writeFile(this.storageFilePath, '[]', 'utf-8');
    }
  }
}
