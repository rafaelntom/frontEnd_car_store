import { lexend } from "@/pages";
import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import { GrFormClose } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { ModalContext } from "../context/modalContext";
import axiosApi from "@/services/api";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { destroyCookie } from "nookies";

function EditAccountModal() {
  const router = useRouter();
  const { decodedToken } = useAuth();
  let userId = "";

  if (decodedToken) {
    userId = decodedToken.sub;
  }

  const { registerModal, setRegisterModal, toogleRegisterModalOff } =
    useContext(ModalContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (formData) => {
    const filteredData = {};

    for (const key in formData) {
      formData[key] = formData[key].trim();
      if (formData[key] !== "") {
        filteredData[key] = formData[key];
      }
    }

    try {
      await axiosApi.patch(`/users/${userId}`, filteredData);
      destroyCookie(null, "motorshop.token", { path: "/" });

      toast.success("Dados alterados com sucesso! Favor logar novamente.", {
        autoClose: 4000,
      });

      setTimeout(() => {
        setRegisterModal(false);
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {registerModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${lexend.className}`}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="bg-white p-8 rounded-md z-50 max-w-[32.5rem] w-[80%] flex flex-col animate-slideUp">
            <div className="modal-top flex w-full justify-between pb-4 items-center">
              <span>Editar perfil</span>
              <div
                className="cursor-pointer hover:scale-105 transition-all duration-200"
                onClick={toogleRegisterModalOff}
              >
                <GrFormClose className="text-3xl" />
              </div>
            </div>
            <span className="pt-8">Informações pessoais</span>
            <div className="modal-bottom flex flex-col gap-5">
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <FormInput
                  label="Nome"
                  name="name"
                  register={register}
                  errors={errors}
                  placeholder="Ex: Fernando Sanchez"
                />
                <FormInput
                  label="Email"
                  name="email"
                  register={register}
                  errors={errors}
                  placeholder="Ex: novo-email@mail.com"
                />
                <FormInput
                  label="CPF"
                  name="cpf"
                  register={register}
                  errors={errors}
                  placeholder="Ex: 000.000.000-00"
                />
                <FormInput
                  label="Celular"
                  name="phone"
                  register={register}
                  errors={errors}
                  placeholder="Ex: (00) 90000-0000"
                />
                <FormInput
                  label="Data de nascimento"
                  name="birth_date"
                  register={register}
                  errors={errors}
                  type="date"
                />
                <textarea
                  {...register("description")}
                  className="block border p-2 w-full focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light resize-none placeholder:font-normal"
                  placeholder="Insira uma breve descrição sobre você"
                />
                <div className="btns-container flex flex-col min-[420px]:flex-row gap-2">
                  <button
                    onClick={toogleRegisterModalOff}
                    className="text-sm mt-6 flex-1 bg-grey-6 text-grey-2 font-semibold py-2 px-4 rounded
              hover:bg-grey-3 hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-sm mt-6 flex-1 bg-feedback-alert2 text-feedback-alert1 font-semibold py-2 px-4 rounded
              hover:bg-feedback-alert1 hover:text-white"
                  >
                    Excluir Perfil
                  </button>
                  <button
                    className="text-sm mt-6 flex-1 bg-brand-brand1 text-white font-semibold py-2 px-4 rounded
              hover:bg-brand-brand3"
                  >
                    Salvar Alterações
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditAccountModal;
