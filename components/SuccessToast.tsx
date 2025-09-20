import React, { useEffect } from 'react';

interface SuccessToastProps {
    isVisible: boolean;
    onDismiss: () => void;
    message?: string;
    duration?: number;
}

const SuccessToast = ({ isVisible, onDismiss, message = "Successfully registered", duration = 3000 }: SuccessToastProps) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onDismiss();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onDismiss]);

    return (
        <div 
            className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            aria-live="assertive"
        >
            {isVisible && (
                <div className="flex items-center gap-x-3 bg-zinc-800 border border-green-500/50 rounded-lg shadow-2xl shadow-green-500/10 px-6 py-3">
                    <svg className="w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <span className="text-white font-semibold">{message}</span>
                </div>
            )}
        </div>
    );
};

export default SuccessToast;
