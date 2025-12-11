import "../../../styles/Tailwind.css"

import NavbarTemplate from "@/componentes/layout/NavBarTemplate"
import HeroSection from "@/componentes/layout/HeroSection"
import ServicesSection from "@/componentes/sections/ServicesSection"
import Footer from "@/componentes/layout/Footer"
import Dragon from "@/componentes/Effect/EffectDragon"

export default function PaginaPrincipal (){
    return(
        <div className="bg-black text-blac">
            <NavbarTemplate/>
            <main className="pt-20">
                <HeroSection
                titulo="Bienvenido"
                subtitulo="¿Listo para el Party?"
                textoBoton="Reserva"
                linkBoton="/#"/>
                <ServicesSection/>
            </main>
            <Footer/>
        </div>
    )
}