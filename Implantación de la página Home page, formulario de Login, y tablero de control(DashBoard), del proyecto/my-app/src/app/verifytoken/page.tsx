"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyToken() {
  const [tokenInput, setTokenInput] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedToken = localStorage.getItem("resetToken");

    if (!savedToken) {
      setError("No existe un token generado. Vuelve a Forgot Password.");
      return;
    }

    if (tokenInput !== savedToken) {
      setError("El token no coincide.");
      return;
    }

    alert("Token verificado correctamente");
    router.push("/resetpassword");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F4F5F7] px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 border border-gray-200">

        {/* LOGO (misma estructura que forgot) */}
        <div className="flex items-center gap-2 justify-center mb-4">
          <div className="w-8 h-8 bg-yellow-500 rounded-md"></div>
          <span className="text-lg font-semibold text-gray-900">
            MidnightCode
          </span>
        </div>

        {/* TÍTULO */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Verify Token
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* INPUT TOKEN */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Enter your token
            </label>

            <input
              type="text"
              placeholder="32-character token"
              maxLength={32}
              className="border border-gray-300 px-4 py-3 rounded-lg text-gray-900 bg-white 
                         focus:ring-2 focus:ring-blue-500 outline-none"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              required
            />
          </div>

          {/* MENSAJE DE ERROR */}
          {error && (
            <p className="text-red-500 text-sm mt-[-4px]">{error}</p>
          )}

          {/* BOTÓN VERIFICAR */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 cursor-pointer rounded-lg 
                       hover:bg-yellow-700 transition-colors font-semibold"
          >
            Verify Token
          </button>

          {/* BOTÓN CANCELAR */}
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="w-full mt-4 text-gray-700 font-medium flex items-center justify-center gap-1 
                       hover:text-gray-900"
          >
            <span className="text-lg">←</span> Cancelar
          </button>

        </form>

      </div>
    </div>
  );
}
