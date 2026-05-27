const videos = [
  {
    id: 1,
    title: "支付产品经理的一天",
    description: "跟随我的镜头，看看一个支付 PM 真实的工作日是什么样的，需求评审、对接研发、搞定运营...",
    tag: "日常 Vlog",
    duration: "3:42",
    url: "https://v.douyin.com/d9PC6evpvGM/",
  },
  {
    id: 2,
    title: "用 AI 5 分钟搭完个人主页",
    description: "不会前端也能做！分享我用 AI 工具零基础搭建这个个人网站的全过程，踩坑实录版。",
    tag: "工具分享",
    duration: "5:18",
    url: "https://v.douyin.com/9vfwRs2YVNQ/",
  },
  {
    id: 3,
    title: "支付安全那些事儿",
    description: "你知道你的支付密码是怎么被保护的吗？用轻松的方式聊聊支付安全背后的产品逻辑。",
    tag: "知识分享",
    duration: "7:05",
    url: "https://v.douyin.com/bzvMp_ry1dY/",
  },
];

const tagColors: Record<string, string> = {
  "日常 Vlog": "bg-amber-100 text-amber-700",
  "工具分享": "bg-green-100 text-green-700",
  "知识分享": "bg-blue-100 text-blue-700",
};

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="hero-gradient-subtle pt-24 pb-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">视频作品集</h1>
          <p className="text-sm text-gray-500">记录生活中的每个精彩片段 · 在抖音查看完整版</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{ transitionProperty: "transform, box-shadow" }}
            >
              {/* Thumbnail area */}
              <div className="relative aspect-video bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 flex items-center justify-center overflow-hidden">
                <div className="absolute w-20 h-20 rounded-full bg-violet-200/40 -top-4 -right-4" />
                <div className="absolute w-16 h-16 rounded-full bg-purple-200/40 bottom-2 -left-4" />

                <div className="relative z-10 w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-violet-500 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-md font-mono">
                  {video.duration}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${tagColors[video.tag] ?? "bg-gray-100 text-gray-600"}`}>
                    {video.tag}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1.5">
                  {video.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {video.description}
                </p>
                <p className="text-xs text-violet-500 mt-2 font-medium">
                  在抖音观看 →
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          更多视频在抖音 @lazycatzzzzz · 欢迎关注
        </div>
      </div>
    </div>
  );
}
