"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Button from "@/componentes-views/UI/Button";

// REGEX DE SEGURIDAD
const strongPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,;:_+\-])[A-Za-z\d@$!%*?&.,;:_+\-]{8,}$/;

const schema = yup.object({
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .matches(
      strongPassword,
      "Debe tener 8 caracteres, mayúscula, minúscula, número y símbolo"
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
    .required("Confirma tu contraseña"),
});

type FormData = yup.InferType<typeof schema>;

export default function ResetPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = () => {
    alert("Tu contraseña fue cambiada exitosamente");
    router.push("/");
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
          Reset Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* PASSWORD */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">New password</label>

            <input
              type="password"
              placeholder="Enter new password"
              className="border border-gray-300 w-full px-4 py-3 rounded-lg bg-white text-gray-900
                         focus:ring-2 focus:ring-blue-500 outline-none"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Confirm password</label>

            <input
              type="password"
              placeholder="Repeat new password"
              className="border border-gray-300 w-full px-4 py-3 rounded-lg bg-white text-gray-900
                         focus:ring-2 focus:ring-blue-500 outline-none"
              {...register("confirmPassword")}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

          <Button
            type="submit"
            textoButton="Save new password"
            classNameButton="w-full bg-yellow-500 text-white py-3 cursor-pointer rounded-lg 
                             hover:bg-yellow-700 transition-colors font-semibold"
          />

          <button
            type="button"
            onClick={() => router.push("/login")}
            className="w-full mt-4 text-gray-700 font-medium hover:text-gray-900"
          >
            Back to Login
          </button>

        </form>
      </div>
    </div>
  );
}
