import { useState } from "react";
import type { AnalysisResult } from "@/types/api";

// ⚠️ Yahan apna Hugging Face URL daalna
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const useAIAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeText = async (text: string) => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BACKEND_URL}/detect_ai_detailed`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error("Server Error");

      const data = await response.json();
      setResult(data);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to analyze";
      setError(errorMessage);
      console.error(errorMessage);
      alert("Error: Backend connect nahi ho raha. Console check karo.");
    } finally {
      setLoading(false);
    }
  };

  const clearResult = () => setResult(null);

  return { analyzeText, result, loading, error, clearResult };
};
