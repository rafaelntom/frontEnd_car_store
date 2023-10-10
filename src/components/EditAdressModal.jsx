import React, { useContext } from "react";
import { ModalContext } from "../context/modalContext";
import { lexend } from "@/pages";
import { useForm } from "react-hook-form";
import { GrFormClose } from "react-icons/gr";
import FormInput from "./FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddressSchema } from "@/schemas/adress.schema";
import axiosApi from "@/services/api";
import { destroyCookie } from "nookies";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";

const EditAdressModal = () => {
  const { decodedToken } = useAuth();
  let userId = "";

  if (decodedToken) {
    userId = decodedToken.sub;
  }
  const { adressModal, setAdressModal } = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: zodResolver(AddressSchema) });

  const watchedFields = watch([
    "zip_code",
    "state",
    "city",
    "street",
    "number",
    "complement",
  ]);

  const isAnyFieldFilled = Object.values(watchedFields).some(
    (fieldValue) => fieldValue
  );

  const handleFormSubmit = async (formData) => {
    const filteredData = {};

    for (const key in formData) {
      formData[key] = formData[key].trim();
      if (formData[key] !== "") {
        filteredData[key] = formData[key];
      }
    }

    const newUserAdress = {
      address: filteredData,
    };

    try {
      await axiosApi.patch(`/users/${userId}`, newUserAdress);
      toast.success("Dados alterados com sucesso", {
        autoClose: 2000,
      });
      setAdressModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {adressModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${lexend.className}`}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-md z-50 max-w-[35.5rem] w-[100%] flex flex-col animate-slideUp">
            <div className="modal-header flex w-full justify-between pb-4 items-center">
              <h4>Editar enedereço</h4>
              <GrFormClose
                className="text-3xl mb-2 cursor-pointer hover:scale-[1.05]"
                onClick={() => setAdressModal(false)}
              />
            </div>
            <span>Informações de endereço</span>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <FormInput
                label="CEP"
                name="zip_code"
                register={register}
                errors={errors}
                placeholder="00000-000"
              />
              <div className="state-city flex justify-between">
                <FormInput
                  label="Estado"
                  name="state"
                  register={register}
                  errors={errors}
                  placeholder="Ex: SP"
                />
                <FormInput
                  label="Cidade"
                  name="city"
                  register={register}
                  errors={errors}
                  placeholder="Ex: Valinhos"
                />
              </div>
              <FormInput
                label="Rua"
                name="street"
                register={register}
                errors={errors}
                placeholder="Rua Copacabana"
              />
              <div className="number-complement flex justify-between">
                <FormInput
                  label="Número"
                  name="number"
                  register={register}
                  errors={errors}
                  placeholder="202"
                />
                <FormInput
                  label="Complemento"
                  name="complement"
                  register={register}
                  errors={errors}
                  placeholder="Apartamento 5"
                />
              </div>
              <div className="btns w-full flex justify-end gap-2 mt-5">
                <button
                  className="bg-grey-6 py-2 px-3 border rounded-lg text-grey-2
                hover:scale-105"
                  onClick={() => setAdressModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className={`bg-brand-brand2 text-white py-2 px-3 border rounded-lg ${
                    !isAnyFieldFilled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-105"
                  }
                  `}
                  disabled={!isAnyFieldFilled}
                >
                  Salvar alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditAdressModal;
