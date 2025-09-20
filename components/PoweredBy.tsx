import React from 'react';

const PoweredBy = () => {
  const sponsors = [
    {
      name: 'Lenient Tree',
      logo: '/lt.svg',
      alt: 'Lenient Tree Logo',
    },
  ];

  return (
    <div className="relative z-10 flex flex-col items-center gap-8 py-10">
      <p className="text-base text-zinc-400 tracking-wide uppercase">
        Powered by
      </p>

      <div className="flex flex-wrap items-center justify-center gap-12">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            aria-label={sponsor.name}
            className="flex flex-col items-center gap-3 transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.alt}
              className="h-48 md:h-60 w-auto object-contain"
            />
            <p className="text-xl font-bold text-red-400 tracking-wide">
              {sponsor.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoweredBy;
