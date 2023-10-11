import React, { useContext } from "react";
import { ModalContext } from "../context/modalContext";
import { lexend } from "@/pages";
import { GrFormClose } from "react-icons/gr";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import axiosApi from "@/services/api";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAnnouncementSchema } from "@/schemas/announcement.schema";

const EditAnnouncementModal = () => {
  const { createAnnouncementModal, setCreateAnnouncementModal } =
    useContext(ModalContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({ resolver: zodResolver(CreateAnnouncementSchema) });

  const watchedFields = watch([
    "brand",
    "model",
    "year",
    "fuel_type",
    "milage",
    "color",
    "price_fipe",
    "price",
    "description",
    "img_url",
    "img_url_1",
    "img_url_2",
  ]);

  const isAnyFieldFilled = Object.values(watchedFields).some(
    (fieldValue) => fieldValue
  );

  const handleFormSubmit = async (formData) => {
    const filteredData = {};

    const images = [];

    if (formData.img_url) {
      images.push({ img_url: formData.img_url });
      formData.img_url = "";
    }

    for (let i = 0; i < 3; i++) {
      const imgKey = `img_url_${i}`;
      if (formData[imgKey] && formData[imgKey].trim() !== "") {
        images.push({ img_url: formData[imgKey] });
      }
    }

    for (const key in formData) {
      if (!key.startsWith("img_url_")) {
        formData[key] = formData[key].trim();
        if (formData[key] !== "") {
          filteredData[key] = formData[key];
        }
      }
    }

    if (images.length > 0) {
      filteredData.images = images;
    }

    console.log(filteredData);

    try {
      await axiosApi.post(`/announcements`, filteredData);
      toast.success("Anuncio criado com sucesso!", {
        autoClose: 1500,
      });
      setCreateAnnouncementModal(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {createAnnouncementModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${lexend.className}`}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-md z-50 max-w-[35.5rem] w-[100%] flex flex-col animate-slideUp max-h-[90%] overflow-y-auto">
            <div className="modal-header flex w-full justify-between pb-4 items-center">
              <h4 className="text-xl text-grey-1">Criar Anúncio</h4>
              <GrFormClose
                className="text-3xl mb-2 cursor-pointer hover:scale-[1.05]"
                onClick={() => setCreateAnnouncementModal(false)}
              />
            </div>
            <span>Informações do veículo</span>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                  name="year"
                  register={register}
                  errors={errors}
                  placeholder="2018"
                />
                <FormInput
                  label="Combustível"
                  name="fuel_type"
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
                  name="color"
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
                className="block text-sm text-grey-1 mt-3 mb-1"
              >
                Descrição
              </label>
              <textarea
                {...register("description")}
                className="block border p-2 w-full focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light resize-none placeholder:font-light"
                placeholder="Descreva o seu carro"
              />
              <FormInput
                label="Imagem de capa"
                name="img_url"
                register={register}
                errors={errors}
                placeholder="https://image.url"
                type="URL"
              />
              <FormInput
                label="1ª Imagem da galeria"
                name="img_url_1"
                register={register}
                errors={errors}
                placeholder="https://image.url"
                type="URL"
              />
              <FormInput
                label="2ª Imagem da galeria"
                name="img_url_2"
                register={register}
                errors={errors}
                placeholder="https://image.url"
                type="URL"
              />
              <div className="btns-container flex flex-wrap w-full gap-4 justify-end pt-2">
                <button
                  className="bg-grey-6  text-grey-2 hover:bg-grey-2 hover:text-white py-2 px-3 rounded-lg font-medium hover:scale-105 transition-all duration-150"
                  onClick={() => setEditAnnouncementModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className={`bg-brand-brand2  text-white py-2 px-3 rounded-lg font-medium hover:scale-105 transition-all duration-150 ${
                    !isAnyFieldFilled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-105"
                  }`}
                  disabled={!isAnyFieldFilled}
                >
                  Criar Anúncio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditAnnouncementModal;
