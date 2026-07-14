import type { CareerAnalysisResult } from '../types/analysis';

// Simple module-level store to pass AI results between ProfilePage and AnalysisPage
// without adding a routing library or global state manager.
let analysisResult: CareerAnalysisResult | null = null;

export function setAnalysisResult(result: CareerAnalysisResult | null) {
  analysisResult = result;
}

export function getAnalysisResult(): CareerAnalysisResult | null {
  return analysisResult;
}
