"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

import Button from "@/componentes-views/UI/Button";

type FormData = {
  email: string;
  password: string;
};

const EMAIL_VALIDO = "usuario@gmail.com";
const PASSWORD_VALIDA = "User123!";

const schema = yup.object({
  email: yup.string().required("Correo obligatorio").email("Correo inválido"),
  password: yup
    .string()
    .required("Contraseña obligatoria")
    .min(8, "Mínimo 8 caracteres")
    .matches(/[A-Z]/, "Debe tener mayúscula")
    .matches(/[a-z]/, "Debe tener minúscula")
    .matches(/[0-9]/, "Debe tener número")
    .matches(/[@$!%*?&#]/, "Debe tener símbolo especial"),
});

export default function Login() {
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormData) => {
    if (data.email === EMAIL_VALIDO && data.password === PASSWORD_VALIDA) {
      router.push("/usuario/home");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F4F5F7] px-4">

      {/* CARD */}
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 border border-gray-200">

        {/* LOGO */}
        <div className="flex items-center gap-2 justify-center mb-4">
          <div className="w-8 h-8 bg-yellow-500 rounded-md"></div>
          <span className="text-lg font-semibold text-gray-900">MidnightCode</span>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Sign in</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* EMAIL */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium mb-1">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-gray-300 px-4 py-3 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  {...field}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            )}
          />

          {/* PASSWORD */}
          <div className="relative">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-gray-700 font-medium mb-1">
                    Password
                  </label>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="border border-gray-300 px-4 py-3 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 outline-none pr-12"
                    {...field}
                  />

                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                  )}
                </div>
              )}
            />

            {/* ICON SHOW/HIDE */}
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 bottom-3 text-gray-600 hover:text-gray-800"
              aria-label="toggle password"
            >
              {showPassword ? (
                // OJO CERRADO
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" d="M3 3l18 18M10.584 10.587A3 3 0 0113.41 13.41M9.88 5.212A8.962 8.962 0 0112 5c5 0 9 4 10 7-.33.77-.79 1.5-1.36 2.14M6.22 6.223C4.07 7.636 2.5 9.68 2 12c1 3 5 7 10 7 1.52 0 2.95-.35 4.22-.97" />
                </svg>
              ) : (
                // OJO ABIERTO
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              )}
            </button>

            {/* FORGOT PASSWORD */}
            <div className="text-right text-sm mt-1">
              <button
                type="button"
                onClick={() => router.push("/forgot")}
                className="text-blue-600 hover:underline"
              >
                Forgot your password?
              </button>
            </div>
          </div>

          {/* BUTTON LOGIN */}
          <Button
            type="submit"
            textoButton="Sign in"
            classNameButton="w-full bg-yellow-500 text-white py-3 cursor-pointer rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
          />

          {/* REGRESAR */}
          <button
            onClick={() => router.push("/")}
            className="w-full mt-4 text-gray-700 font-medium flex items-center justify-center gap-1 hover:text-gray-900"
          >
            <span className="text-lg">←</span> Regresar
          </button>
        </form>

        {/* CREATE ACCOUNT */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/Registro")}
            className="text-blue-600 font-medium hover:underline"
          >
            Create one
          </button>
        </p>
      </div>

    </div>
  );
}
