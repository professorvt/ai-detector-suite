import { Shield, Zap, Globe, Heart, Building2, Fingerprint, Feather } from "lucide-react";
import SEO from "./SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <SEO
        title="About Us - AI Suite"
        description="Stop Guessing. Start Working. Practical AI tools for professionals."
      />

      <div className="max-w-6xl mx-auto">
        {/* HERO HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 text-cyan-400 text-xs font-bold mb-4 border border-cyan-500/20">
            <Globe size={12} /> STOP GUESSING. START WORKING.
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Defending <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Digital Authenticity.
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            The AI industry is noisy. If you are looking for magic fairy dust,
            you are on the wrong page. But if you are here because you need to{" "}
            <span className="text-white font-medium">verify content quality</span>,{" "}
            <span className="text-white font-medium">protect SEO rankings</span>, and{" "}
            <span className="text-white font-medium">fix robotic writing</span>—welcome to AI Suite.
            We built this because the stakes are higher now.
          </p>
        </div>

        {/* FEATURES / TRUST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Card 1: Trust & Legitimacy */}
          <div className="p-8 rounded-[30px] bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 transition-all group">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Building2 className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Legitimacy & Trust
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              The SaaS world is full of ghosts. We are different. AI Suite is the
              flagship product of <span className="text-white font-semibold">CLOUD UP CODEX LLP</span>.
              <br /><br />
              We are a registered Limited Liability Partnership under the{" "}
              <span className="text-cyan-400">Companies Act, 2013</span>, compliant with the MCA, Govt of India.
              You are partnering with a legal entity, not a hobbyist.
            </p>
          </div>

          {/* Card 2: Detection */}
          <div className="p-8 rounded-[30px] bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 transition-all group">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Fingerprint className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Precision Detection
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              <span className="block mb-2 text-white font-medium">The Problem:</span> 
              Raw AI text leaves "fingerprints" that destroy brand authority.
              <br /><br />
              <span className="block mb-2 text-white font-medium">Our Solution:</span>
              We don't just guess. Our Engine analyzes <span className="text-cyan-400">Perplexity</span> (unpredictability) and <span className="text-cyan-400">Burstiness</span> (sentence variation). 
              Stop publishing blindly. Know exactly what your content looks like.
            </p>
          </div>

          {/* Card 3: Humanization */}
          <div className="p-8 rounded-[30px] bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 transition-all group">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Feather className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Text Humanization
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              <span className="block mb-2 text-white font-medium">The Problem:</span> 
              Most "humanizers" break grammar to trick detectors. That is a terrible strategy.
              <br /><br />
              <span className="block mb-2 text-white font-medium">Our Solution:</span>
              We focus on <span className="text-cyan-400">Readability and Flow</span>. We re-engineer sentence structure to inject human nuance. Content bypasses detection not because it is "broken," but because it is better.
            </p>
          </div>
        </div>

        {/* PROMISE / STORY SECTION */}
        <div className="relative rounded-[40px] overflow-hidden bg-[#0a0a0a] border border-white/10 p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Heart className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold mb-6">Our Promise: No Data Games</h2>
            <p className="text-gray-300 text-lg leading-loose mb-8">
              We know the industry dirty secret: many tools steal your data to train their models. <span className="text-white font-bold">We don't.</span>
              <br />
              Your data is yours. We process it, give you the result, and wipe the session. We don't sell inputs to ad networks. Our servers are isolated and encrypted.
            </p>

            <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/5 text-left md:text-center">
              <h4 className="text-cyan-400 font-bold mb-2 uppercase text-xs tracking-wider">Who Needs AI Suite?</h4>
              <p className="text-gray-400 text-sm">
                Content Marketers scaling production • SEO Specialists protecting rankings • Developers & Editors verifying code and text.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
               <div className="text-center">
                  <p className="text-white font-bold text-xl mb-1">Ready to upgrade your workflow?</p>
                  <p className="text-gray-500 text-sm">Stop relying on luck. Start using data.</p>
               </div>
            </div>

            <div className="flex justify-center gap-4 mt-12 border-t border-white/10 pt-8">
              <span className="text-xs font-mono text-gray-500">
                CLOUD UP CODEX LLP
              </span>
              <span className="text-xs font-mono text-gray-500">•</span>
              <span className="text-xs font-mono text-gray-500">
                EST. 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
