
// Add missing React import to resolve React namespace errors
import React from 'react';

export interface ImpactBullet {
  icon: React.ReactNode;
  text: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: ImpactBullet[];
}

export interface Project {
  title: string;
  outcome: string;
  tags: string[];
  icon: React.ReactNode;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}