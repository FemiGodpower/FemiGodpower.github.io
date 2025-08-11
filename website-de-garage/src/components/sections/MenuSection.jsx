import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { foodMenu, drinkMenu } from "../../data/menuData";

const MenuSection = () => {
  const renderMenu = (menu, title) => (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-2xl animate-on-scroll">
      <CardHeader className="text-center p-8 border-b border-[#B7A99A]/20">
        <h2 className="text-3xl font-serif font-bold text-[#7A1E1E]">
          {title}
        </h2>
      </CardHeader>
      <CardContent className="p-8">
        {Object.entries(menu).map(([category, items]) => (
          <div key={category} className="mb-8 last:mb-0">
            <h3 className="text-xl font-serif font-bold text-[#7A1E1E] mb-4 pb-2 border-b-2 border-[#CFA45B]">
              {category}
            </h3>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start group hover:bg-[#FFF5E9]/50 p-2 -m-2 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-sans font-semibold text-[#1F1F1F] group-hover:text-[#7A1E1E] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#B7A99A] mt-1 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="font-serif font-bold text-[#7A1E1E] text-lg ml-4">
                    ${item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-on-scroll">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#7A1E1E] mb-4">
          Ons Menu
        </h1>
        <p className="text-lg text-[#B7A99A] font-sans max-w-2xl mx-auto">
          Elke maaltijd met zorg bereid boven open vuur, met gebruik van de
          beste seizoensgebonden ingrediënten.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {renderMenu(foodMenu, "Spijskaart")}
        {renderMenu(drinkMenu, "Drankenkaart")}
      </div>
    </div>
  );
};

export default MenuSection;
