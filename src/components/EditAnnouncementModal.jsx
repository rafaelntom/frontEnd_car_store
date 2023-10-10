import React, { useContext } from "react";
import { ModalContext } from "../context/modalContext";
import { lexend } from "@/pages";
import { GrFormClose } from "react-icons/gr";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";

const EditAnnouncementModal = () => {
  const { editAnnouncementModal, setEditAnnouncementModal } =
    useContext(ModalContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      {editAnnouncementModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${lexend.className}`}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-md z-50 max-w-[35.5rem] w-[100%] flex flex-col animate-slideUp">
            <div className="modal-header flex w-full justify-between pb-4 items-center">
              <h4>Editar anúncio</h4>
              <GrFormClose
                className="text-3xl mb-2 cursor-pointer hover:scale-[1.05]"
                onClick={() => setEditAnnouncementModal(false)}
              />
            </div>
            <span>Informações do veículo</span>
            <form action="">
              <FormInput
                label="Marca"
                name="brand"
                register={register}
                errors={errors}
                placeholder="Ex: Chevrolet"
              />
              <FormInput
                label="Modelo"
                name="model"
                register={register}
                errors={errors}
                placeholder="Ex: Onix 1.6 Turbo"
              />
              <div className="year-fuel flex justify-between items-center">
                <FormInput
                  label="Ano"
                  name="Year"
                  register={register}
                  errors={errors}
                  placeholder="2018"
                />
                <FormInput
                  label="Combustível"
                  name="fuel"
                  register={register}
                  errors={errors}
                  placeholder="Ex: Gasolina"
                />
              </div>
              <div className="mileage-color flex justify-between items-center">
                <FormInput
                  label="Quilometragem"
                  name="milage"
                  register={register}
                  errors={errors}
                  placeholder="30.000"
                />
                <FormInput
                  label="Cor"
                  name="Color"
                  register={register}
                  errors={errors}
                  placeholder="Branco"
                />
              </div>
              <div className="fipe-price flex justify-between items-center">
                <FormInput
                  label="Preço Tabela Fipe"
                  name="price_fipe"
                  register={register}
                  errors={errors}
                  placeholder="R$ 30.000"
                />
                <FormInput
                  label="Preço"
                  name="price"
                  register={register}
                  errors={errors}
                  placeholder="R$ 48.000"
                />
              </div>
              <label
                htmlFor="description"
                className="block text-sm text-gray-600 mt-3 mb-1"
              >
                Descrição
              </label>
              <textarea
                {...register("description")}
                className="block border p-2 w-full focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light resize-none placeholder:font-light"
                placeholder="Descreva o seu carro"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditAnnouncementModal;
