import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import PostHeader from "@/components/blog/PostHeader";
import PostNavigation from "@/components/blog/PostNavigation";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "文章不存在" };
  }

  return {
    title: `${post.title} - lazycatzzzzz`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="hero-gradient-subtle pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">博客</h1>
          <p className="text-sm text-gray-500">产品思考 · 技术漫谈 · 生活随笔</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <PostHeader
            title={post.title}
            date={post.date}
            tag={post.tag}
            tagColor={post.tagColor}
            readingTime={post.readingTime}
          />
          <div className="prose prose-slate max-w-none prose-sm md:prose-base">
            <MarkdownRenderer content={post.content} />
          </div>
          <PostNavigation prevPost={prevPost} nextPost={nextPost} />
        </article>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-sm text-gray-500">
            <span>喜欢这篇文章？</span>
            <a href="/contact" className="text-primary font-medium hover:underline">
              来聊聊吧
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}