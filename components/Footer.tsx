import React from 'react';

const Footer = () => {

    const socialLinks = [
        { 
            name: 'Twitter',
            href: '#',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        },
        { 
            name: 'LinkedIn',
            href: '#',
            icon: (
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 114.75 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.8 0-1.22.52-1.42 1.02-.08.18-.1.42-.1.66V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.28.93 3.28 4.63z" />
                </svg>
            )
        },
        { 
            name: 'GitHub',
            href: '#',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
            )
        },
    ];

     const quickLinks = [
        { href: '#vision', label: 'Vision' },
        { href: '#themes', label: 'Themes' },
        { href: '#special', label: 'Features' },
    ];

    return (
        <footer className="relative border-t border-zinc-800 mt-20 pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
             <div className="absolute inset-0 w-full h-full bg-zinc-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
             <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Branding */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                         <a href="#" className="font-display text-2xl font-bold text-white">
                            Thinker<span className="text-red-500">Root</span>
                        </a>
                        <p className="mt-2 text-zinc-400 text-sm max-w-xs">Nurturing Core Innovation for a Better Tomorrow.</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="text-center">
                        <h3 className="font-display text-lg font-semibold text-zinc-200 tracking-wider">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                           {quickLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-zinc-400 hover:text-red-500 transition-colors duration-300">{link.label}</a>
                                </li>
                           ))}
                        </ul>
                    </div>

                    {/* Column 3: Social Links */}
                    <div className="text-center md:text-right">
                         <h3 className="font-display text-lg font-semibold text-zinc-200 tracking-wider">Connect With Us</h3>
                         <div className="flex justify-center md:justify-end space-x-6 mt-4">
                            {socialLinks.map(link => (
                                <a 
                                    key={link.name}
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-zinc-400 hover:text-red-500 transform hover:-translate-y-1 transition-all duration-300"
                                    aria-label={link.name}
                                >
                                {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} ThinkerRoot Ideathon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;