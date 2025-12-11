"use client";
import React from "react";
import "../../styles/FondoEstrellas.css"

const FondoEstrellas: React.FC = () => {
  return (
    <>
    <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
    </div>
    </>
  );
};

export default FondoEstrellas;
