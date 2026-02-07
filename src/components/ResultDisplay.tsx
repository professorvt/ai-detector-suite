import type { AnalysisResult } from "@/types/api";
import { useNavigate } from "react-router-dom";

interface ResultDisplayProps {
  result: AnalysisResult | null;
}

const ResultDisplay = ({ result }: ResultDisplayProps) => {
  const navigate = useNavigate();

  if (!result) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-gray-500 opacity-60">
        <p>Results will appear here</p>
      </div>
    );
  }

  const isAI = result.total_score > 50;

  return (
    <>
      {/* Verdict Card */}
      <div
        className={`p-6 rounded-xl border ${isAI ? "bg-red-500/10 border-red-500/20" : "bg-green-500/10 border-green-500/20"}`}
      >
        <h3 className="text-sm uppercase tracking-wider font-bold mb-1 opacity-70">
          {isAI ? "AI Content Detected" : "Human Written"}
        </h3>
        <div className="text-5xl font-black mb-2">
          {result.total_score}%{" "}
          <span className="text-lg font-medium text-gray-500">AI Score</span>
        </div>
        <p className="text-sm opacity-80">
          {isAI
            ? "This text contains patterns typical of AI generation."
            : "This text appears to be written by a human."}
        </p>
      </div>

      {/* Progress Bars */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold opacity-60">
          Writing Pattern Breakdown
        </h4>
        <ProgressBar
          label="AI-Written"
          percentage={result.total_score}
          color="bg-red-500"
        />
        <ProgressBar
          label="Human-Written"
          percentage={100 - result.total_score}
          color="bg-green-500"
        />
      </div>

      {/* Action Button */}
      {result.total_score > 20 && (
        <button
          onClick={() =>
            navigate("/tool/humanizer", {
              state: {
                text: result.sentences.map((s) => s.text).join(" "),
                score: result.total_score,
                aiSentences: result.sentences, // Pass detail for highlighting
              },
            })
          }
          className="mt-auto w-full py-3 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-transform"
        >
          ✨ Humanize & Remove AI
        </button>
      )}
    </>
  );
};

// Helper Component (Local)
const ProgressBar = ({
  label,
  percentage,
  color,
}: {
  label: string;
  percentage: number;
  color: string;
}) => {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ResultDisplay;
