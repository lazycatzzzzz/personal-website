export interface Post {
  slug: string;
  title: string;
  date: string;
  tag: string;
  tagColor: string;
  excerpt: string;
  readingTime: string;
  content: string;
}

export interface PostFrontmatter {
  title: string;
  date: string;
  tag: string;
  tagColor: string;
  excerpt: string;
  readingTime?: string;
}