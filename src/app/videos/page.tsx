const videos = [
  { id: 1, title: "视频作品 1", url: "https://v.douyin.com/d9PC6evpvGM/" },
  { id: 2, title: "视频作品 2", url: "https://v.douyin.com/9vfwRs2YVNQ/" },
  { id: 3, title: "视频作品 3", url: "https://v.douyin.com/bzvMp_ry1dY/" },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="hero-gradient-subtle pt-24 pb-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">视频作品集</h1>
          <p className="text-sm text-gray-500">记录生活中的每个精彩片段</p>
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
                {/* Decorative circles */}
                <div className="absolute w-20 h-20 rounded-full bg-violet-200/40 -top-4 -right-4" />
                <div className="absolute w-16 h-16 rounded-full bg-purple-200/40 bottom-2 -left-4" />

                <div className="relative z-10 w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-violet-500 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-gray-500 mt-2">
                  点击在抖音观看 <span className="text-primary ml-1">→</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
