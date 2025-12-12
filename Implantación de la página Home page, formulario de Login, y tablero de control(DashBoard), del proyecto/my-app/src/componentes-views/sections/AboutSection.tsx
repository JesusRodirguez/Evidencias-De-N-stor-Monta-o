import React from "react";

const AboutSection: React.FC = () => {
  const steps = [
{
    date: "2009 - 2011",
    title: "Nuestros Inicios",
    text: "Un grupo de amigos apasionados por la música y la vida nocturna comenzó a organizar pequeñas fiestas privadas en Medellín, dando origen a la idea de crear un espacio propio: MidnightCode.",
  },
  {
    date: "Marzo 2012",
    title: "Nace MidnightCode",
    text: "Con una visión clara de fusionar tecnología, sonido y ambiente, abrimos oficialmente nuestras puertas. Desde el primer día, cada noche fue una experiencia distinta.",
  },
  {
    date: "Diciembre 2016",
    title: "Expansión y Reconocimiento",
    text: "El crecimiento fue imparable. Renovamos nuestras instalaciones, incorporamos DJs internacionales y nos convertimos en un punto de referencia en la vida nocturna de la ciudad.",
  },
  {
    date: "Julio 2020",
    title: "Reinvención Digital",
    text: "Durante los años de pausa mundial, transformamos nuestra experiencia. Creamos eventos virtuales y fortalecimos nuestra comunidad online de amantes de la música electrónica.",
  },
  {
    date: "2023 - Presente",
    title: "Una Nueva Era",
    text: "Hoy MidnightCode combina lo mejor del pasado con la innovación del futuro: experiencias inmersivas, eventos temáticos y tecnología de vanguardia al servicio de la fiesta.",
  },  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Nosotros</h2>

        <div className="relative flex flex-col items-center">
          <ul className="space-y-12 w-full">
            {steps.map((s, idx) => (
              <li
                key={idx}
                className={`flex flex-col md:flex-row items-center justify-center gap-8 ${
                  idx % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center text-center font-bold text-sm md:text-base">
                    {s.date}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left max-w-lg">
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>

          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
