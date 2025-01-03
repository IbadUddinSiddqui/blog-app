// lib/markdownToHtml.js
import { remark } from 'remark';
import html from 'remark-html';

export async function markdownToHtml(markdown :any) {
  const processedContent = await remark().use(html).process(markdown);
  return processedContent.toString();
}
