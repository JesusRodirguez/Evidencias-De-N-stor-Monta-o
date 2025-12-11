"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type NavbarProps = {
  brand?: string;
};

const Navbar: React.FC<NavbarProps> = ({ brand = "MidnightCode" }) => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 top-0 left-0 transition-all duration-500 ease-in-out ${
        shrink ? "bg-black/90 py-2 shadow-md" : "bg-black/70 py-4"
      }`}
      style={{ backdropFilter: "blur(4px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-white h-font text-2xl font-bold">
          {brand}
        </Link>
        <nav>
          <ul className="flex gap-6 items-center text-white text-sm">
            <li><a href="#services" className="hover:text-yellow-300">Servicios</a></li>
            <li><a href="#portfolio" className="hover:text-yellow-300">Menu</a></li>
            <li><a href="#about" className="hover:text-yellow-300">Nosotros</a></li>
            <li><a href="#team" className="hover:text-yellow-300">Equipo</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contacto</a></li>
            <li><a href="/Registro" className="hover:text-yellow-300">Registrarse</a></li>
            <li><Link href="/login" className="ml-4 px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition">Iniar Sesión</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
