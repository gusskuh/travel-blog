'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  currentPage?: 'home' | 'blog' | 'about';
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClassName = (page: string) => {
    const baseClasses = "text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium hebrew-text";
    const activeClasses = "text-primary-600";
    
    if (currentPage === page) {
      return `${baseClasses} ${activeClasses}`;
    }
    return baseClasses;
  };

  const getMobileLinkClassName = (page: string) => {
    const baseClasses = "block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-white/50 rounded-lg transition-colors duration-200 font-medium hebrew-text";
    const activeClasses = "text-primary-600 bg-white/50";
    
    if (currentPage === page) {
      return `${baseClasses} ${activeClasses}`;
    }
    return baseClasses;
  };

  return (
    <header className="bg-[#fdfbf3] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <Image 
              src="/logo.png" 
              alt="טיסות זולות" 
              width={90} 
              height={90} 
              className="object-contain"
            />
            <span className="text-xl font-bold text-gray-900 hebrew-text">טיסות זולות</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className={getLinkClassName('home')}>
              בית
            </Link>
            <Link href="/blog" className={getLinkClassName('blog')}>
              מאמרים
            </Link>
            <Link href="/about" className={getLinkClassName('about')}>
              אודות
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#fdfbf3] border-t border-gray-200">
            <nav className="px-4 py-4 space-y-2">
              <Link 
                href="/" 
                className={getMobileLinkClassName('home')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                בית
              </Link>
              <Link 
                href="/blog" 
                className={getMobileLinkClassName('blog')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                מאמרים
              </Link>
              <Link 
                href="/about" 
                className={getMobileLinkClassName('about')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                אודות
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
