'use client';


import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import type { ReactNode } from "react"; // Para tipos opcionais
import Logotipo from "../Logotipo";

export default function Navbar(): ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#specials', label: 'Especialidades' },
    { href: '#differences', label: 'Diferenciais' },
    { href: '#choose-me', label: 'Por que me escolher' },
    { href: '#contatos', label: 'Contatos' },
    { href: '#local', label: 'Localização' },
  ];

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-primary text-white px-6 md:px-10 py-4 shadow-lg border-b-4 border-tertiary flex items-center justify-between font-poppins"
    >
      {/* Logo */}
      <Logotipo />

      {/* Links Desktop */}
      <ul className="hidden md:flex items-center space-x-8 mx-auto">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className="text-lg font-medium hover:text-quaternary transition-colors duration-300 py-2 px-3 rounded-md hover:bg-secondary/50"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Container direito: WhatsApp + Hamburger */}
      <div className="flex items-center space-x-4 shrink-0">
        {/* WhatsApp */}
        <a 
          href="https://wa.me/5511998320101?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20o%20Dr.%20Eduardo%20Macedo."
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-accent hover:bg-[#25D366] text-quaternary font-semibold text-sm px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 font-poppins"
          title="Conversar com Eduardo"
        >
          <FaWhatsapp className="w-5 h-5" />
          <span className="hidden sm:inline">Conversar com Eduardo</span>
        </a>

        {/* Hamburger */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-secondary/50 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-primary shadow-2xl border-b-4 border-tertiary md:hidden py-4 px-6 space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className="block text-lg font-medium py-3 px-4 hover:text-quaternary hover:bg-secondary/50 rounded-lg transition-all duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* WhatsApp mobile */}
          <li>
            <a 
              href="https://wa.me/5511998320101?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20o%20Dr.%20Eduardo%20Macedo."
              className="block bg-accent hover:bg-[#25D366] text-quaternary font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-3 text-base"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-6 h-6" />
              Conversar com Eduardo
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}