"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

import Button from "@/componentes-views/UI/Button";

const mockUsers = [
  { email: "usuario@gmail.com" },
  { email: "prueba@mail.com" },
  { email: "midnight@code.com" },
];

const schema = yup.object({
  email: yup.string().required("Correo obligatorio").email("Correo inválido"),
});

type FormData = yup.InferType<typeof schema>;

// GENERADOR DE TOKEN
const generateToken = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
};

export default function Forgot() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: FormData) => {
    const userExists = mockUsers.some((u) => u.email === data.email);

    if (!userExists) {
      alert("Este correo no está registrado.");
      return;
    }

    
    const token = generateToken();

    
    localStorage.setItem("resetToken", token);
    localStorage.setItem("resetEmail", data.email);

    
    navigator.clipboard.writeText(token).catch(() => {
      console.warn("No se pudo copiar automáticamente el token");
    });

    alert (
      `Correo encontrado: ${data.email}\n\nTu token de recuperación es:\n${token}\n\n(También se copió automáticamente al portapapeles)`
    );

   
    router.push("/verifytoken");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F4F5F7] px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 border border-gray-200">

        {/* LOGO */}
        <div className="flex items-center gap-2 justify-center mb-4">
          <div className="w-8 h-8 bg-yellow-500 rounded-md"></div>
          <span className="text-lg font-semibold text-gray-900">MidnightCode</span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Recover password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* EMAIL INPUT */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-1">
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 px-4 py-3 rounded-lg text-gray-900 bg-white 
                         focus:ring-2 focus:ring-blue-500 outline-none"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* BOTÓN ENVIAR */}
          <Button
            type="submit"
            textoButton="Send recovery email"
            classNameButton="w-full bg-yellow-500 text-white py-3 cursor-pointer rounded-lg 
                             hover:bg-yellow-700 transition-colors font-semibold"
          />

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
