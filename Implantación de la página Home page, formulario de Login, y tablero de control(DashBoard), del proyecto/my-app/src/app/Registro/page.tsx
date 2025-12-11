"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Title from "@/componentes/UI/Title";
import InPut from "@/componentes/UI/InPut";
import Button from "@/componentes/UI/Button";
import "../../styles/Tailwind.css";

const schema = yup.object({
  nombre: yup
    .string()
    .required("El nombre es obligatorio")
    .min(3, "Debe tener al menos 3 caracteres")
    .matches(/^[A-Za-z\s]+$/, "Solo se permiten letras"),

  email: yup
    .string()
    .required("El correo es obligatorio")
    .email("Debe ser un correo válido"),

  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(8, "Debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "Debe incluir al menos una mayúscula")
    .matches(/[a-z]/, "Debe incluir al menos una minúscula")
    .matches(/[0-9]/, "Debe incluir al menos un número")
    .matches(/[@$!%*?&#]/, "Debe incluir al menos un símbolo especial (@$!%*?&#)"),

  confirmarPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
    .required("Debe confirmar la contraseña"),
});

type FormData = yup.InferType<typeof schema>;

export default function Registro() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    alert(`Registro exitoso: Bienvenido, ${data.nombre}!`);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F4F5F7] px-4">

      {/* CARD IGUAL AL LOGIN */}
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 border border-gray-200">

        {/* LOGO IGUAL AL LOGIN */}
        <div className="flex items-center gap-2 justify-center mb-4">
          <div className="w-8 h-8 bg-yellow-500 rounded-md"></div>
          <span className="text-lg font-semibold text-gray-900">MidnightCode</span>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Create account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* NOMBRE */}
          <div>
            <InPut
              textoLabel="Full name"
              id="nombre"
              type="text"
              classNameDiv="flex flex-col"
              classNameLabel="text-gray-700 font-medium mb-1"
              classNameInput="border border-gray-300 px-4 py-3 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              {...register("nombre")}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm">{errors.nombre.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <InPut
              textoLabel="Email address"
              id="email"
              type="email"
              classNameDiv="flex flex-col"
              classNameLabel="text-gray-700 font-medium mb-1"
              classNameInput="border border-gray-300 px-4 py-3 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <InPut
              textoLabel="Password"
              id="password"
              type="password"
              classNameDiv="flex flex-col"
              classNameLabel="text-gray-700 font-medium mb-1"
              classNameInput="border border-gray-300 px-4 py-3 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* CONFIRMAR PASSWORD */}
          <div>
            <InPut
              textoLabel="Confirm password"
              id="confirmarPassword"
              type="password"
              classNameDiv="flex flex-col"
              classNameLabel="text-gray-700 font-medium mb-1"
              classNameInput="border border-gray-300 px-4 py-3 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              {...register("confirmarPassword")}
            />
            {errors.confirmarPassword && (
              <p className="text-red-500 text-sm">{errors.confirmarPassword.message}</p>
            )}
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            textoButton="Create account"
            classNameButton="w-full bg-yellow-500 text-white py-3 cursor-pointer rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
          />

        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>

    </div>
  );
}
