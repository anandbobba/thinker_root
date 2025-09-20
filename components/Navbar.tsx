import React from 'react';

const VisionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const ThemesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </svg>
);
const FeaturesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 L14.09 8.09 L20.18 10 L14.09 11.91 L12 18 L9.91 11.91 L3.82 10 L9.91 8.09 L12 2 z" />
  </svg>
);

interface NavbarProps {
  onRegisterClick: () => void;
  onCampusClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onRegisterClick, onCampusClick }) => {
  const navLinks = [
    { href: '#vision', label: 'Vision' },
    { href: '#themes', label: 'Themes' },
    { href: '#special', label: 'Features' },
  ];

  const mobileNavLinks = [
    { href: '#vision', label: 'Vision', icon: <VisionIcon /> },
    { href: '#themes', label: 'Themes', icon: <ThemesIcon /> },
    { href: '#special', label: 'Features', icon: <FeaturesIcon /> },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between h-20 px-8 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800">
        <a href="#" className="font-display text-2xl font-bold text-white">
          Thinker<span className="text-red-500">Root</span>
        </a>
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-300 hover:text-red-400 transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-3">
          <button
            onClick={onCampusClick}
            className="bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Campus Ambassador
          </button>
          <button
            onClick={onRegisterClick}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Mobile Pill Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-5 pb-5 pt-2">
        <div className="bg-zinc-800/90 backdrop-blur-sm h-20 rounded-full flex justify-around items-center border border-zinc-700 shadow-2xl shadow-red-500/10">
          {mobileNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex flex-col items-center text-zinc-400 hover:text-red-400 transition-colors duration-300 space-y-1"
            >
              <div className="w-7 h-7">{link.icon}</div>
              <span className="text-xs font-medium">{link.label}</span>
            </a>
          ))}
          {/* Register Button */}
          <button
            onClick={onRegisterClick}
            className="flex flex-col items-center text-zinc-400 hover:text-red-400 transition-colors duration-300 space-y-1"
          >
            <div className="w-7 h-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
              </svg>
            </div>
            <span className="text-xs font-medium">Register</span>
          </button>
          {/* Campus Ambassador Button */}
          <button
            onClick={onCampusClick}
            className="flex flex-col items-center text-zinc-400 hover:text-red-400 transition-colors duration-300 space-y-1"
          >
            <div className="w-7 h-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <span className="text-xs font-medium text-center">Campus</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
