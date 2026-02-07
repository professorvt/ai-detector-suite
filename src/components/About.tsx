import { Shield, Users, Zap, Globe, Heart } from "lucide-react";
import SEO from "./SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <SEO
        title="About Us - AI Suite"
        description="Our mission to bring transparency to AI content."
      />

      <div className="max-w-6xl mx-auto">
        {/* HERO HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 text-cyan-400 text-xs font-bold mb-4 border border-cyan-500/20">
            <Globe size={12} /> OUR MISSION
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Defending <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Digital Authenticity.
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            We are building the transparency layer for the internet. In a world
            flooded with AI content, we help you distinguish between human
            creativity and machine generation.
          </p>
        </div>

        {/* STATS / FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Shield,
              title: "99.2% Accuracy",
              desc: "Dual-engine architecture analyzing perplexity, burstiness, and semantic patterns.",
            },
            {
              icon: Users,
              title: "Privacy First",
              desc: "We do not store your text. Analysis happens in real-time and is discarded immediately.",
            },
            {
              icon: Zap,
              title: "Open Access",
              desc: "We believe truth should be free. Our core detection tools will always be accessible to everyone.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[30px] bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* STORY SECTION */}
        <div className="relative rounded-[40px] overflow-hidden bg-[#0a0a0a] border border-white/10 p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Heart className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Why We Started</h2>
            <p className="text-gray-300 text-lg leading-loose mb-8">
              AI Suite began as a small project to help teachers identify AI
              essays. Today, it serves millions of writers, students, and
              professionals worldwide. We are not anti-AI; we are
              pro-transparency. We believe AI is a tool, not a replacement for
              human thought.
            </p>
            <div className="flex justify-center gap-4">
              <span className="text-sm font-mono text-gray-500">EST. 2024</span>
              <span className="text-sm font-mono text-gray-500">•</span>
              <span className="text-sm font-mono text-gray-500">
                OPEN SOURCE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
