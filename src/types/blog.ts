export interface BlogAuthor {
  name: string;
  role: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: BlogAuthor;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
}

