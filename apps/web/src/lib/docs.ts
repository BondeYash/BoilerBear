import { promises as fs } from 'node:fs';
import path from 'node:path';

export interface DocFrontmatter {
  title: string;
  description: string;
  order: number;
}

export interface DocPage extends DocFrontmatter {
  slug: string;
  content: string;
}

const DOCS_DIR = path.join(process.cwd(), 'src', 'content', 'docs');

const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;

function parseFrontmatter(raw: string): { meta: DocFrontmatter; body: string } {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) {
    throw new Error('Doc is missing frontmatter delimited by ---.');
  }
  const [, header, body] = match;
  const meta: Partial<DocFrontmatter> = {};
  for (const line of header!.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim() as keyof DocFrontmatter;
    const rawValue = line.slice(idx + 1).trim();
    if (key === 'order') {
      meta.order = Number(rawValue);
    } else {
      (meta as Record<string, string>)[key] = rawValue.replace(/^['"]|['"]$/g, '');
    }
  }
  if (!meta.title || !meta.description || typeof meta.order !== 'number') {
    throw new Error('Doc frontmatter must include title, description, and order.');
  }
  return { meta: meta as DocFrontmatter, body: body! };
}

export async function listDocs(): Promise<DocPage[]> {
  const entries = await fs.readdir(DOCS_DIR);
  const pages = await Promise.all(
    entries
      .filter((name) => name.endsWith('.md'))
      .map(async (name) => {
        const slug = name.replace(/\.md$/, '');
        const raw = await fs.readFile(path.join(DOCS_DIR, name), 'utf8');
        const { meta, body } = parseFrontmatter(raw);
        return { slug, content: body, ...meta };
      }),
  );
  return pages.sort((a, b) => a.order - b.order);
}

export async function getDoc(slug: string): Promise<DocPage | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  try {
    const raw = await fs.readFile(path.join(DOCS_DIR, `${slug}.md`), 'utf8');
    const { meta, body } = parseFrontmatter(raw);
    return { slug, content: body, ...meta };
  } catch {
    return null;
  }
}
