import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "@/layouts/MainLayout";
import ToolLayout from "@/layouts/ToolLayout";

// Standard Pages
import HomeContent from "@/components/HomeContent"; // Tumhara Home logic (Hero etc)
import About from "@/components/About";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import BlogPostView from "@/components/BlogPostView";
import ToolsIndex from "@/pages/ToolsIndex"; // New Grid Page
import Pricing from "@/pages/Pricing"; // New Page

// Tool Components
import DetectorTool from "@/components/DetectorTool"; // Logic extracted from old App.tsx
import Humanizer from "@/components/Humanizer";

const App = () => {
  return (
    <Routes>
      {/* === LAYOUT 1: STANDARD WEBSITE (Navbar Visible) === */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostView />} />
        <Route path="/tools" element={<ToolsIndex />} /> {/* Grid View */}
        <Route path="/pricing" element={<Pricing />} />
      </Route>

      {/* === LAYOUT 2: TOOL DASHBOARD (Sidebar + Hamburger) === */}
      <Route element={<ToolLayout />}>
        {/* Note: URL change ho gaya taaki layout trigger ho */}
        <Route
          path="/tool/detector"
          element={<DetectorTool darkMode={true} />}
        />
        <Route path="/tool/humanizer" element={<Humanizer />} />
      </Route>
    </Routes>
  );
};

export default App;
