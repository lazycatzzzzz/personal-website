const videos = [
  { id: 1, title: "视频作品1", url: "https://v.douyin.com/d9PC6evpvGM/" },
  { id: 2, title: "视频作品2", url: "https://v.douyin.com/9vfwRs2YVNQ/" },
  { id: 3, title: "视频作品3", url: "https://v.douyin.com/bzvMp_ry1dY/" },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-xl font-semibold text-center text-gray-900 mb-6">视频作品集</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all overflow-hidden"
            >
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-gray-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">{video.title}</h3>
                <p className="text-xs text-blue-500 mt-2">点击在抖音观看 →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
