interface PostHeaderProps {
  title: string;
  date: string;
  tag: string;
  tagColor: string;
  readingTime: string;
}

export default function PostHeader({ title, date, tag, tagColor, readingTime }: PostHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColor}`}>{tag}</span>
        <span className="text-xs text-gray-400">{date}</span>
        <span className="text-xs text-gray-400">· {readingTime}阅读</span>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h1>
    </div>
  );
}