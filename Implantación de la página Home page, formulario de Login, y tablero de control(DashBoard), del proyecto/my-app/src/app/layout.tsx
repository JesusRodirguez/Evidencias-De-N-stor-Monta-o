import "../styles/Tailwind.css";
import { Roboto_Slab, Montserrat } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "MidnightCode",
  description: "Sitio oficial de MidnightCode",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${robotoSlab.variable} ${montserrat.variable} bg-[#0b0b2b]`}
    >
      <body className="bg-[#0b0b2b] text-white font-[var(--font-roboto)]">
        {children}
      </body>
    </html>
  );
}
