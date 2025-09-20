import React from 'react';
import type { Theme, SpecialFeature, VisionPoint, Sponsor } from './types';

const BrainCircuitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true" focusable="false">
        <path d="M12 2a10 10 0 0 0-3.38 19.46" /><path d="M12 2a10 10 0 0 1 10 10" /><path d="M12 2a10 10 0 0 1-10 10" /><path d="M12 2a10 10 0 0 0 3.38 19.46" /><path d="M12 2a10 10 0 0 1-3.38 19.46" /><path d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" /><path d="M12 14v1" /><path d="M12 9V8" /><path d="M14.5 10.5l.5.5" /><path d="M9.5 13.5l-.5.5" /><path d="M14.5 13.5l.5-.5" /><path d="M9.5 10.5l-.5-.5" /><path d="M17 16a5 5 0 0 0-10 0" /><path d="M17.5 12.5a5 5 0 0 0-11 0" /><path d="M22 12h-1" /><path d="M3 12H2" /></svg>
);

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true" focusable="false"><path d="M11 20A7 7 0 0 1 4 13V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3" /><path d="M18 18a3 3 0 0 0-3-3V7a1 1 0 0 0-1-1h-2" /></svg>
);

const AtomIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="1" /><path d="M20.2 20.2c2.04-2.03.02-5.91-2.42-8.35s-6.32-4.46-8.35-2.42" /><path d="M3.8 3.8c-2.04 2.03-.02 5.91 2.42 8.35s6.32 4.46 8.35 2.42" /><path d="M20.2 3.8c-2.03-2.04-5.91.02-8.35 2.42s-4.46 6.32-2.42 8.35" /><path d="M3.8 20.2c2.03 2.04 5.91-.02 8.35-2.42s4.46-6.32 2.42-8.35" /></svg>
);

const CubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true" focusable="false"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
);

const DnaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true" focusable="false"><path d="M12 22s-4-2.5-4-6 4-6 4-6 4 2.5 4 6-4 6-4 6Z" /><path d="M12 14s-4-2.5-4-6 4-6 4-6 4 2.5 4 6-4 6-4 6Z" /><path d="M10 11h4" /><path d="M10 17h4" /><path d="M10 5h4" /></svg>
);

const GamepadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true" focusable="false"><line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" /><path d="m14 16-2-2-2 2" /><path d="m18 12 2-2-2-2" /><path d="M14 8h.01" /><path d="M18 16h.01" /><rect width="20" height="12" x="2" y="6" rx="2" /></svg>
);

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true" focusable="false"><path d="m12 3-1.9 4.8-4.8 1.9 4.8 1.9L12 16l1.9-4.8 4.8-1.9-4.8-1.9z" /><path d="M3 12h4" /><path d="M17 12h4" /><path d="M12 3v4" /><path d="M12 17v4" /></svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true" focusable="false"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true" focusable="false"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
);

const PlaceholderLogo = ({ text }: { text: string }) => (
    <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-zinc-500">
        <rect width="180" height="80" rx="10" fill="currentColor" fillOpacity="0.1"/>
        <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            fontFamily="Poppins, sans-serif" 
            fontSize="16" 
            fontWeight="600" 
            fill="currentColor"
            stroke="#ef4444"
            strokeWidth="0.5"
        >
            {text}
        </text>
    </svg>
);


export const HACKATHON_THEMES: Theme[] = [
    { icon: <BrainCircuitIcon />, title: 'Robotics, Automation & Integrated AI', description: 'Innovate with intelligent systems that learn, adapt, and interact with the physical world.' },
    { icon: <LeafIcon />, title: 'Carbon Credits & Sustainability Tech', description: 'Build solutions for a greener planet, from carbon tracking to renewable energy systems.' },
    { icon: <AtomIcon />, title: 'Quantum Computing', description: 'Explore the next frontier of computation to solve currently intractable problems.' },
    { icon: <CubeIcon />, title: 'Web3 & Blockchain', description: 'Shape the future of the decentralized internet with novel applications and protocols.' },
    { icon: <DnaIcon />, title: 'Biotech & Genetics', description: 'Engineer biological solutions to challenges in health, agriculture, and beyond.' },
    { icon: <GamepadIcon />, title: 'Gaming & Interactive Tech', description: 'Create immersive and engaging experiences that push the boundaries of entertainment.' },
];

export const SPECIAL_FEATURES: SpecialFeature[] = [
    { icon: <SparklesIcon />, title: 'Unique Theme Curation', description: 'A blend of core science and frontier tech to challenge your creativity.' },
    { icon: <UsersIcon />, title: 'Expert Mentorship', description: 'Guidance from domain experts, seasoned entrepreneurs, and industry leaders.' },
    { icon: <TrophyIcon />, title: 'Real Rewards & Incubation', description: 'Win meaningful prizes, get incubation opportunities, and gain visibility for your project.' },
];

export const VISION_POINTS: VisionPoint[] = [
    { title: 'The Vision', description: 'To enable radical solutions by rooting innovation in first principles thinking.' },
    { title: 'The Mission', description: 'From idea to impact in 48 hours.' },
    { title: 'The Method', description: 'A potent blend of workshops, mentorship, and team-based innovation.' },
];

export const SPONSORS: Sponsor[] = [
    { name: 'InnovateCorp', logo: <PlaceholderLogo text="InnovateCorp" /> },
    { name: 'FutureTech', logo: <PlaceholderLogo text="FutureTech" /> },
    { name: 'QuantumLeap', logo: <PlaceholderLogo text="QuantumLeap" /> },
    { name: 'BioGen', logo: <PlaceholderLogo text="BioGen" /> },
    { name: 'Sustain Solutions', logo: <PlaceholderLogo text="Sustain" /> },
    { name: 'Nexus Gaming', logo: <PlaceholderLogo text="Nexus Gaming" /> },
];