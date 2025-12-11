"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function NavbarTemplate() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm py-4"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <div className="logo">
          <Link
            href="#hero"
            className="text-white text-2xl font-semibold hover:opacity-80 transition-all smoothscroll"
          >
            MidnightCode
          </Link>
        </div>

        {/* Mobile buttons */}
        <div className="lg:hidden flex gap-4">
          {!open ? (
            <button
              onClick={() => setOpen(true)}
              className="text-white flex flex-col items-center"
            >
              <span className="text-sm">Show Menu</span>
              <span className="w-6 h-0.5 bg-white mt-1"></span>
            </button>
          ) : (
            <button
              onClick={() => setOpen(false)}
              className="text-white flex flex-col items-center"
            >
              <span className="text-sm">Hide Menu</span>
              <span className="w-6 h-0.5 bg-white mt-1"></span>
            </button>
          )}
        </div>

        {/* Nav */}
        <nav
          className={`${
            open
              ? "flex flex-col absolute top-14 right-4 bg-black/90 px-6 py-4 rounded-lg backdrop-blur-sm shadow-lg"
              : "hidden"
          } lg:flex lg:flex-row lg:static lg:bg-transparent lg:p-0`}
        >
          <ul className="flex flex-col gap-4 lg:flex-row lg:gap-8 text-white text-sm">
            <li>
              <Link href="/" className="smoothscroll hover:opacity-70">
                Home
              </Link>
            </li>

            <li>
              <Link href="#portfolio" className="smoothscroll hover:opacity-70">
                Reservar
              </Link>
            </li>

            <li>
              <Link href="#services" className="smoothscroll hover:opacity-70">
                Menu
              </Link>
            </li>

            <li>
              <Link href="#about" className="smoothscroll hover:opacity-70">
                Canción
              </Link>
            </li>

            <li>
              <Link href="#journal" className="smoothscroll hover:opacity-70">
                Ayuda
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
