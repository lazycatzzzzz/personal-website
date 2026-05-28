import Link from "next/link";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary to-accent shadow-sm" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${post.tagColor}`}>
              {post.tag}
            </span>
            <span className="text-xs text-gray-400">{post.date}</span>
            <span className="text-xs text-gray-400">· {post.readingTime}阅读</span>
          </div>
          <h2 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-snug">
            {post.title}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-200">
            <span>阅读全文</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}