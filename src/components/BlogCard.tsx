import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion"; // 1. Variants type import kiya
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  // 2. Har object ke aage ': Variants' laga diya taaki TypeScript khush rahe

  // Thumbnail Animation
  const thumbnailVariants: Variants = {
    hidden: { x: "100%" },
    visible: {
      x: "0%",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Title Animation
  const titleVariants: Variants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
    },
  };

  // Subtitle Animation
  const subtitleVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <Link to={`/blog/${post.id}`} className="block h-full">
      <motion.div
        className="relative w-full h-[450px] rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl shadow-black/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* --- RIGHT SIDE: THUMBNAIL --- */}
        <motion.div
          className="absolute inset-0 z-0"
          variants={thumbnailVariants}
        >
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>

        {/* --- LEFT SIDE: CONTENT --- */}
        <div className="relative z-10 h-full w-[65%] bg-black text-white p-8 flex flex-col justify-center rounded-r-[100%_50%] shadow-[10px_0_20px_-5px_rgba(0,0,0,0.8)]">
          <div className="space-y-2 relative">
            {/* Category */}
            <motion.p
              variants={titleVariants}
              className="text-sm font-mono tracking-widest uppercase text-gray-400 mb-2"
            >
              {post.category}
            </motion.p>

            {/* Main Title */}
            <motion.h2
              variants={titleVariants}
              className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-8"
            >
              {post.title.split(",").map((part, i) => (
                <span key={i} className="block">
                  {part}
                  {i < post.title.split(",").length - 1 ? "," : ""}
                </span>
              ))}
            </motion.h2>

            {/* Subtitle */}
            <motion.div variants={subtitleVariants}>
              <span className="inline-block px-6 py-3 rounded-full border-2 border-white/30 text-lg backdrop-blur-md bg-white/5 group-hover:bg-white/10 transition-colors">
                {post.subtitle}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
