import { useForm } from "react-hook-form";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import React from "react";
import { lexend } from ".";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, LoginSchema } from "@/schemas/user.schema";

function register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (formData: any) => {
    console.log(formData);
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PageHeader />
        <div
          className={`flex flex-1 items-center justify-center bg-gray-200 py-10 ${lexend.className} `}
        >
          <div className=" bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-[565px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="is_seller"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  {...register("is_seller")}
                  className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                  placeholder="Ex: Rafael Tomazini"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                  placeholder="Ex: rafael@mail.com.br"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cpf"
                  className="block text-sm text-gray-600 mb-1"
                >
                  CPF
                </label>
                <input
                  type="text"
                  {...register("cpf")}
                  className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                  placeholder="000.000.000-00"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Celular
                </label>
                <input
                  type="text"
                  {...register("phone")}
                  className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                  placeholder="(DDD) 00000-0000"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="birth_date"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Data de nascimento
                </label>
                <input
                  type="date"
                  {...register("birth_date")}
                  className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Descrição
                </label>
                <textarea
                  {...register("description")}
                  className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder resize-none"
                  placeholder="Insira uma breve descrição sobre você"
                />
              </div>
              <span className="text-gray-900">Informações de endereço</span>
              <div className="mb-4 mt-4">
                <label
                  htmlFor="cep"
                  className="block text-sm text-gray-600 mb-1"
                >
                  CEP
                </label>
                <input
                  type="text"
                  {...register("cep")}
                  className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                  placeholder="00000-000"
                />
              </div>
              <div className="mb-4 flex justify-around gap-8">
                <div className="left-div w-full">
                  <label
                    htmlFor="state"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    Estado
                  </label>
                  <input
                    type="text"
                    {...register("state")}
                    className="block border p-2 placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder w-full"
                    placeholder="Digitar Estado"
                  />
                </div>
                <div className="right-div w-full">
                  <label
                    htmlFor="city"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    {...register("city")}
                    className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                    placeholder="Digitar Estado"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="street"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Rua
                </label>
                <input
                  type="text"
                  {...register("street")}
                  className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                  placeholder="Ex: Rua Fernando Guimarães"
                />
              </div>
              <div className="mb-4 flex justify-around gap-8">
                <div className="left-div w-full">
                  <label
                    htmlFor="number"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    Numero
                  </label>
                  <input
                    type="text"
                    {...register("number")}
                    className="block border p-2 placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder w-full"
                    placeholder="Digitar Numero"
                  />
                </div>
                <div className="right-div w-full">
                  <label
                    htmlFor="complement"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    Complemento
                  </label>
                  <input
                    type="text"
                    {...register("complement")}
                    className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                    placeholder="Digitar Complemento"
                  />
                </div>
              </div>
              <span className="text-gray-900 pb-4">Tipo de conta</span>
              <div className="my-4">
                <label className="mr-4">
                  <input
                    type="radio"
                    {...register("is_seller", { required: "Role is required" })}
                    value="announcer"
                    className="mr-2"
                  />
                  Anunciante
                </label>
                <label>
                  <input
                    type="radio"
                    {...register("is_seller", { required: "Role is required" })}
                    value="buyer"
                    className="mr-2"
                  />
                  Comprador
                </label>
              </div>
              <div className="mb-4 mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Senha
                </label>
                <input
                  type="text"
                  {...register("password")}
                  className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                  placeholder="Digite a Senha"
                />
              </div>
              <div className="mb-4 mt-4">
                <label
                  htmlFor="confirm_password"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Confirme a senha
                </label>
                <input
                  type="text"
                  {...register("confirm_password")}
                  className="block border p-2 w-full placeholder-semibold::placeholder focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light::placeholder"
                  placeholder="Digite a Senha"
                />
              </div>
              <button className="block w-full bg-brand-brand2 p-4 rounded-lg text-white tracking-wider">
                Finalizar Cadastro
              </button>
            </form>
          </div>
        </div>
        <PageFooter />
      </div>
    </>
  );
}

export default register;
