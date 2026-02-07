import { Link } from "react-router-dom";
import { Scan, Sparkles, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const ToolsIndex = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <SEO
        title="All Free AI Tools"
        description="Explore our complete collection of free AI tools. From AI Detectors to Text Humanizers, enhance your content creation workflow with AI Suite today."
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black mb-12 text-center">
          AI Tools Suite
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Detector */}
          <Link
            to="/tool/detector"
            className="group relative h-80 rounded-[30px] overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/50 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent group-hover:from-cyan-500/20 transition-all"></div>
            <div className="absolute top-8 right-8 text-cyan-500 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <Scan size={100} />
            </div>
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-3xl font-bold mb-2">AI Detector</h2>
              <p className="text-gray-400 mb-6">
                Analyze text for GPT-4 & Claude patterns.
              </p>
              <span className="flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-4 transition-all">
                Launch Tool <ArrowRight />
              </span>
            </div>
          </Link>

          {/* Card 2: Humanizer */}
          <Link
            to="/tool/humanizer"
            className="group relative h-80 rounded-[30px] overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-purple-500/50 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent group-hover:from-purple-500/20 transition-all"></div>
            <div className="absolute top-8 right-8 text-purple-500 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <Sparkles size={100} />
            </div>
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-3xl font-bold mb-2">AI Humanizer</h2>
              <p className="text-gray-400 mb-6">
                Rewrite content to bypass detection.
              </p>
              <span className="flex items-center gap-2 text-purple-400 font-bold group-hover:gap-4 transition-all">
                Launch Tool <ArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolsIndex;
