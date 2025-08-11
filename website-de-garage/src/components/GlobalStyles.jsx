import React from 'react';

const GlobalStyles = ({ scrollY }) => {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Inter:wght@300;400;500;600&display=swap');
      
      .font-serif { font-family: 'Merriweather', serif; }
      .font-sans { font-family: 'Inter', sans-serif; }
      
      /* Much faster scroll animations */
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px) scale(0.98);
        transition: all 250ms cubic-bezier(0.4, 0.0, 0.2, 1);
        will-change: transform, opacity;
      }
      
      .animate-fade-in {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
      }
      
      /* Much faster section transitions */
      .section-transition {
        animation: sectionFade 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      
      @keyframes sectionFade {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      /* Parallax gallery effects */
      .parallax-slow {
        transform: translateY(calc(var(--scroll-y) * 0.1px));
      }
      
      .parallax-medium {
        transform: translateY(calc(var(--scroll-y) * 0.2px));
      }
      
      .parallax-fast {
        transform: translateY(calc(var(--scroll-y) * 0.3px));
      }
      
      .wood-texture {
        background-image: 
          radial-gradient(circle at 20% 80%, rgba(120, 30, 30, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(207, 164, 91, 0.05) 0%, transparent 50%);
      }
      
      .ember-glow {
        box-shadow: 
          0 0 20px rgba(207, 164, 91, 0.1),
          0 0 40px rgba(120, 30, 30, 0.05);
      }

      /* Smooth scroll behavior */
      html {
        scroll-behavior: smooth;
      }

      /* Browser compatibility for backdrop-filter */
      @supports not (backdrop-filter: blur()) {
        .backdrop-blur-sm {
          background-color: rgba(255, 245, 233, 0.95); /* Fallback for browsers not supporting backdrop-filter */
        }
      }
      
      /* Reduce motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        .animate-on-scroll,
        .section-transition,
        .parallax-slow,
        .parallax-medium,
        .parallax-fast {
          animation: none !important;
          transition: none !important;
          transform: none !important;
        }
        html {
          scroll-behavior: auto;
        }
      }
    `}</style>
  );
};

export default GlobalStyles;