import Link from "next/link";

interface Post {
  slug: string;
  title: string;
}

interface PostNavigationProps {
  prevPost: Post | null;
  nextPost: Post | null;
}

export default function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  return (
    <div className="flex items-center justify-between gap-4 pt-6 mt-12 border-t border-gray-100">
      {prevPost ? (
        <Link
          href={`/blog/${prevPost.slug}`}
          className="flex-1 flex flex-col items-start gap-1 group"
        >
          <span className="text-xs text-gray-400 group-hover:text-primary transition-colors">上一篇</span>
          <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors line-clamp-1">
            {prevPost.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      <Link
        href="/blog"
        className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-200 transition-colors"
      >
        返回列表
      </Link>
      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="flex-1 flex flex-col items-end gap-1 group"
        >
          <span className="text-xs text-gray-400 group-hover:text-primary transition-colors">下一篇</span>
          <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors text-right line-clamp-1">
            {nextPost.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}