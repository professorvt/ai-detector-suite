// src/components/Blog.tsx
import { BLOG_DATA } from "../data/blogPosts";
import BlogCard from "./BlogCard";
import SEO from "@/components/SEO";

const Blog = () => {
  // 1. Sort data: Latest date first
  const sortedPosts = [...BLOG_DATA].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white p-6 lg:p-12 overflow-y-auto">
      <SEO
        title="AI & Tech Blog"
        description="Stay updated with the latest trends in AI, content writing, and SEO. Read expert articles on how to bypass AI detection and improve content quality."
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-600">
            Our Stories.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-mono">
            Latest updates, deep dives, and creative explorations.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {sortedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
