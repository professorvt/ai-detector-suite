// src/components/BlogPostView.tsx
import { useParams, Link } from "react-router-dom";
import { BLOG_DATA } from "../data/blogPosts";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const BlogPostView = () => {
  const { id } = useParams();
  // Find the post matching the ID from the URL
  const post = BLOG_DATA.find((p) => p.id === Number(id));

  if (!post) {
    return <div className="text-white text-center pt-20">Post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8 mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Blogs
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[50vh] relative mb-12">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Content Structure */}
      <article className="max-w-4xl mx-auto px-6">
        {/* Meta tags */}
        <div className="flex items-center gap-4 mb-6 text-sm font-mono text-cyan-400">
          <span className="flex items-center gap-1 bg-cyan-900/30 px-3 py-1 rounded-full">
            <Tag size={14} /> {post.category}
          </span>
          <span className="flex items-center gap-1 text-gray-400">
            <Calendar size={14} /> {post.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight">
          {post.title}
        </h1>
        <h2 className="text-2xl text-gray-300 mb-12 font-light">
          {post.subtitle}
        </h2>

        {/* Main Body Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* In a real app, this would likely be rich text or HTML */}
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {post.content}
            {/* Dummy long content for demo */}
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogPostView;
