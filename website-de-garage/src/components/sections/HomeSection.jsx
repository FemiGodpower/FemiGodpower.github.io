import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HomeSection = ({ switchSection }) => {
  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-16 md:py-24 wood-texture">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#7A1E1E] mb-6 leading-tight animate-on-scroll">
          Welkom bij
          <br />
          Tanja en Xavier
        </h1>
        <p className="text-lg md:text-xl text-[#B7A99A] max-w-2xl mx-auto mb-8 font-sans leading-relaxed animate-on-scroll">
          Hier ontmoet het grillvuur de traditie, ambachtelijke
          grillspecialiteiten en tijdloze gastvrijheid bij Tanja & Xavier in
          Oudenaarde.
        </p>
        <div className="animate-on-scroll">
          <Button
            size="lg"
            onClick={() => switchSection("contact")}
            className="bg-[#7A1E1E] hover:bg-[#5A1616] text-[#FFF5E9] px-8 py-4 text-lg font-sans font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ember-glow"
          >
            reserveer een tafel
          </Button>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#7A1E1E] mb-12 animate-on-scroll">
          Chef's Specialties
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Card className="pt-0 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden group animate-on-scroll">
            <div className="h-64 flex items-center justify-center group-hover: transition-transform duration-500">
              <img src="./ribbetjes.png" alt="Ribbetjes" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-[#CFA45B] fill-current" />
                <h3 className="text-xl font-serif font-bold text-[#7A1E1E]">
                  Ribbetjes
                </h3>
              </div>
              <p className="text-[#B7A99A] font-sans leading-relaxed mb-4">
                Onze ribbetjes zijn dé referentie: geleverd door lokale,
                gerenommeerde slagers, ter plaatse gemarineerd en geserveerd met
                huisgemaakte tartaarsaus.
              </p>
              <div className="text-2xl font-serif font-bold text-[#7A1E1E]">
                À volonté
              </div>
            </CardContent>
          </Card>

          <Card className="pt-0 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden group animate-on-scroll">
            <div className="h-64 flex items-center justify-center group-hover: transition-transform duration-500">
              <img src="./cote-a-los.png" alt="Ribbetjes" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-[#CFA45B] fill-current" />
                <h3 className="text-xl font-serif font-bold text-[#7A1E1E]">
                  Côte a l'os
                </h3>
              </div>
              <p className="text-[#B7A99A] font-sans leading-relaxed mb-4">
                Een stuk rundvlees van eerste keuze (ca. 1.250 g), perfect
                gegrild naar uw wensen en geserveerd met een saus naar keuze
                (peper, Provençaal, champignon of béarnaise).
              </p>
              <div className="text-2xl font-serif font-bold text-[#7A1E1E]">
                Rund
              </div>
            </CardContent>
          </Card>

          <Card className="pt-0 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden group md:col-span-2 lg:col-span-1 animate-on-scroll">
            <div className="h-64 flex items-center justify-center group-hover: transition-transform duration-500">
              <img src="./brochette.png" alt="Ribbetjes" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-[#CFA45B] fill-current" />
                <h3 className="text-xl font-serif font-bold text-[#7A1E1E]">
                  Reuze Brochette
                </h3>
              </div>
              <p className="text-[#B7A99A] font-sans leading-relaxed mb-4">
                Een gemengde brochette (ca. 300 g) van sappig vlees, gegrild en
                geserveerd met een saus naar keuze (peper, Provençaal,
                champignon of béarnaise).
              </p>
              <div className="text-2xl font-serif font-bold text-[#7A1E1E]">
                Gemengd
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-3xl font-serif font-bold text-[#7A1E1E] mb-8">
            Garnituren naar keuze
          </h2>
          <p className="text-lg text-[#B7A99A] font-sans leading-relaxed">
            Al onze gerechten worden geserveerd met een bijgerecht naar keuze:
            knapperige, versgebakken frietjes, goudbruine kroketjes of een
            gepofte aardappel met huisgemaakte lookboter. Kies uw favoriet en
            maak uw maaltijd compleet.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
