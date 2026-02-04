export interface SentenceData {
  text: string;
  score: number;
}

export interface AnalysisResult {
  sentences: SentenceData[];
  total_score: number;
  engine_status?: string;
}
