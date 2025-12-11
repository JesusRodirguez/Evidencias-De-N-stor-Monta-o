import React from "react";

const TeamSection: React.FC = () => {
  const members = [
    { name: "Maicol Ruiz", role: "Bartender", img: "/img/team/1.jpg" },
    { name: "David Garcia", role: "Service", img: "/img/team/2.jpg" },
    { name: "Pedro Solis", role: "Seguridad", img: "/img/team/3.jpg" },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Grandioso Equipo</h2>
        <p className="text-gray-600 mb-12">Profesionales en la atención al cliente</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((m) => (
            <div
              key={m.name}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
            >
              <img
                src={m.img}
                alt={m.name}
                className="rounded-full w-40 h-40 object-cover mb-4 border-4 border-yellow-400"
              />
              <h4 className="font-bold text-lg">{m.name}</h4>
              <p className="text-gray-500">{m.role}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-12 max-w-2xl mx-auto leading-relaxed">
          “Todo lo puedo en Cristo que me fortalece.” <br />
          <span className="font-semibold">— Filipenses 4:13</span>
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
