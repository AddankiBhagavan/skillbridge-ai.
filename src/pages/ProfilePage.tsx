import { useState } from 'react';
import {
  User,
  GraduationCap,
  Sparkles,
  Target,
  ArrowRight,
  Plus,
  X,
  Check,
  Brain,
  AlertCircle,
} from 'lucide-react';
import type { PageName, StudentProfile } from '../types';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { defaultProfile } from '../data/mockData';
import { generateCareerAnalysis } from '../services/gemini';
import { setAnalysisResult } from '../store/analysisStore';

interface ProfilePageProps {
  navigate: (page: PageName) => void;
}

const educationLevels = [
  'High School (9–10)',
  'High School (11–12)',
  'Diploma / Polytechnic',
  'Undergraduate — 1st Year',
  'Undergraduate — 2nd Year',
  'Undergraduate — 3rd Year',
  'Undergraduate — Final Year',
  'Postgraduate',
  'Self-taught / Bootcamp',
];

const careerGoals = [
  'Full-Stack Developer',
  'Data Scientist',
  'UI/UX Designer',
  'Product Manager',
  'DevOps Engineer',
  'Mobile App Developer',
  'AI/ML Engineer',
  'Cybersecurity Analyst',
  'Cloud Architect',
  'Digital Marketer',
];

const skillSuggestions = [
  'Python', 'Java', 'C++', 'SQL', 'React', 'Node.js', 'Figma',
  'Machine Learning', 'Public Speaking', 'Leadership', 'Excel',
  'Data Analysis', 'Linux', 'Docker', 'Communication',
];

const interestSuggestions = [
  'Web Development', 'AI', 'Mobile Apps', 'Design', 'Cloud Computing',
  'Data Science', 'Cybersecurity', 'IoT', 'Robotics', 'EdTech',
  'FinTech', 'Open Source', 'Entrepreneurship', 'Sustainability',
];

export function ProfilePage({ navigate }: ProfilePageProps) {
  const [profile, setProfile] = useState<StudentProfile>(defaultProfile);
  const [skillInput, setSkillInput] = useState('');
  const [interestInput, setInterestInput] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !profile.currentSkills.includes(trimmed)) {
      setProfile({ ...profile, currentSkills: [...profile.currentSkills, trimmed] });
    }
    setSkillInput('');
  };

  const addInterest = (interest: string) => {
    const trimmed = interest.trim();
    if (trimmed && !profile.interests.includes(trimmed)) {
      setProfile({ ...profile, interests: [...profile.interests, trimmed] });
    }
    setInterestInput('');
  };

  const removeSkill = (skill: string) => {
    setProfile({ ...profile, currentSkills: profile.currentSkills.filter((s) => s !== skill) });
  };

  const removeInterest = (interest: string) => {
    setProfile({ ...profile, interests: profile.interests.filter((i) => i !== interest) });
  };

  // Call Gemini API with the student profile, then navigate to results
  const handleAnalyze = async () => {
    setAnalyzing(true);
    setError(null);
    try {
      const result = await generateCareerAnalysis({
        name: profile.fullName,
        education: profile.educationLevel,
        currentSkills: profile.currentSkills,
        interests: profile.interests,
        careerGoal: profile.careerGoal,
      });
      setAnalysisResult(result);
      navigate('analysis');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'AI analysis failed. Please try again.');
      setAnalyzing(false);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-primary-50/50 via-white to-white">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <Badge variant="primary" size="md">
              <User className="w-3.5 h-3.5" />
              Step 1 of 3
            </Badge>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-ink-900">
              Build Your <span className="gradient-text">Student Profile</span>
            </h1>
            <p className="mt-3 text-ink-500 text-lg">
              Tell us about yourself so our AI can craft your personalized career plan.
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={100}>
          <Card className="p-8 lg:p-10">
            <div className="space-y-8">
              {/* Full Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-ink-800 mb-2">
                  <User className="w-4 h-4 text-primary-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50/50 focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                />
              </div>

              {/* Education Level */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-ink-800 mb-2">
                  <GraduationCap className="w-4 h-4 text-primary-500" />
                  Education Level
                </label>
                <select
                  value={profile.educationLevel}
                  onChange={(e) => setProfile({ ...profile, educationLevel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50/50 focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                >
                  {educationLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Current Skills */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-ink-800 mb-2">
                  <Sparkles className="w-4 h-4 text-primary-500" />
                  Current Skills
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(skillInput))}
                    placeholder="Type a skill and press Enter"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-ink-200 bg-ink-50/50 focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  />
                  <button
                    onClick={() => addSkill(skillInput)}
                    className="px-4 py-2.5 rounded-xl bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                {/* Skill chips */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {profile.currentSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100 animate-scale-in"
                    >
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="hover:text-primary-900">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
                {/* Suggestions */}
                <div className="flex flex-wrap gap-1.5">
                  {skillSuggestions
                    .filter((s) => !profile.currentSkills.includes(s))
                    .slice(0, 6)
                    .map((skill) => (
                      <button
                        key={skill}
                        onClick={() => addSkill(skill)}
                        className="text-xs px-2.5 py-1 rounded-lg border border-ink-200 text-ink-500 hover:border-primary-300 hover:text-primary-600 transition-colors"
                      >
                        + {skill}
                      </button>
                    ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-ink-800 mb-2">
                  <Target className="w-4 h-4 text-primary-500" />
                  Interests
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={interestInput}
                    onChange={(e) => setInterestInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest(interestInput))}
                    placeholder="Type an interest and press Enter"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-ink-200 bg-ink-50/50 focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  />
                  <button
                    onClick={() => addInterest(interestInput)}
                    className="px-4 py-2.5 rounded-xl bg-secondary-50 text-secondary-700 hover:bg-secondary-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-50 text-secondary-700 text-sm font-medium border border-secondary-100 animate-scale-in"
                    >
                      {interest}
                      <button onClick={() => removeInterest(interest)} className="hover:text-secondary-900">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {interestSuggestions
                    .filter((s) => !profile.interests.includes(s))
                    .slice(0, 6)
                    .map((interest) => (
                      <button
                        key={interest}
                        onClick={() => addInterest(interest)}
                        className="text-xs px-2.5 py-1 rounded-lg border border-ink-200 text-ink-500 hover:border-secondary-300 hover:text-secondary-600 transition-colors"
                      >
                        + {interest}
                      </button>
                    ))}
                </div>
              </div>

              {/* Career Goal */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-ink-800 mb-2">
                  <Target className="w-4 h-4 text-primary-500" />
                  Career Goal
                </label>
                <select
                  value={profile.careerGoal}
                  onChange={(e) => setProfile({ ...profile, careerGoal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50/50 focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                >
                  {careerGoals.map((goal) => (
                    <option key={goal} value={goal}>{goal}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-10 pt-8 border-t border-ink-100">
              {analyzing ? (
                <div className="flex flex-col items-center gap-4 py-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-4 border-primary-100" />
                    <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-primary-500 border-t-transparent animate-spin" />
                    <Brain className="w-7 h-7 text-primary-500 absolute inset-0 m-auto animate-pulse" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-800 text-center">Analyzing your profile with AI...</p>
                    <p className="text-sm text-ink-500 text-center mt-1">
                      Matching skills, evaluating gaps, and building your roadmap
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  {error && (
                    <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 animate-fade-in">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-red-700">Something went wrong</p>
                        <p className="text-sm text-red-600 mt-0.5">{error}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-ink-500">
                      <Check className="w-4 h-4 text-primary-500" />
                      Your data is processed locally — nothing is stored.
                    </div>
                    <button
                      onClick={handleAnalyze}
                      className="btn-primary w-full sm:w-auto"
                    >
                      Analyze with AI
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </Reveal>

        {/* Steps indicator */}
        <Reveal delay={200}>
          <div className="mt-8 flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-primary-600 font-semibold">
              <span className="w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs">1</span>
              Profile
            </div>
            <div className="w-8 h-0.5 bg-ink-200" />
            <div className="flex items-center gap-2 text-ink-400">
              <span className="w-7 h-7 rounded-full bg-ink-200 text-ink-500 flex items-center justify-center text-xs">2</span>
              Analysis
            </div>
            <div className="w-8 h-0.5 bg-ink-200" />
            <div className="flex items-center gap-2 text-ink-400">
              <span className="w-7 h-7 rounded-full bg-ink-200 text-ink-500 flex items-center justify-center text-xs">3</span>
              Roadmap
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
