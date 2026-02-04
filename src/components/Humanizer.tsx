// import { Sparkles, ArrowRight } from "lucide-react";

// const Humanizer = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-full w-full text-center p-8 bg-[#0a0a0a]">
//       <div className="max-w-lg w-full border border-dashed border-white/10 rounded-3xl bg-white/5 p-12 flex flex-col items-center">
//         <div className="bg-purple-500/10 p-4 rounded-full mb-6 relative">
//           <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
//           <Sparkles
//             size={48}
//             className="text-purple-500 relative z-10 animate-pulse"
//           />
//         </div>

//         <h2 className="text-3xl font-bold text-white mb-3">AI Humanizer</h2>
//         <p className="text-gray-400 mb-8 leading-relaxed">
//           Transform robotic AI text into natural, human-like writing. This tool
//           rewrites content to bypass AI detectors while keeping the original
//           meaning.
//         </p>

//         <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20">
//           Join Waitlist <ArrowRight size={18} />
//         </button>

//         <p className="mt-4 text-xs text-gray-600 font-mono">
//           Coming Update v2.0
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Humanizer;
// import { Sparkles, ArrowRight } from "lucide-react";
// import AdBanner from "./AdBanner"; // ✅ AdBanner Import kiya

// const Humanizer = () => {
//   return (
//     <div className="flex flex-col h-full w-full bg-[#0a0a0a] p-4 lg:p-6 overflow-y-auto">
//       {/* 1. TOP AD BANNER */}
//       <div className="flex-shrink-0 mb-6">
//         <AdBanner position="Top" darkMode={true} />
//       </div>

//       {/* 2. MIDDLE CONTENT (Centered) */}
//       <div className="flex-1 flex items-center justify-center w-full min-h-[400px]">
//         <div className="max-w-lg w-full border border-dashed border-white/10 rounded-3xl bg-white/5 p-8 lg:p-12 flex flex-col items-center">
//           <div className="bg-purple-500/10 p-4 rounded-full mb-6 relative">
//             <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
//             <Sparkles
//               size={48}
//               className="text-purple-500 relative z-10 animate-pulse"
//             />
//           </div>

//           <h2 className="text-3xl font-bold text-white mb-3">AI Humanizer</h2>
//           <p className="text-gray-400 mb-8 leading-relaxed text-center">
//             Transform robotic AI text into natural, human-like writing. This
//             tool rewrites content to bypass AI detectors while keeping the
//             original meaning.
//           </p>

//           <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20">
//             Join Waitlist <ArrowRight size={18} />
//           </button>

//           <p className="mt-4 text-xs text-gray-600 font-mono">
//             Coming Update v2.0
//           </p>
//         </div>
//       </div>

//       {/* 3. BOTTOM AD BANNER */}
//       <div className="flex-shrink-0 mt-6">
//         <AdBanner position="Bottom" darkMode={true} />
//       </div>
//     </div>
//   );
// };

// export default Humanizer;

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import AdBanner from "./AdBanner";
import AdModal from "./AdModal"; // ✅ Import Modal

const Humanizer = () => {
  // ✅ Ad State
  const [showAd, setShowAd] = useState(false);

  // ✅ Trigger Ad on Load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full w-full bg-[#0a0a0a] p-4 lg:p-6 overflow-y-auto">
      {/* ✅ Ad Modal Render */}
      <AdModal isOpen={showAd} onClose={() => setShowAd(false)} />

      {/* 1. TOP AD BANNER */}
      <div className="flex-shrink-0 mb-6">
        <AdBanner position="Top" darkMode={true} />
      </div>

      {/* 2. MIDDLE CONTENT */}
      <div className="flex-1 flex items-center justify-center w-full min-h-[400px]">
        <div className="max-w-lg w-full border border-dashed border-white/10 rounded-3xl bg-white/5 p-8 lg:p-12 flex flex-col items-center">
          <div className="bg-purple-500/10 p-4 rounded-full mb-6 relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
            <Sparkles
              size={48}
              className="text-purple-500 relative z-10 animate-pulse"
            />
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">AI Humanizer</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-center">
            Transform robotic AI text into natural, human-like writing. This
            tool rewrites content to bypass AI detectors while keeping the
            original meaning.
          </p>

          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20">
            Join Waitlist <ArrowRight size={18} />
          </button>

          <p className="mt-4 text-xs text-gray-600 font-mono">
            Coming Update v2.0
          </p>
        </div>
      </div>

      {/* 3. BOTTOM AD BANNER */}
      <div className="flex-shrink-0 mt-6">
        <AdBanner position="Bottom" darkMode={true} />
      </div>
    </div>
  );
};

export default Humanizer;
