// src/data/blogPosts.ts

export interface BlogPost {
  id: number;
  title: string;
  subtitle: string; // Choti si line
  category: string; // e.g., "ANGELO BREWING"
  date: string; // For sorting YYYY-MM-DD
  thumbnail: string; // First image of the blog
  content: string; // Full content
}

export const BLOG_DATA: BlogPost[] = [
  {
    id: 1,
    title: "Cold, smooth & tasty.",
    subtitle: "The perfect summer brew recipe.",
    category: "ANGELO BREWING",
    date: "2026-02-01", // Purana
    thumbnail:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80", // Image from your example sample
    content: "Full blog post content goes here...",
  },
  {
    id: 2,
    title: "The Future of AI Design.",
    subtitle: "How generative models change UI/UX.",
    category: "TECH TRENDS",
    date: "2026-02-04", // Latest (Ye first aana chahiye)
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    content: "Full blog post content goes here...",
  },
  {
    id: 3,
    title: "Minimalist Workspaces.",
    subtitle: "Setup tour and productivity hacks.",
    category: "LIFESTYLE",
    date: "2026-01-20", // Sabse purana
    thumbnail:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    content: "Full blog post content goes here...",
  },
  {
    id: 4,
    title: "Mastering React Motion.",
    subtitle: "Complex animations made easy.",
    category: "DEV GUIDE",
    date: "2026-02-03",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    content: "Full blog post content goes here...",
  },
];
