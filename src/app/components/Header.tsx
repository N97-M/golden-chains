'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  // Function to handle link clicks
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-100 shadow-md fixed top-0 left-0 right-0 w-full z-50">
      {/* Desktop Header */}
      <div className="container mx-auto px-4 lg:px-8 h-20">
        <div className="hidden md:grid grid-cols-3 items-center h-full">
          {/* Left Navigation (Start) */}
          <div className="flex items-center justify-start space-x-6 lg:space-x-8 rtl:space-x-reverse">
            <Link href="/" className="group relative inline-block">
              <span className="font-bold text-black text-base whitespace-nowrap">{t('nav.home')}</span>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/our-team" className="group relative inline-block">
              <span className="font-bold text-black text-base whitespace-nowrap">{t('nav.ourTeam')}</span>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="group relative inline-block">
              <span className="font-bold text-black text-base whitespace-nowrap">{t('nav.about')}</span>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <Link href="/" className="block">
              <div className="relative w-32 h-16 md:w-40 md:h-16">
                <Image
                  src="/logo.png"
                  alt="Golden Chains Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right Navigation (End) */}
          <div className="flex items-center justify-end space-x-6 lg:space-x-8 rtl:space-x-reverse">
            <Link href="/brands" className="group relative inline-block">
              <span className="font-bold text-black text-base whitespace-nowrap">{t('nav.brands')}</span>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/outlets" className="group relative inline-block">
              <span className="font-bold text-black text-base whitespace-nowrap">{t('nav.outlets')}</span>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="group relative inline-block">
              <span className="font-bold text-black text-base whitespace-nowrap">{t('nav.contact')}</span>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-full"></span>
            </Link>
            {/* Language Switcher */}
            <div className="ml-4 rtl:mr-4 rtl:ml-0">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between h-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black p-2 -ml-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Logo */}
          <div className="relative w-28 h-14">
            <Image
              src="/logo.png"
              alt="Golden Chains Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="w-7 flex items-center justify-end">
            {/* Mobile Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-1">
            <Link href="/" onClick={handleLinkClick} className="group relative block py-3">
              <span className="font-bold text-black text-base">{t('nav.home')}</span>
              <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-16"></span>
            </Link>
            <Link href="/our-team" onClick={handleLinkClick} className="group relative block py-3">
              <span className="font-bold text-black text-base">{t('nav.ourTeam')}</span>
              <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-20"></span>
            </Link>
            <Link href="/about" onClick={handleLinkClick} className="group relative block py-3">
              <span className="font-bold text-black text-base">{t('nav.about')}</span>
              <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-20"></span>
            </Link>
            <Link href="/brands" onClick={handleLinkClick} className="group relative block py-3">
              <span className="font-bold text-black text-base">{t('nav.brands')}</span>
              <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-16"></span>
            </Link>
            <Link href="/outlets" onClick={handleLinkClick} className="group relative block py-3">
              <span className="font-bold text-black text-base">{t('nav.outlets')}</span>
              <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-16"></span>
            </Link>
            <Link href="/contact" onClick={handleLinkClick} className="group relative block py-3">
              <span className="font-bold text-black text-base">{t('nav.contact')}</span>
              <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-24"></span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .nav-link {
          @apply font-bold text-black hover:text-black relative text-base transition-colors duration-300;
          letter-spacing: 0.5px;
        }
        .link-underline {
          @apply absolute -bottom-1 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300;
        }
        .nav-link:hover .link-underline {
          @apply scale-x-100;
        }
        .mobile-nav-link {
          @apply block py-3 px-4 text-black hover:bg-gray-200 font-bold text-base transition-colors duration-300;
          letter-spacing: 0.5px;
        }
      `}</style>
    </header>
  );
} 