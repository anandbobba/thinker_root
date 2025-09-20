import React, { useState, useEffect } from 'react';

const AnnouncementBanner = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2025-10-04T09:00:00') - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const isEventStarted = !timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds;

    const Separator = () => (
        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
    );

    return (
        <div className="hidden md:block fixed top-20 left-0 right-0 z-40 bg-zinc-900/60 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(239,68,68,0.3)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-12 text-sm text-center">
                    <div className="animate-pulse-slow text-zinc-200 flex items-center gap-x-3 md:gap-x-4 flex-wrap justify-center">
                        <span className="font-semibold">🗓️ Oct 4-6, 2025</span>
                        
                        <div className="hidden sm:flex items-center"><Separator /></div>

                        <div className="font-mono tracking-wider flex items-baseline gap-x-2">
                             <span className="text-zinc-400">Time Left:</span>
                             {isEventStarted ? (
                                <span>Event has started!</span>
                             ) : (
                                <div className="flex gap-x-2 text-white font-semibold">
                                    <span>{String(timeLeft.days).padStart(2, '0')}d</span>
                                    <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                                    <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                                    <span className="w-[28px] text-left">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                                </div>
                            )}
                        </div>
                        
                        <div className="hidden lg:flex items-center"><Separator /></div>
                        
                        <span className="hidden lg:inline-block">6 Groundbreaking Themes & Expert Features</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBanner;