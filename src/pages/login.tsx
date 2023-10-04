import { useForm } from "react-hook-form";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { lexend } from ".";
import Link from "next/link";

function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />

      <div
        className={`flex flex-1 items-center justify-center bg-gray-200 ${lexend.className} `}
      >
        <div className="login-container bg-white p-8 rounded-lg shadow-lg w-[80%] min-h-[80%] max-w-[565px] ">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                placeholder="Digite seu e-mail..."
              />
              {/* {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )} */}
            </div>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1 "
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                className="block border p-2 w-full font-extralight focus:outline-brand-brand2 focus:outline-1"
                placeholder="Digite sua senha..."
              />
              {/* {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )} */}
              <span className="text-sm text-grey-4 cursor-pointer self-end mt-2 hover:text-gray-800">
                Esqueci minha senha
              </span>
            </div>
            <div className="mb-4 flex justify-between items-center flex-col rounded bg-brand-brand1 hover:bg-blue-700">
              <button
                type="submit"
                className=" text-white py-3 rounded focus:outline-none focus:border-blue-700 focus:ring w-full "
              >
                Entrar
              </button>
            </div>
          </form>
          <span className="text-sm mb-4 text-center block ">
            Ainda não possui conta?{" "}
          </span>
          <Link
            href="/register"
            className="flex items-center flex-col border-grey-2 border rounded py-3  hover:bg-grey-7 cursor-pointer "
          >
            <span className="text-grey-0 rounded font-semibold block">
              Cadastrar
            </span>
          </Link>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}

export default login;
