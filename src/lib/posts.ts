import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFrontmatter } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const frontmatter = data as PostFrontmatter;

      return {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        tag: frontmatter.tag,
        tagColor: frontmatter.tagColor,
        excerpt: frontmatter.excerpt,
        readingTime: frontmatter.readingTime || `${Math.ceil(content.length / 500)} 分钟`,
        content,
      };
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const frontmatter = data as PostFrontmatter;

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      tag: frontmatter.tag,
      tagColor: frontmatter.tagColor,
      excerpt: frontmatter.excerpt,
      readingTime: frontmatter.readingTime || `${Math.ceil(content.length / 500)} 分钟`,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.filter((name) => name.endsWith(".md")).map((name) => name.replace(/\.md$/, ""));
}