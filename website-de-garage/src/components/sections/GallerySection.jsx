import React from "react";
import { Card } from "@/components/ui/card";
import { galleryImages } from "../../data/galleryData";

const GallerySection = ({ scrollY }) => {
  const getLayoutClasses = (layout) => {
    switch (layout) {
      case "wide":
        return "md:col-span-2 aspect-video";
      case "square":
      default:
        return "md:col-span-1 aspect-square";
    }
  };

  const getParallaxClass = (parallax) => {
    switch (parallax) {
      case "slow":
        return "parallax-slow";
      case "medium":
        return "parallax-medium";
      case "fast":
        return "parallax-fast";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-on-scroll">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#7A1E1E] mb-4">
          Zaal / Gallerij
        </h1>
        <p className="text-lg text-[#B7A99A] font-sans max-w-2xl mx-auto">
          Mogelijkheid voor rouw- en feestgelegenheden. Zaal tot max. 80
          personen.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-auto"
        style={{ "--scroll-y": scrollY }}
      >
        {galleryImages.map((image, index) => (
          <Card
            key={image.id}
            className={`h-full p-0 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-rotate-1 rounded-2xl overflow-hidden group animate-on-scroll cursor-pointer ${getLayoutClasses(
              image.layout
            )} ${getParallaxClass(image.parallax)}`}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#7A1E1E]/10 via-[#FFF5E9] to-[#CFA45B]/10 group-hover:scale-110 transition-transform duration-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CFA45B]/5 to-transparent animate-pulse"></div>
              <img
                src={image.img}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-20 animate-on-scroll">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-[#7A1E1E] mb-4">
            Aan het vuur bij De Garage
          </h3>
          <p className="text-[#B7A99A] font-sans leading-relaxed">
            Elke foto vertelt het verhaal van onze passie voor het grillvuur.
            Van de eerste gloed op de kolen tot het laatste bord dat de zaal
            verlaat: beleef het vakmanschap dat Tanja & Xavier elke dag brengen.
            Onze open grill is meer dan een kookplek hier krijgen ribbetjes,
            côte à l’os en reuze brochettes hun karakter, hier worden
            herinneringen gesmeed en komen smaken tot leven in Oudenaarde.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default GallerySection;
