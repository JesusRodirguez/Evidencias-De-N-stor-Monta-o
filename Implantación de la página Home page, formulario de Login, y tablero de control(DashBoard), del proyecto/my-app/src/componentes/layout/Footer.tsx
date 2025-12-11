import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-2 h-font">MidnightCode</h3>
        <p className="text-gray-400 mb-4">© {new Date().getFullYear()} MidnightCode — Todos los derechos reservados.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
