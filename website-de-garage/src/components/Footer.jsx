import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { CONFIG } from '../config/restaurant';

const Footer = ({ isFooterVisible, isRealFooterInView, realFooterRef }) => {
  return (
    <>
      <footer 
        className={`hidden md:block fixed bottom-0 w-full bg-[#1F1F1F] text-[#FFF5E9] transition-transform duration-300 ease-in-out z-40 ${
          (isFooterVisible && !isRealFooterInView) ? 'translate-y-0' : 'translate-y-full'
        }`}
        aria-hidden="true"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm">
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#CFA45B]" />
                <span>{CONFIG.restaurant.address}</span>
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-6">
                <a href={CONFIG.social.facebook} className="text-[#B7A99A] hover:text-[#CFA45B] transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href={CONFIG.social.instagram} className="text-[#B7A99A] hover:text-[#CFA45B] transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#CFA45B]" />
                <a href={`tel:${CONFIG.restaurant.phone}`} className="hover:text-[#CFA45B] transition-colors">
                  {CONFIG.restaurant.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer ref={realFooterRef} className="bg-[#1F1F1F] text-[#FFF5E9]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-center md:text-left">
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <h4 className="font-serif font-bold text-[#CFA45B] text-lg mb-2">Locatie</h4>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#CFA45B]" />
                <span>{CONFIG.restaurant.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#CFA45B]" />
                <a href={`tel:${CONFIG.restaurant.phone}`} className="hover:text-[#CFA45B] transition-colors">
                  {CONFIG.restaurant.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#CFA45B]" />
                <a href={`mailto:${CONFIG.restaurant.email}`} className="hover:text-[#CFA45B] transition-colors">
                  {CONFIG.restaurant.email}
                </a>
              </div>
            </div>

            <div className="space-y-3 flex flex-col items-center md:items-start">
              <h4 className="font-serif font-bold text-[#CFA45B] text-lg mb-2">Openingsuren</h4>
              {Object.entries(CONFIG.hours).map(([day, hours]) => (
                <div key={day} className="flex w-full max-w-xs justify-between text-xs">
                  <span>{day}:</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 flex flex-col items-center md:items-start">
              <h4 className="font-serif font-bold text-[#CFA45B] text-lg mb-2">Volg ons</h4>
              <div className="flex items-center gap-4">
                <a href={CONFIG.social.facebook} className="text-[#B7A99A] hover:text-[#CFA45B] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={CONFIG.social.instagram} className="text-[#B7A99A] hover:text-[#CFA45B] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="text-xs text-[#B7A99A] space-y-1 pt-4">
                <p>© 2025 {CONFIG.restaurant.name}. All rights reserved.</p>
                <p><a href="#">Privacyverklaring</a> | <a href="#">Algemene Voorwaarden</a></p>
                <p>Site designed by GP Creations</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;