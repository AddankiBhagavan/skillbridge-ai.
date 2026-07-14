// AI-generated career analysis result types

export interface CareerPath {
  title: string;
  matchScore: number;
  description: string;
  demandLevel: 'High' | 'Medium' | 'Growing' | 'Emerging';
  averageSalary: string;
}

export interface SkillGapItem {
  skill: string;
  currentLevel: number;
  requiredLevel: number;
  gap: number;
  priority: 'High' | 'Medium' | 'Low';
}

export interface RoadmapItem {
  title: string;
  skills: string[];
  milestones: string[];
}

export interface ProjectRecommendation {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface CertificationRecommendation {
  name: string;
  provider: string;
  relevance: string;
}

export interface CareerAnalysisResult {
  careerPaths: CareerPath[];
  skillGapAnalysis: SkillGapItem[];
  roadmap30Days: RoadmapItem[];
  roadmap90Days: RoadmapItem[];
  recommendedProjects: ProjectRecommendation[];
  recommendedCertifications: CertificationRecommendation[];
  careerAdvice: string;
}
