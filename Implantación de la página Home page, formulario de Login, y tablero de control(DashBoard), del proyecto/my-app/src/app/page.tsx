"use client";
import React from "react";
import Navbar from "@/componentes-views/layout/NavBarHome";
import HeroSection from "@/componentes-views/layout/HeroSection";
import ServicesSection from "@/componentes-views/sections/ServicesSection";
import PortfolioSection from "@/componentes-views/sections/PortfolioSection";
import AboutSection from "@/componentes-views/sections/AboutSection";
import TeamSection from "@/componentes-views/sections/TeamSection";
import ContactSection from "@/componentes-views/sections/ContactSection";
import Footer from "@/componentes-views/layout/Footer";


export default function Page() {
  return (
    <div className="bg-black text-black">
      <Navbar brand="MidnightCode" />
      <main className="pt-20">
        <HeroSection 
        titulo="Bienvenido a MidnightCode"
        subtitulo="¿Preparado para disfrutar?"
        textoBoton="Registrarse"
        linkBoton="/Registro"/>
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
