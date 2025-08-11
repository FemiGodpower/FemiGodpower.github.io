import React, { useState } from "react";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONFIG } from "../../config/restaurant";
import GoogleMapEmbed from "./GoogleMapEmbed";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Naam is verplicht";
    if (!formData.email.trim()) newErrors.email = "Email is verplicht";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is incorrect";
    if (!formData.message.trim()) newErrors.message = "Message is verplicht";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormStatus("success");
    setErrors({});
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setFormStatus(""), 5000);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-on-scroll">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#7A1E1E] mb-4">
          Contacteer ons
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="pt-0 bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden animate-on-scroll">
          <div className="bg-gradient-to-r from-[#7A1E1E] to-[#CFA45B] p-8 text-center animate-on-scroll">
            <h2 className="text-2xl font-serif font-bold text-[#FFF5E9] mb-2">
              Reservaties dienen steeds telefonisch te gebeuren
            </h2>
            <p className="text-[#FFF5E9]/90 font-sans mb-4">
              Bel ons rechtstreeks om uw tafel vast te leggen en eventuele
              speciale wensen te bespreken.
            </p>
            <a
              href={`tel:${CONFIG.restaurant.phone}`}
              className="inline-flex items-center gap-3 bg-[#FFF5E9] text-[#7A1E1E] px-6 py-3 rounded-xl font-sans font-semibold hover:bg-[#F5EDE3] transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {CONFIG.restaurant.phone}
            </a>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="animate-on-scroll">
                <h3 className="text-xl font-serif font-bold text-[#7A1E1E] mb-6">
                  Stuur ons een bericht
                </h3>

                {formStatus === "success" && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6 rounded">
                    <p className="text-green-700 font-sans">
                      Bedankt voor uw bericht! We nemen snel contact met u op.
                      Voor reservaties kunt u ons het best rechtstreeks bellen.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-sans font-medium text-[#1F1F1F] mb-2"
                    >
                      Naam *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={`font-sans ${
                        errors.name ? "border-red-500" : "border-[#B7A99A]/30"
                      } focus:border-[#7A1E1E] focus:ring-[#7A1E1E]/20`}
                      placeholder="Naam"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 font-sans">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-sans font-medium text-[#1F1F1F] mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`font-sans ${
                        errors.email ? "border-red-500" : "border-[#B7A99A]/30"
                      } focus:border-[#7A1E1E] focus:ring-[#7A1E1E]/20`}
                      placeholder="@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 font-sans">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-sans font-medium text-[#1F1F1F] mb-2"
                    >
                      Telephone (optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="font-sans border-[#B7A99A]/30 focus:border-[#7A1E1E] focus:ring-[#7A1E1E]/20"
                      placeholder="04 97 53 14 99"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-sans font-medium text-[#1F1F1F] mb-2"
                    >
                      Bericht *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className={`font-sans min-h-24 ${
                        errors.message
                          ? "border-red-500"
                          : "border-[#B7A99A]/30"
                      } focus:border-[#7A1E1E] focus:ring-[#7A1E1E]/20`}
                      placeholder="Vertel ons over uw eetvoorkeuren, speciale gelegenheden of eventuele vragen…"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 font-sans">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#7A1E1E] hover:bg-[#5A1616] text-[#FFF5E9] py-3 font-sans font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    Bericht Versturen
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="animate-on-scroll">
                  <h3 className="text-xl font-serif font-bold text-[#7A1E1E] mb-4">
                    Locatie
                  </h3>
                  <GoogleMapEmbed />
                </div>

                <div className="animate-on-scroll">
                  <h3 className="text-xl font-serif font-bold text-[#7A1E1E] mb-4">
                    Openings uren
                  </h3>
                  <Card className="bg-[#FFF5E9] border-0 rounded-xl">
                    <CardContent className="p-6 space-y-3">
                      {Object.entries(CONFIG.hours).map(([day, hours]) => (
                        <div
                          key={day}
                          className="flex justify-between items-center border-b border-[#B7A99A]/20 pb-2 last:border-0 last:pb-0"
                        >
                          <span className="font-sans font-medium text-[#1F1F1F]">
                            {day}
                          </span>
                          <span className="font-sans text-[#7A1E1E] font-semibold">
                            {hours}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;
