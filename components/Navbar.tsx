'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // <--- This was missing!
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'The Party', href: '/about' },
    { name: 'Wings', href: '/wings' },
    { name: 'Regions', href: '/regions' },
    { name: 'Media', href: '/media' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-swapo-blue text-white shadow-xl border-b-4 border-swapo-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. LOGO SECTION */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              
              {/* The Image Logo */}
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image 
                  src="/images/logo.png"
                  alt="SWAPO Party Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text Label */}
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl md:text-2xl tracking-tighter leading-none">
                  SWAPO
                </span>
                <span className="text-[10px] font-sans tracking-widest text-swapo-red font-bold bg-white text-center px-1">
                  EST. 1960
                </span>
              </div>

            </Link>
          </div>

          {/* 2. DESKTOP LINKS (Hidden on mobile) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="font-sans font-medium hover:text-swapo-yellow transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. ACTION BUTTONS (Hidden on mobile) */}
          <div className="hidden md:flex gap-4">
             <Link href="/join" className="px-5 py-2 border border-white rounded font-bold hover:bg-white hover:text-swapo-blue transition">
               JOIN
             </Link>
             <Link href="/donate" className="px-5 py-2 bg-swapo-red text-white rounded font-bold shadow-lg hover:brightness-110 transition">
               DONATE
             </Link>
          </div>

          {/* 4. MOBILE MENU BUTTON (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-swapo-yellow focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-swapo-blue border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-swapo-red hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-white/20 my-2 pt-2 flex flex-col gap-2">
               <Link href="/join" className="block text-center w-full py-3 border border-white rounded font-bold">
                 JOIN THE PARTY
               </Link>
               <Link href="/donate" className="block text-center w-full py-3 bg-swapo-red rounded font-bold">
                 DONATE NOW
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}