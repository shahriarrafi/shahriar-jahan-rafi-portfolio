
import React from 'react';
import { 
  Briefcase, 
  Database, 
  GraduationCap, 
  TrendingUp, 
  Code, 
  Cpu, 
  BarChart, 
  Layers, 
  Award,
  BookOpen,
  Users,
  Globe,
  CheckCircle2,
  Rocket,
  Target
} from 'lucide-react';
import { Experience, Project, SkillCategory, Stat } from './types';

export const HERO_STATS: Stat[] = [
  { label: 'Years Teaching', value: '9+', icon: <BookOpen className="w-5 h-5 text-cyan-400" /> },
  { label: 'Learners Trained', value: '5,000+', icon: <Users className="w-5 h-5 text-cyan-400" /> },
  { label: 'User Growth', value: '36.87%', icon: <TrendingUp className="w-5 h-5 text-cyan-400" /> },
  { label: 'R&D Projects Led', value: '40+', icon: <Layers className="w-5 h-5 text-cyan-400" /> },
];

export const SNAPSHOT_CARDS = [
  {
    title: 'Product Leadership',
    items: ['Lifecycle', 'Roadmaps', 'UX', 'KPIs', 'Growth'],
    icon: <Briefcase className="w-8 h-8 text-cyan-400" />
  },
  {
    title: 'Data & AI',
    items: ['ML', 'Analytics', 'Predictive Modeling', 'BI'],
    icon: <Database className="w-8 h-8 text-cyan-400" />
  },
  {
    title: 'Teaching & Mentorship',
    items: ['Data Science', 'ML', 'Big Data', 'Exam Prep'],
    icon: <GraduationCap className="w-8 h-8 text-cyan-400" />
  },
  {
    title: 'Strategy & Execution',
    items: ['Agile', 'Research', 'Innovation', 'Scale'],
    icon: <Rocket className="w-8 h-8 text-cyan-400" />
  }
];

export const EXPERIENCES: Experience[] = [
  {
    title: 'Team Lead – Product R&D',
    company: 'Mojaru Education Technologies',
    period: '2024–Present',
    bullets: [
      { icon: <TrendingUp className="w-4 h-4" />, text: '36.87% user growth delivered' },
      { icon: <Target className="w-4 h-4" />, text: '37% ↑ user satisfaction scores' },
      { icon: <CheckCircle2 className="w-4 h-4" />, text: '29% ↑ course completion rate' }
    ]
  },
  {
    title: 'Lead Instructor (DS & ML)',
    company: 'Various Institutions',
    period: '2019–Present',
    bullets: [
      { icon: <Users className="w-4 h-4" />, text: 'Mentored over 5,000 students' },
      { icon: <Code className="w-4 h-4" />, text: 'Curated 10+ industry-standard ML curricula' }
    ]
  },
  {
    title: 'R&D Officer / Coordinator',
    company: 'Innovation Lab',
    period: '2021–2023',
    bullets: [
      { icon: <Layers className="w-4 h-4" />, text: 'Led 40+ R&D projects from ideation to MVP' },
      { icon: <Globe className="w-4 h-4" />, text: 'Collaborated with international research teams' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: 'Programming & Web', skills: ['Python', 'R', 'JavaScript', 'SQL', 'React', 'Node.js'] },
  { name: 'Data & ML', skills: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NLP', 'Computer Vision'] },
  { name: 'Product Management', skills: ['Agile', 'Scrum', 'Jira', 'Product Roadmap', 'A/B Testing'] },
  { name: 'Tools & Platforms', skills: ['AWS', 'GCP', 'Docker', 'Tableau', 'Power BI', 'Git'] },
];

export const PROJECTS: Project[] = [
  {
    title: 'Mojaru Website & LMS',
    outcome: 'Complete redevelopment focusing on high-load LMS and user scalability.',
    tags: ['Product', 'React', 'Node', 'Research'],
    icon: <Globe className="w-10 h-10 text-cyan-400" />
  },
  {
    title: 'Skin Disease Classification',
    outcome: 'Deep Learning model achieving 94% accuracy for diagnostic assistance.',
    tags: ['ML', 'DL', 'Healthcare'],
    icon: <Cpu className="w-10 h-10 text-cyan-400" />
  },
  {
    title: 'Stock Market Prediction',
    outcome: 'Hybrid LSTM-GRU model for multi-variate time-series financial forecasting.',
    tags: ['ML', 'Analytics', 'Finance'],
    icon: <TrendingUp className="w-10 h-10 text-cyan-400" />
  },
  {
    title: 'Sentiment & Customer Prediction',
    outcome: 'Predictive churn model integrated with real-time sentiment analysis.',
    tags: ['ML', 'NLP', 'Product'],
    icon: <BarChart className="w-10 h-10 text-cyan-400" />
  }
];

export const EDUCATION = [
  { title: 'MSc Applied Statistics & Data Science', school: 'University of Dhaka', info: 'Advanced Modeling & Inference' },
  { title: 'MSc Computer Science & Technology', school: 'OBOR, China', info: 'President Scholarship (Enrolled)' },
  { title: 'BSc Computer Science & Engineering', school: 'Leading University', info: 'ICT Carnival Champion' },
  { title: 'ACMP – IBA', school: 'University of Dhaka', info: 'Advanced Management Program' }
];
