import React from 'react';
import Section from './Section';
import { SPONSORS } from '../constants';
import { motion } from 'framer-motion';

const Sponsors = () => {
  return (
    <div className="border-b border-zinc-800 relative overflow-hidden">
      <style>
        {`
          @keyframes sponsorScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          /* Force all text/fills inside sponsor logos to white */
          .sponsor-logo svg,
          .sponsor-logo svg * {
            fill: white !important;
            color: white !important;
          }
        `}
      </style>

      <Section id="sponsors" title="Our Sponsors">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-zinc-400 mb-14 text-lg max-w-3xl mx-auto"
          >
            This event is made possible by the generous support of our sponsors.
          </motion.p>

          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-24"
              style={{
                width: 'max-content',
                animation: 'sponsorScroll 60s linear infinite',
              }}
            >
              {SPONSORS.concat(SPONSORS).map((sponsor, index) => (
                <motion.div
                  key={`${sponsor.name}-${index}`}
                  whileHover={{ scale: 1.2 }}
                  className="sponsor-logo flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
                  aria-label={`Sponsor: ${sponsor.name}`}
                >
                  <div className="w-64 h-36 flex items-center justify-center">
                    {sponsor.logo}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-red-500/5 to-transparent blur-3xl" />
    </div>
  );
};

export default Sponsors;
