import React from 'react';

const MAP_CONFIG = {
  // Standaard 16:9 verhouding = 56.25%
  // Voor 4:3 verhouding gebruik: 75%
  // Voor vierkant gebruik: 100%
  aspectRatio: '56.25%',
  borderRadius: 12
};

const GoogleMapEmbed = () => {
  return (
    <div style={{
      position: 'relative',
      paddingBottom: MAP_CONFIG.aspectRatio,
      height: 0,
      overflow: 'hidden',
      borderRadius: MAP_CONFIG.borderRadius
    }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.708918212729!2d3.623355465296072!3d50.87801874528662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c30df9550539ef%3A0x3b24f9c3c1a8a613!2sDe%20Garage!5e0!3m2!1snl!2sbe!4v1754931616390!5m2!1snl!2sbe"
        title="De Garage — Google Maps"
        style={{ 
          position: 'absolute', 
          inset: 0, 
          width: '100%', 
          height: '100%', 
          border: 0 
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMapEmbed;