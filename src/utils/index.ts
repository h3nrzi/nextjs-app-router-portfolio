import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const blogsDir = path.join(process.cwd(), 'src', 'content', 'blogs');
const portfoliosDir = path.join(process.cwd(), 'src', 'content', 'portfolios');

export function delay(s: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
}

export function getBlogs() {
  const blogNames = fs.readdirSync(blogsDir);

  const blogs = blogNames.map((name) => {
    const filePath = path.join(blogsDir, name);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const content = matter(fileContent);
    content.data.slug = name.replace(/\.md$/, '');

    return { ...content };
  });

  return blogs;
}

export function getPortfolios() {
  const portfoliosNames = fs.readdirSync(portfoliosDir);

  const portfolios = portfoliosNames.map((name) => {
    const filePath = path.join(portfoliosDir, name);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const content = matter(fileContent);
    content.data.slug = name.replace(/\.md$/, '');

    return { ...content };
  });

  return portfolios;
}

//////////////////

async function markdownToHtml(content: string) {
  const result = await remark().use(remarkHtml).use(remarkGfm).process(content);

  return result.toString();
}

export async function getBlogSlug(slug: string) {
  const fileName = slug + '.md';
  const filePath = path.join(blogsDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const m = matter(fileContent);
  m.data.slug = slug;
  const htmlContent = await markdownToHtml(m.content);

  return { ...m, content: htmlContent };
}

export async function getPortfolioSlug(slug: string) {
  const fileName = slug + '.md';
  const filePath = path.join(portfoliosDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const m = matter(fileContent);
  m.data.slug = slug;
  const htmlContent = await markdownToHtml(m.content);

  return { ...m, content: htmlContent };
}
