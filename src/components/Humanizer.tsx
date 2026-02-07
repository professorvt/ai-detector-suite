import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sparkles, Copy, RefreshCw, Wand2, Loader2 } from "lucide-react";
import { diffWords, type Change } from "diff";
import AdBanner from "@/components/AdBanner";
import AdModal from "@/components/AdModal";
import SEO from "@/components/SEO";

// Define score ranges for highlighting (mirroring Detector)

const Humanizer = () => {
  const location = useLocation();
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAd, setShowAd] = useState(false);

  const [diffParts, setDiffParts] = useState<Change[] | null>(null);

  // Load state from Navigation (Refine Button)
  useEffect(() => {
    if (location.state?.text) {
      setInputText(location.state.text);
    }
    // Show Initial Ad
    const timer = setTimeout(() => setShowAd(true), 1000);
    return () => clearTimeout(timer);
  }, [location.state]);

  const handleHumanize = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setLoading(true);
    setShowAd(true); // Show Modal with "Processing" state

    // 1. Wait for Ad Timer (handled inside AdModal visual, but we force delay here api-wise)
    // We start API immediately but won't show result until Ad allows (or we just let them run parallel)
    // The user wants: "jabtak anaylysis chak rahi to aur monetag se... min at least dekhna tohai"
    // AdModal enforces 30s. We will wait for API result in background.

    try {
      const response = await fetch("/api/humanize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: inputText,
          tone: "casual", // Default tone
        }),
      });

      const data = await response.json();

      // Handle Llama response structure
      // Usually HF Inference returns: [{ generated_text: "..." }] or similar
      // Our backend wrapper returns { result: ... }

      let humanized = "";
      if (data.result && data.result.generated_text) {
        // Clean up prompt artifacts if any (backend usually handles, but safety first)
        humanized = data.result.generated_text;
      } else if (typeof data.result === "string") {
        humanized = data.result;
      } else {
        // Fallback or specific parsing based on actual backend return
        // Based on app.py: return jsonify({"result": response}) where response is from client.text_generation
        // client.text_generation returns a string directly if stream=False ??
        // Let's assume it returns string based on HF Python Client docs for text_generation (not chat)
        humanized = (data.result as string) || "";
      }

      // 2. Generate Diff Animation Data
      const diff = diffWords(inputText, humanized);
      setDiffParts(diff);
      setOutputText(humanized);
    } catch (error) {
      console.error("Humanization failed:", error);
      setOutputText("Error processing request. Please try again.");
    } finally {
      // We do NOT set loading false here immediately.
      // The AdModal will handle the "Reward Granted" -> Close.
      // We sync closing: When Modal closes, we show result.
    }
  };

  // Callback when Ad Modal is closed (User finished waiting)
  const onAdComplete = () => {
    setShowAd(false);
    setShowAd(false);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#0a0a0a] p-4 lg:p-8 overflow-y-auto">
      <SEO
        title="AI Text Humanizer - Bypass AI Detection"
        description="Convert AI-generated text into natural human writing. Bypass AI detectors like Turnitin and GPTZero for free. Best AI to Human text converter tool."
      />

      <AdModal isOpen={showAd} onClose={onAdComplete} />

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
          <Wand2 className="text-purple-500" /> AI Humanizer
        </h1>
        <p className="text-gray-400">
          Rewriting content to bypass AI detectors naturally.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[500px]">
        {/* INPUT */}
        <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-1 flex flex-col shadow-xl">
          <div className="flex-1 bg-black/40 rounded-xl p-4 flex flex-col relative">
            <textarea
              className="w-full h-full bg-transparent outline-none text-lg text-gray-300 placeholder-gray-700 resize-none font-mono leading-relaxed p-2"
              placeholder="// Paste AI text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <span className="text-xs text-gray-500 font-mono">
              {inputText.split(/\s+/).filter((w) => w.length).length} WORDS
            </span>
            <button
              onClick={handleHumanize}
              disabled={loading || !inputText}
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all disabled:opacity-50 shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)] flex items-center gap-2"
            >
              {loading ? (
                <RefreshCw className="animate-spin" size={16} />
              ) : (
                <Sparkles size={16} />
              )}
              {loading ? "HUMANIZING..." : "HUMANIZE"}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#121212] p-6 shadow-xl relative overflow-y-auto">
          {loading && !diffParts && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10 backdrop-blur-sm">
              <div className="text-center">
                <Loader2
                  className="animate-spin text-purple-500 mx-auto mb-2"
                  size={32}
                />
                <p className="text-gray-400 animate-pulse">
                  Generating rewritten content...
                </p>
              </div>
            </div>
          )}

          {!outputText && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-gray-600 opacity-60">
              <Wand2 size={48} className="mb-4 opacity-50" />
              <p>Humanized result will appear here</p>
            </div>
          )}

          {/* DIFF ANIMATION VIEW */}
          {(outputText || diffParts) && !loading && (
            <div className="font-mono text-lg leading-relaxed text-gray-300 whitespace-pre-wrap">
              {diffParts
                ? diffParts.map((part, index) => {
                    if (part.removed) {
                      return (
                        <span
                          key={index}
                          className="bg-red-900/30 text-red-500/50 line-through decoration-red-500/50 mx-1 select-none"
                        >
                          {part.value}
                        </span>
                      );
                    }
                    if (part.added) {
                      return (
                        <span
                          key={index}
                          className="bg-green-500/10 text-green-400 animate-in fade-in duration-1000"
                        >
                          {part.value}
                        </span>
                      );
                    }
                    return <span key={index}>{part.value}</span>;
                  })
                : outputText}
            </div>
          )}

          {outputText && !loading && (
            <div className="absolute top-4 right-4">
              <button
                onClick={() => navigator.clipboard.writeText(outputText)}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                title="Copy Text"
              >
                <Copy size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center mt-6">
        <div className="w-full max-w-[728px] min-h-[90px] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center overflow-hidden">
          <AdBanner position="Bottom" darkMode={true} />
        </div>
      </div>
    </div>
  );
};

export default Humanizer;
