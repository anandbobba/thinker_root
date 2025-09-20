import React from 'react';

const PoweredBy = () => {
    return (
        <div className="relative z-10 flex flex-col items-center gap-4 py-10">
            <p className="text-base text-zinc-400 tracking-wide">Powered by</p>
            <div className="flex items-center gap-12">
                <div 
                    aria-label="Lenient Tree"
                    className="p-2 rounded-2xl transform transition-all duration-300 hover:scale-105"
                >
                    <img 
                        src="/lt.svg"
                        alt="Lenient Tree Logo" 
                        className="h-60 w-auto" 
                    />
                </div>
                {/* <div
                    aria-label="ThinkerRoot Official Logo"
                    className="p-2 rounded-2xl transform transition-all duration-300 hover:scale-105"
                >
                    <img 
                        src="/thinkerroot.svg"
                        alt="ThinkerRoot Official Logo" 
                        className="h-16 w-auto" 
                    />
                </div> */}
            </div>
        </div>
    );
};

export default PoweredBy;