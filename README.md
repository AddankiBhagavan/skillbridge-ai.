# SkillBridge AI

AI-powered career guidance platform that analyzes a student's interests, current skills, and career goals to deliver personalized career recommendations, skill gap analysis, and learning roadmaps. Built for students from rural and underserved communities.

## Problem
Students, especially from rural and underserved communities, lack access to personalized career guidance. They don't know which skills to learn, which career path suits them, or how to prepare for internships and jobs.

## Solution
SkillBridge AI uses Google Gemini 2.5 Flash to analyze student profiles and generate:
1. Top 3 suitable career paths with match scores
2. Skill gap analysis with priority levels
3. 30-day and 90-day learning roadmaps
4. Recommended projects with difficulty levels
5. Recommended certifications
6. Personalized career advice

## Tech Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Google Gemini AI (`@google/generative-ai`)
- Lucide React (icons)

## Gemini AI Integration

This project uses **Google Gemini 2.5 Flash** to generate real, personalized career analysis based on each student's profile.

### Setup Instructions

1. Get a Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey)

2. Add the API key to your `.env` file:
   ```
   VITE_GEMINI_API_KEY=your_api_key
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

### Environment Variable
```
VITE_GEMINI_API_KEY=your_api_key
```

The API key is read via `import.meta.env.VITE_GEMINI_API_KEY` in `src/services/gemini.ts`.

### How It Works

1. Student fills out the **Profile Page** (name, education, skills, interests, career goal)
2. Clicking **"Analyze with AI"** calls `generateCareerAnalysis()` in `src/services/gemini.ts`
3. Gemini 2.5 Flash returns structured JSON with career paths, skill gaps, roadmaps, projects, certifications, and advice
4. Results are displayed on the **Analysis Page** with 7 dedicated sections

### Error Handling
- Missing API key: shows a clear message asking to configure `VITE_GEMINI_API_KEY`
- Invalid API key: shows an "invalid API key" error
- API failures: shows a user-friendly error message with a retry option
- If no AI analysis has been run yet, the Analysis page shows demo fallback data

## Features
- AI-powered career recommendations (top 3 paths with match scores)
- Skill gap analysis with visual progress bars
- 30-day and 90-day learning roadmaps
- Recommended projects and certifications
- Personalized AI career advice
- 6-month roadmap timeline with milestones
- Progress dashboard with streaks, achievements, and weekly activity charts
- Fully responsive, modern SaaS-style UI
- Smooth animations and micro-interactions

## Pages
1. **Landing Page** — Hero, problem statement, how it works, features, impact, CTA
2. **Student Profile Page** — Form with skills/interests chips, AI analysis trigger
3. **AI Career Analysis Page** — 7 sections of AI-generated results
4. **Learning Roadmap Page** — 6-month timeline with monthly milestones
5. **Progress Dashboard** — Stats, charts, achievements, upcoming tasks
6. **About Project Page** — Problem, solution, social impact, future scope
