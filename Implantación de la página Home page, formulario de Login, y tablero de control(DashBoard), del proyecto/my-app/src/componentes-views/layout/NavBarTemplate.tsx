"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NavbarTempalte: React.FC = () => {
  const router = useRouter();

  const goBack = () => {
    alert("Aquí puedes poner router.back() ");
    // router.back();
  };

  return (
    <header className="w-full bg-white px-6 py-4 border-b border-gray-300 flex justify-between items-center">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={goBack}
          className="text-2xl cursor-pointer select-none"
        >
          ☰
        </button>
      </div>

      {/* Right User */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/150?img=3"
          className="w-11 h-11 rounded-full border-2 border-yellow-400"
          alt="User"
        />
        <span className="font-semibold text-gray-800">John Doe</span>
      </div>
    </header>
  );
};

export default NavbarTempalte;
