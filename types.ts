import type React from 'react';

export interface Theme {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SpecialFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface VisionPoint {
    title: string;
    description: string;
}

export interface Sponsor {
    name: string;
    logo: React.ReactNode;
}