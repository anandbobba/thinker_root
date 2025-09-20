import React from 'react';
import Section from './Section';

const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;

const DetailCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 backdrop-blur-sm text-center transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">
        <div className="flex justify-center mb-4">
            <div className="bg-red-500/10 text-red-400 rounded-full p-3 w-14 h-14 flex items-center justify-center">
                <div className="w-8 h-8">{icon}</div>
            </div>
        </div>
        <h3 className="font-display text-xl font-bold text-zinc-100 mb-1">{title}</h3>
        <p className="text-zinc-300">{children}</p>
    </div>
);

const EventDetails = () => {
    return (
        <div className="border-b border-zinc-800">
            <Section id="details" title="Event Details">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    <DetailCard icon={<GlobeIcon />} title="Location">
                        Virtual / Global
                    </DetailCard>
                    <DetailCard icon={<CalendarIcon />} title="Event Dates">
                        October 4th - 6th, 2025
                    </DetailCard>
                    <DetailCard icon={<ClockIcon />} title="Submission Deadline">
                        September 28th, 2025
                    </DetailCard>
                </div>
            </Section>
        </div>
    );
};

export default EventDetails;