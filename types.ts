// Fix: Add React import to resolve 'Cannot find namespace "React"' error.
import React from 'react';

export interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
