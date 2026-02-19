import { Redis } from '@upstash/redis';
import { z } from 'zod';

const CONTACTS_KEY = 'landing-contacts';

const createContactSchema = z.object({
  name: z.string().trim().min(3).max(120),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().min(8).max(30),
  company: z.string().trim().max(150).optional(),
  message: z.string().trim().min(5).max(2000)
});

type ContactRecord = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  message: string;
  createdAt: string;
};

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

async function getContacts(redis: Redis): Promise<ContactRecord[]> {
  const raw = await redis.get(CONTACTS_KEY);
  if (raw == null) return [];
  const parsed = JSON.parse(raw as string);
  return Array.isArray(parsed) ? parsed : [];
}

export async function GET() {
  const redis = getRedis();
  if (!redis) {
    return Response.json(
      { error: 'Storage not configured. Add Upstash Redis in Vercel project.' },
      { status: 503 }
    );
  }
  const contacts = await getContacts(redis);
  return Response.json(contacts);
}

export async function POST(request: Request) {
  const redis = getRedis();
  if (!redis) {
    return Response.json(
      { error: 'Storage not configured. Add Upstash Redis in Vercel project.' },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = createContactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, phone, company, message } = parsed.data;
  const record: ContactRecord = {
    id: crypto.randomUUID(),
    name,
    email,
    phone,
    company: company ?? null,
    message,
    createdAt: new Date().toISOString()
  };

  const contacts = await getContacts(redis);
  contacts.push(record);
  await redis.set(CONTACTS_KEY, JSON.stringify(contacts));

  return Response.json(record, { status: 201 });
}
