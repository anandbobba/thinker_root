import React, { useState } from "react";
import { motion } from "framer-motion";

interface ThemeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ThemeCard = ({ icon, title, description }: ThemeCardProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
  };

  return (
    <motion.div
      className="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 backdrop-blur-sm transition-all duration-300 cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
      onMouseMove={handleMouseMove}
    >
      {/* Glow following cursor */}
      <div
        className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none transition duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(239,68,68,0.25), transparent 80%)`,
        }}
      />

      {/* ✨ Minimal sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-red-400/40"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-10, -40],
              x: [0, Math.random() * 40 - 20], // small side drift
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-red-400 mb-4 h-8 w-8">{icon}</div>
        <h3 className="font-display text-xl font-bold text-zinc-100 mb-2">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ThemeCard;
