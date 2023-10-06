import { useForm } from "react-hook-form";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import React from "react";
import { lexend } from ".";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginData,
  LoginSchema,
  RegisterData,
  RegisterSchema,
} from "@/schemas/user.schema";
import FormInput from "../components/FormInput";

function register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

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
          <div className=" bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-[565px] animate-slideUp">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                label="Nome"
                name="name"
                register={register}
                errors={errors}
                placeholder="Ex: Rafael Tomazini"
              />
              <FormInput
                label="Email"
                name="email"
                register={register}
                errors={errors}
                placeholder="Ex: Ex: teste@mail.com"
              />
              <FormInput
                label="CPF"
                name="cpf"
                register={register}
                errors={errors}
                placeholder="000.000.000-00"
              />
              <FormInput
                label="Celular"
                name="phone"
                register={register}
                errors={errors}
                placeholder="(DDD) 00000-0000"
              />
              <FormInput
                label="Data de nascimento"
                name="birth_date"
                register={register}
                errors={errors}
                placeholder="mm/dd/yyyy"
                type="date"
              />
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
              <FormInput
                label="CEP"
                name="cep"
                register={register}
                errors={errors}
                placeholder="00000-000"
              />

              <div className="mb-4 flex justify-around gap-8">
                <div className="left-div w-full">
                  <FormInput
                    label="Estado"
                    name="state"
                    register={register}
                    errors={errors}
                    placeholder="Ex: RJ"
                  />
                </div>
                <div className="right-div w-full">
                  <FormInput
                    label="Cidade"
                    name="city"
                    register={register}
                    errors={errors}
                    placeholder="Digite sua cidade"
                  />
                </div>
              </div>

              <FormInput
                label="Rua"
                name="street"
                register={register}
                errors={errors}
                placeholder="Ex: Rua Fernando Guimarães"
              />

              <div className="mb-4 flex justify-around gap-8">
                <div className="left-div w-full">
                  <FormInput
                    label="Numero"
                    name="number"
                    register={register}
                    errors={errors}
                    placeholder="Digitar numero"
                  />
                </div>
                <div className="right-div w-full">
                  <FormInput
                    label="Complemento"
                    name="complement"
                    register={register}
                    errors={errors}
                    placeholder="Digitar complemento"
                  />
                </div>
              </div>
              <span className="text-gray-900 pb-4">Tipo de conta</span>
              <div className="my-4">
                <label className="mr-4">
                  <input
                    type="radio"
                    {...register("is_seller", {
                      required: "Selecione uma opção!",
                    })}
                    value="announcer"
                    className="mr-2"
                  />
                  Anunciante
                </label>
                <label>
                  <input
                    type="radio"
                    {...register("is_seller", {
                      required: "Selecione uma opção!",
                    })}
                    value="buyer"
                    className="mr-2"
                  />
                  Comprador
                </label>
              </div>
              <FormInput
                label="Senha"
                name="password"
                register={register}
                errors={errors}
                placeholder="Digite sua senha"
                type="password"
              />
              <FormInput
                label="Confirme a senha"
                name="confirm_password"
                register={register}
                errors={errors}
                placeholder="Digite sua senha"
                type="password"
              />

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
