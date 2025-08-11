import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import HomeSection from './components/sections/HomeSection';
import MenuSection from './components/sections/MenuSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isRealFooterInView, setIsRealFooterInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef();
  const footerObserverRef = useRef();
  const realFooterRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { 
        rootMargin: '0px 0px -10px 0px',
        threshold: [0.1]
      }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => {
      el.classList.remove('animate-fade-in');
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRealFooterInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (realFooterRef.current) {
      observer.observe(realFooterRef.current);
    }
    
    footerObserverRef.current = observer;

    return () => footerObserverRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const windowHeight = window.innerHeight;
      const mouseY = e.clientY;
      const threshold = windowHeight * 0.9;
      
      if (window.innerWidth >= 768) {
        setIsFooterVisible(mouseY >= threshold);
      } else {
        setIsFooterVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const switchSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5E9] to-[#F5EDE3] text-[#1F1F1F] overflow-x-hidden">
      <GlobalStyles scrollY={scrollY} />
      
      <div style={{ '--scroll-y': scrollY }}> 
        <Header 
          activeSection={activeSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          switchSection={switchSection}
        />

        <main className="pt-24 pb-16" role="main">
          <div className="section-transition">
            {activeSection === 'home' && <HomeSection switchSection={switchSection} />}
            {activeSection === 'menu' && <MenuSection />}
            {activeSection === 'gallery' && <GallerySection scrollY={scrollY} />}
            {activeSection === 'contact' && <ContactSection />}
          </div>
        </main>

        <Footer 
          isFooterVisible={isFooterVisible}
          isRealFooterInView={isRealFooterInView}
          realFooterRef={realFooterRef}
        />
      </div>
    </div>
  );
}