import React from "react";
import { Music, Glasses, PartyPopper } from "lucide-react";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Nuestros Servicios</h2>
        <p className="text-gray-600 mb-12">
          En <strong>MidnightCode</strong> fusionamos música, tecnología y ambiente
          para ofrecer noches inolvidables. Descubre todo lo que tenemos para ti.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* 🎵 Música y DJs */}
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4 text-yellow-400">
              <Music size={48} />
            </div>
            <h3 className="font-bold mb-2">Música y DJs</h3>
            <p className="text-gray-600">
              Disfruta de sesiones únicas con DJs nacionales e internacionales que traen lo mejor del house, techno y reggaetón.
            </p>
          </div>


          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4 text-yellow-400">
              <Glasses size={48} />
            </div>
            <h3 className="font-bold mb-2">Barra Premium</h3>
            <p className="text-gray-600">
              Cocteles exclusivos, bebidas importadas y mixología creativa para elevar tu experiencia.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4 text-yellow-400">
              <PartyPopper size={48} />
            </div>
            <h3 className="font-bold mb-2">Eventos Temáticos</h3>
            <p className="text-gray-600">
              Cada semana te sorprenderemos con una nueva temática, luces, decoración y ambientación única.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
