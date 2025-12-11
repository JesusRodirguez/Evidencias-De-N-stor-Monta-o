import React from "react";

const PortfolioSection: React.FC = () => {
  // Lista de productos
  const productos = [
    { id: 1, titulo: "Aguardiente", descripcion: "El clásico de nuestras noches, compartido entre amigos.", img: "/img/portfolio/1.jpg" },
    { id: 2, titulo: "Ron", descripcion: "Suave, intenso y perfecto para disfrutar con buena música.", img: "/img/portfolio/2.jpg" },
    { id: 3, titulo: "VIPs", descripcion: "Zona exclusiva con atención personalizada y ambiente premium.", img: "/img/portfolio/3.jpg" },
    { id: 4, titulo: "Parqueadero", descripcion: "Seguro, amplio y disponible toda la noche para tu comodidad.", img: "/img/portfolio/4.jpg" },
    { id: 5, titulo: "Sugerir Canciones", descripcion: "Tu voz cuenta: pide tus canciones favoritas y súbele el ritmo.", img: "/img/portfolio/5.jpg" },
    { id: 6, titulo: "Snacks", descripcion: "Deliciosos acompañamientos para disfrutar junto a tus bebidas.", img: "/img/portfolio/6.jpg" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black/70 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2 text-yellow-400">Productos</h2>
        <p className="text-gray-300 mb-8">
          Descubre lo que tenemos para ti en <strong>MidnightCode</strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <figure
              key={producto.id}
              className="relative overflow-hidden rounded-xl shadow-lg group bg-black/40 border border-gray-700"
            >
              <a href={producto.img} target="_blank" rel="noreferrer">
                {/* Imagen con brillo animado */}
                <div className="relative overflow-hidden">
                  <img
                    src={producto.img}
                    alt={producto.titulo}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                  />

                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out rotate-45"></span>
                </div>
              </a>

              <figcaption className="p-5 text-left">
                <h4 className="font-bold text-yellow-400 text-lg mb-1">
                  {producto.titulo}
                </h4>
                <p className="text-sm text-gray-300">{producto.descripcion}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
