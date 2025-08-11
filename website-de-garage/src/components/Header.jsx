import React from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { CONFIG } from '../config/restaurant';

const Header = ({ activeSection, isMobileMenuOpen, setIsMobileMenuOpen, switchSection }) => {
  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Zaal' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-[#FFF5E9]/95 backdrop-blur-sm z-50 border-b border-[#B7A99A]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <img src="./logo.svg" alt="Logo restaurant" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-[#7A1E1E]">
              {CONFIG.restaurant.name}
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navigation.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => switchSection(id)}
                className={`font-sans font-medium transition-all duration-200 pb-1 ${
                  activeSection === id 
                    ? 'text-[#7A1E1E] border-b-2 border-[#CFA45B]' 
                    : 'text-[#B7A99A] hover:text-[#7A1E1E] hover:border-b-2 hover:border-[#CFA45B]/50'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-[#7A1E1E] hover:bg-[#B7A99A]/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#B7A99A]/20 pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => switchSection(id)}
                  className={`text-left font-sans font-medium py-2 px-4 rounded-lg transition-all duration-200 ${
                    activeSection === id 
                      ? 'text-[#7A1E1E] bg-[#CFA45B]/10' 
                      : 'text-[#B7A99A] hover:text-[#7A1E1E] hover:bg-[#B7A99A]/10'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;