// import { useState } from "react";
// import { useAIAnalysis } from "@/hooks/useAIAnalysis";
// import ResultDisplay from "@/components/ResultDisplay";
// import AdBanner from "@/components/AdBanner";
// import SEO from "@/components/SEO";

// interface DetectorToolProps {
//   darkMode: boolean;
// }

// const DetectorTool = ({ darkMode }: DetectorToolProps) => {
//   const { analyzeText, result, loading, clearResult } = useAIAnalysis();
//   const [inputText, setInputText] = useState("");

//   const getScoreColor = (score: number) => {
//     if (score > 75) return "bg-red-500/20 border-b border-red-500 text-red-200";
//     if (score > 40)
//       return "bg-yellow-500/20 border-b border-yellow-500 text-yellow-200";
//     return "bg-green-500/20 text-green-200";
//   };

//   return (
//     <div className="flex flex-col max-w-7xl mx-auto w-full h-full p-4 lg:p-8">
//       <SEO
//         title="AI Detector Tool"
//         description="Professional AI Content Scanner."
//       />

//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-white tracking-tight">
//           AI Detector
//         </h1>
//         <p className="text-gray-400">
//           Paste text below to check for GPT-4 & Claude signatures.
//         </p>
//       </div>

//       <div className="flex-shrink-0 mb-4">
//         <AdBanner position="Top" darkMode={darkMode} />
//       </div>

//       <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[500px]">
//         {/* Input Area */}
//         <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-1 flex flex-col shadow-xl">
//           <div className="flex-1 bg-black/40 rounded-xl p-4 flex flex-col relative">
//             {!result ? (
//               <textarea
//                 className="w-full h-full bg-transparent outline-none text-lg text-gray-300 placeholder-gray-700 resize-none font-mono leading-relaxed p-2"
//                 placeholder="// Paste text to analyze..."
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)}
//               />
//             ) : (
//               <div className="flex-1 overflow-y-auto leading-8 text-lg font-mono p-2">
//                 {result.sentences.map((sent, idx) => (
//                   <span
//                     key={idx}
//                     className={`px-1 rounded ${getScoreColor(sent.score)}`}
//                   >
//                     {sent.text}{" "}
//                   </span>
//                 ))}
//               </div>
//             )}

//             <div className="mt-4 flex justify-between items-center border-t border-white/5 pt-4">
//               <span className="text-xs text-gray-500 font-mono">
//                 {inputText.split(/\s+/).filter((w) => w.length > 0).length}{" "}
//                 WORDS
//               </span>
//               <div className="flex gap-2">
//                 {result && (
//                   <button
//                     onClick={() => {
//                       clearResult();
//                       setInputText("");
//                     }}
//                     className="text-xs text-gray-400 hover:text-white px-3"
//                   >
//                     RESET
//                   </button>
//                 )}
//                 <button
//                   onClick={() => analyzeText(inputText)}
//                   disabled={loading}
//                   className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-lg font-bold text-sm transition-all disabled:opacity-50 shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)]"
//                 >
//                   {loading ? "SCANNING..." : "DETECT AI"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Result Area */}
//         <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-xl overflow-y-auto">
//           <ResultDisplay result={result} />
//         </div>
//       </div>

//       <div className="mt-6">
//         <AdBanner position="Bottom" darkMode={darkMode} />
//       </div>
//     </div>
//   );
// };

// export default DetectorTool;
import { useState, useEffect } from "react";
import { useAIAnalysis } from "@/hooks/useAIAnalysis";
import ResultDisplay from "@/components/ResultDisplay";
import AdBanner from "@/components/AdBanner";
import SEO from "@/components/SEO";
import AdModal from "@/components/AdModal"; // ✅ 1. Import kiya

interface DetectorToolProps {
  darkMode: boolean;
}

const DetectorTool = ({ darkMode }: DetectorToolProps) => {
  const { analyzeText, result, loading, clearResult } = useAIAnalysis();
  const [inputText, setInputText] = useState("");

  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getScoreColor = (score: number) => {
    if (score > 75) return "bg-red-500/20 border-b border-red-500 text-red-200";
    if (score > 40)
      return "bg-yellow-500/20 border-b border-yellow-500 text-yellow-200";
    return "bg-green-500/20 text-green-200";
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full h-full p-4 lg:p-8">
      <AdModal
        key={showAd ? "open" : "closed"}
        isOpen={showAd}
        onClose={() => setShowAd(false)}
      />

      <SEO
        title="AI Detector Tool"
        description="Professional AI Content Scanner."
      />

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          AI Detector
        </h1>
        <p className="text-gray-400">
          Paste text below to check for GPT-4 & Claude signatures.
        </p>
      </div>
      {/* 
      <div className="flex-shrink-0 mb-4"> */}
      <div className="w-full flex justify-center mb-6">
        <div className="w-full max-w-[728px] min-h-[90px] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center overflow-hidden">
          <AdBanner position="Top" darkMode={darkMode} />
        </div>
      </div>
      {/* <AdBanner position="Top" darkMode={darkMode} /> */}
      {/* </div> */}

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[500px]">
        {/* Input Area */}
        <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-1 flex flex-col shadow-xl">
          <div className="flex-1 bg-black/40 rounded-xl p-4 flex flex-col relative">
            {!result ? (
              <textarea
                className="w-full h-full bg-transparent outline-none text-lg text-gray-300 placeholder-gray-700 resize-none font-mono leading-relaxed p-2"
                placeholder="// Paste text to analyze..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            ) : (
              <div className="flex-1 overflow-y-auto leading-8 text-lg font-mono p-2">
                {result.sentences.map((sent, idx) => (
                  <span
                    key={idx}
                    className={`px-1 rounded ${getScoreColor(sent.score)}`}
                  >
                    {sent.text}{" "}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-4 flex justify-between items-center border-t border-white/5 pt-4">
              <span className="text-xs text-gray-500 font-mono">
                {inputText.split(/\s+/).filter((w) => w.length > 0).length}{" "}
                WORDS
              </span>
              <div className="flex gap-2">
                {result && (
                  <button
                    onClick={() => {
                      clearResult();
                      setInputText("");
                    }}
                    className="text-xs text-gray-400 hover:text-white px-3"
                  >
                    RESET
                  </button>
                )}
                <button
                  onClick={() => analyzeText(inputText)}
                  disabled={loading}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-lg font-bold text-sm transition-all disabled:opacity-50 shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)]"
                >
                  {loading ? "SCANNING..." : "DETECT AI"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Result Area */}
        <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-xl overflow-y-auto">
          <ResultDisplay result={result} />
        </div>
      </div>

      {/* <div className="mt-6">
        <AdBanner position="Bottom" darkMode={darkMode} />
      </div> */}
      <div className="w-full flex justify-center mt-6">
        <div className="w-full max-w-[728px] min-h-[90px] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center overflow-hidden">
          <AdBanner position="Bottom" darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default DetectorTool;
