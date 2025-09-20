import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header = ({ onRegisterClick }: HeaderProps) => {
  const [registrationCount, setRegistrationCount] = useState<number>(0);

  // Fetch live registration count
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/api/registration-count'); // teammate API
        const data = await res.json();
        setRegistrationCount(data.count || 0);
      } catch (err) {
        console.error('Failed to fetch registration count', err);
      }
    };
    fetchCount();
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  // Prize pools
  const firstPrize = registrationCount * 15;
  const secondPrize = registrationCount * 10;
  const thirdPrize = registrationCount * 5;
  const mentorFund = registrationCount * 20;

  return (
    <header className="relative flex items-center justify-center text-center px-4 overflow-hidden min-h-screen pt-20 md:pt-32">
      {/* Background Grid + Radial Glow */}
      <div className="absolute inset-0 w-full h-full bg-zinc-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.25),_transparent_70%)]"></div>

      <div className="relative z-10 space-y-10">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-gradient-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
          ThinkerRoot Ideathon 2025
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-300">
          A one of a kind hackathon designed to nurture core innovation. Empowering developers,
          thinkers, and creators to build impactful solutions.
        </p>

        {/* Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={onRegisterClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/20"
          >
            Register Now (₹50)
          </button>
        </div>

        {/* Prize Pool Section */}
        <div className="mt-10 max-w-4xl mx-auto">
          <motion.h2
            className="text-white text-xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Live Prize Pool (based on {registrationCount} registrations)
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <PrizeCard
              label="1st Prize"
              amount={firstPrize}
              colorFrom="from-red-500"
              colorTo="to-orange-400"
            />
            <PrizeCard
              label="2nd Prize"
              amount={secondPrize}
              colorFrom="from-orange-400"
              colorTo="to-yellow-300"
            />
            <PrizeCard
              label="3rd Prize"
              amount={thirdPrize}
              colorFrom="from-yellow-300"
              colorTo="to-green-400"
            />
            <PrizeCard
              label="Mentorship Fund"
              amount={mentorFund}
              colorFrom="from-purple-500"
              colorTo="to-pink-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

/** 
 * A dynamic glowing card for prize pools
 */
const PrizeCard = ({
  label,
  amount,
  colorFrom,
  colorTo,
}: {
  label: string;
  amount: number;
  colorFrom: string;
  colorTo: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className={`relative rounded-xl p-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700`}
    >
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colorFrom} ${colorTo} opacity-10 blur-xl`}
      />
      <h3 className="text-sm text-zinc-400 font-medium mb-1">{label}</h3>
      <AnimatePresence mode="wait">
        <motion.p
          key={amount}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${colorFrom} ${colorTo} bg-clip-text text-transparent`}
        >
          ₹{amount}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};
