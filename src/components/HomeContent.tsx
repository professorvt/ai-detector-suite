import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import AdBanner from "./AdBanner";
import SEO from "./SEO";

const HomeContent = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-black text-white">
      <SEO
        title="AI Suite - Free Detector & Humanizer"
        description="Verify content authenticity with our advanced dual-engine AI detection."
      />

      {/* HERO SECTION */}
      <div className="w-full max-w-5xl mx-auto text-center pt-24 pb-16 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-sm font-bold mb-6">
          <Zap size={14} className="fill-current" /> V2.0 Now Live
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Truth in the Age of
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Artificial Intelligence.
          </span>
        </h1>

        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
          The most advanced open-source detection engine. Detect GPT-4, Claude,
          and Gemini text with 99% accuracy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/tool/detector"
            className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-cyan-400 transition-all flex items-center gap-2"
          >
            Launch Detector <ArrowRight size={20} />
          </Link>
          <Link
            to="/pricing"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            View Pricing
          </Link>
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="w-full max-w-7xl px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Shield,
            title: "99% Accuracy",
            desc: "Dual-layer analysis using perplexity and burstiness metrics.",
          },
          {
            icon: Zap,
            title: "Real-time Scanning",
            desc: "Get results in milliseconds with our optimized edge engine.",
          },
          {
            icon: CheckCircle,
            title: "No Sign-up",
            desc: "Start analyzing immediately. No credit card required.",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 transition-all"
          >
            <feature.icon className="text-cyan-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 pb-20">
        <AdBanner position="Bottom" darkMode={true} />
      </div>
    </div>
  );
};

export default HomeContent;
