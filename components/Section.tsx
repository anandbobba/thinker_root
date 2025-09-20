import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
    return (
        <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-red-400">
                        {title}
                    </h2>
                     <div className="mt-4 w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;