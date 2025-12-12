"use client";
import React, { useState } from "react";
import NavbarTempalte from "./NavBarTemplate";
import { useRouter } from "next/navigation"; 

const DashboardLayout: React.FC = () => {
  const router = useRouter(); 

  return (
    <div className="flex bg-[#0A0A0A] min-h-screen">
      {/* SIDEBAR */}
      <aside className="w-[240px] h-screen bg-[#111] p-5 border-r border-[#222] fixed left-0 top-0">
        <div className="text-[22px] font-bold text-yellow-400 text-center mb-8">
          MidnightCode
        </div>

        <nav className="flex flex-col gap-2">
          <a className="px-3 py-2 rounded-lg text-gray-300 hover:bg-[#222] hover:text-white transition" href="#">
            Inventario
          </a>
          <a className="px-3 py-2 rounded-lg text-gray-300 hover:bg-[#222] hover:text-white transition" href="#">
            Usuarios
          </a>
          <a className="px-3 py-2 rounded-lg text-gray-300 hover:bg-[#222] hover:text-white transition" href="#">
            Ventas
          </a>
          <a className="px-3 py-2 rounded-lg text-gray-300 hover:bg-[#222] hover:text-white transition" href="#">
            Horario
          </a>
          <a className="px-3 py-2 rounded-lg text-gray-300 hover:bg-[#222] hover:text-white transition" href="#">
            Canciones
          </a>
          <a className="px-3 py-2 rounded-lg text-gray-300 hover:bg-[#222] hover:text-white transition" href="#">
            Reserva
          </a>
          <button
            onClick={() => router.push("/")} // Ahora funciona
            className="w-full mt-4 text-gray-700 font-medium flex items-center justify-center gap-1 hover:text-gray-900"
          >
            <span className="text-lg">←</span> Regresar
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="ml-[240px] flex-1 bg-[#EFEFEF] min-h-screen">
        <NavbarTempalte />

        <section className="m-6 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-700 mb-3">Panel Principal</h2>

          <p className="text-gray-600">
            Bienvenido al dashboard, aquí podrás ver toda la información de tu sistema.
          </p>

          <p className="text-gray-600 mt-4">
            Esta sección es completamente blanca, como pediste, ideal para colocar
            información, tablas, estadísticas o acciones administrativas.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DashboardLayout;
