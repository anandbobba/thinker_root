import React from 'react';

interface SpecialFeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const SpecialFeature = ({ icon, title, description }: SpecialFeatureProps) => {
    return (
        <div className="flex items-start space-x-6 bg-zinc-800/30 p-6 rounded-lg border border-zinc-700 transition-all duration-300 hover:border-red-500/30 hover:bg-zinc-800/50">
            <div className="flex-shrink-0 bg-red-500/10 text-red-400 rounded-lg p-3">
                <div className="w-8 h-8">{icon}</div>
            </div>
            <div>
                <h3 className="font-display text-2xl font-bold text-zinc-100">{title}</h3>
                <p className="mt-1 text-zinc-300">{description}</p>
            </div>
        </div>
    );
};

export default SpecialFeature;