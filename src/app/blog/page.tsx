import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="hero-gradient-subtle pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">博客</h1>
          <p className="text-sm text-gray-500">产品思考 · 技术漫谈 · 生活随笔</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-6 mb-8 text-xs text-gray-400">
          <span>{posts.length} 篇文章</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>持续更新中</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            最近活跃
          </span>
        </div>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-sm text-gray-500">
            <span>更多文章持续更新中</span>
            <a href="/contact" className="text-primary font-medium hover:underline">
              想聊某个话题？戳我
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}