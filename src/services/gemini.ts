import { GoogleGenerativeAI } from '@google/generative-ai';
import type { CareerAnalysisResult } from '../types/analysis';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

// System instruction telling Gemini to return structured JSON
const SYSTEM_INSTRUCTION = `You are an expert career counselor and industry mentor. You always respond with valid JSON only — no markdown, no code fences, no commentary outside the JSON.`;

// Schema description embedded in the prompt so Gemini knows the exact shape
const JSON_SCHEMA = `{
  "careerPaths": [
    { "title": string, "matchScore": number (0-100), "description": string, "demandLevel": "High"|"Medium"|"Growing"|"Emerging", "averageSalary": string }
  ],
  "skillGapAnalysis": [
    { "skill": string, "currentLevel": number (0-100), "requiredLevel": number (0-100), "gap": number, "priority": "High"|"Medium"|"Low" }
  ],
  "roadmap30Days": [
    { "title": string, "skills": [string], "milestones": [string] }
  ],
  "roadmap90Days": [
    { "title": string, "skills": [string], "milestones": [string] }
  ],
  "recommendedProjects": [
    { "title": string, "description": string, "difficulty": "Beginner"|"Intermediate"|"Advanced" }
  ],
  "recommendedCertifications": [
    { "name": string, "provider": string, "relevance": string }
  ],
  "careerAdvice": string
}`;

export interface StudentData {
  name: string;
  education: string;
  currentSkills: string[];
  interests: string[];
  careerGoal: string;
}

// Reusable function: calls Gemini 2.5 Flash and returns parsed career analysis
export async function generateCareerAnalysis(studentData: StudentData): Promise<CareerAnalysisResult> {
  if (!API_KEY) {
    throw new Error(
      'Gemini API key is not configured. Set VITE_GEMINI_API_KEY in your .env file.'
    );
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    systemInstruction: SYSTEM_INSTRUCTION,
  });

  const prompt = `You are an expert career counselor and industry mentor.
Analyze the following student profile:
Name: ${studentData.name}
Education: ${studentData.education}
Current Skills: ${studentData.currentSkills.join(', ')}
Interests: ${studentData.interests.join(', ')}
Career Goal: ${studentData.careerGoal}

Generate:
1. Top 3 suitable career paths (with matchScore 0-100, description, demandLevel, averageSalary)
2. Skill gap analysis (for each skill: currentLevel, requiredLevel, gap, priority)
3. 30-day learning roadmap (break into 3-4 weekly items with skills and milestones)
4. 90-day learning roadmap (break into 3-4 monthly items with skills and milestones)
5. Recommended projects (3-4 projects with title, description, difficulty)
6. Recommended certifications (3-4 with name, provider, relevance)
7. Personalized career advice (a detailed paragraph)

Return a structured JSON response matching this exact schema (no markdown, no code fences, raw JSON only):
${JSON_SCHEMA}`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Strip any accidental markdown fences
    const cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(cleaned) as CareerAnalysisResult;

    // Basic validation
    if (!parsed.careerPaths || !parsed.skillGapAnalysis || !parsed.careerAdvice) {
      throw new Error('Received incomplete data from AI.');
    }

    return parsed;
  } catch (err) {
    if (err instanceof Error && err.message.includes('API key')) {
      throw new Error('Invalid Gemini API key. Please check your VITE_GEMINI_API_KEY environment variable.');
    }
    if (err instanceof SyntaxError) {
      throw new Error('AI returned an invalid response. Please try again.');
    }
    throw new Error(
      err instanceof Error
        ? `AI analysis failed: ${err.message}`
        : 'AI analysis failed. Please try again.'
    );
  }
}
