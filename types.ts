
export type ContentBlock = 
  | { type: 'p'; value: string }
  | { type: 'h2'; value: string }
  | { type: 'h3'; value: string }
  | { type: 'ul'; items: string[] }
  | { type: 'article-list'; articles: { title: string; date: string; category: string }[] }
  | { type: 'testimonial-slider'; testimonials: { name: string; text: string }[] };

export interface DetailPageContent {
  title: string;
  subtitle?: string;
  blocks: ContentBlock[];
}

export interface NavItem {
  label: string;
  href: string;
}