import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import axiosApi from "@/services/api";
import React, { useContext, useEffect } from "react";
import { lexend } from "..";
import {
  CommentData,
  CreateCommentSchema,
  SingleAnnouncementData,
} from "@/schemas/announcement.schema";
import Link from "next/link";
import Comment from "../../components/Comment";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function newcar({ data }: { data: SingleAnnouncementData }) {
  const { decodedToken }: { decodedToken: any } = useAuth();
  const router = useRouter();
  const announcementId = router.query.announcement_id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentData>({ resolver: zodResolver(CreateCommentSchema) });

  async function onSubmit(data: CommentData) {
    console.log(data);
    try {
      await axiosApi.post(`/comments/announcement/${announcementId}`, data);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  }

  useEffect(() => {}, [data]);

  function formatPrice(price: string) {
    const cleanPrice = price.replace(/[^\d]/g, "");

    const integerPart = cleanPrice.slice(0, -2);
    const decimalPart = cleanPrice.slice(-2);

    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    );

    return `R$ ${formattedIntegerPart},${decimalPart}`;
  }

  function getInitials(name: string) {
    const names = name.split(" ");
    const initials = names
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
    return initials;
  }

  let announcementMainImage = data.images[0].img_url;

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />
      <div
        className={`container min-w-full flex flex-col items-center bg-grey-7 flex-1 ${lexend.className} pb-40 md:pb-20`}
      >
        {/* Container da imagem do anuncio */}
        <div className="image-container bg-brand-brand1 h-[400px] flex justify-center min-w-full">
          <div className="bg-white w-[90%] self-center h-[90%] rounded-lg flex justify-center shadow-sm md:max-w-[46.875rem] overflow-x-auto ">
            <img
              src={announcementMainImage}
              alt="car-photo"
              className="self-center h-[90%] w-[90%] rounded-xl object-cover md:object-contain"
            />
          </div>
        </div>

        {/* Container com preço, ano KM e comprar */}
        <div
          className={`info-container flex flex-col bg-white w-[90%] self-center h-[90%] rounded-lg justify-center shadow-sm relative md:max-w-[46.875rem] py-4 px-3 mt-[-10px] gap-8`}
        >
          <span className="self-start text-grey-1 font-semibold text-heading-6">
            {data.brand} {data.model}
          </span>
          <div className="mileage-year flex gap-4">
            <span className="bg-brand-brand4 text-brand-brand1 rounded-lg p-2 font-medium">
              {data.year}
            </span>
            <span className="bg-brand-brand4 text-brand-brand1 rounded-lg p-2 font-medium">
              {data.milage} KM
            </span>
          </div>
          <span className="font-medium w-fit text-heading-6">
            {formatPrice(data.price)}
          </span>
          <button className="w-fit bg-brand-brand1 rounded-lg py-2 px-6 text-white">
            Comprar
          </button>
        </div>

        {/* Container da descrição do carro */}
        <div className="bg-white w-[90%] self-center h-[90%] rounded-lg flex flex-col justify-start shadow-sm md:max-w-[46.875rem] py-4 mt-[15px] px-3 gap-8">
          <h4 className="text-heading-6 font-semibold text-grey-1">
            Descrição
          </h4>
          <p className="text-grey-2">{data.description}</p>
        </div>

        {/* Container com imagens do anuncio */}
        <div
          className="bg-white w-[90%] py-4 mt-[15px] px-3 gap-8 self-center h-[90%] rounded-lg flex flex-col justify-center shadow-sm
          md:max-w-[46.875rem] "
        >
          <h5 className="text-heading-6 font-semibold text-grey-1">Fotos</h5>
          <div className="grid grid-cols-3 gap-3">
            {data.images.map((image, index) => {
              return (
                <img
                  src={image.img_url}
                  className="w-full rounded-lg hover:scale-[1.02] cursor-pointer max-w-[15rem]"
                  key={index}
                />
              );
            })}
          </div>
        </div>

        {/* Container do perfil do anunciante  */}
        <div
          className="bg-white w-[90%] py-4 mt-[15px] px-3 gap-8 self-center h-[90%] rounded-lg flex flex-col justify-center shadow-sm items-center
          md:max-w-[46.875rem] "
        >
          <span className="font-semibold bg-brand-brand1 text-white rounded-[50%] p-7 text-[30px] mt-4">
            {getInitials(data.user.name)}
          </span>
          <span className="text-grey-1 text-heading-6 font-semibold">
            {data.user.name}
          </span>
          <span className="text-grey-2">{data.user.description}</span>
          <Link
            href={`/profile/${data.user.id}`}
            className="bg-black py-2 px-4 text-white rounded-lg cursor-pointer hover:bg-gray-800"
          >
            Ver todos anuncios
          </Link>
        </div>

        {/* Container dos comentarios  */}
        <div
          className="bg-white w-[90%] py-4 mt-[15px] px-6 gap-8 self-center h-[90%] rounded-lg flex flex-col justify-center shadow-sm items-center
          md:max-w-[46.875rem] "
        >
          <h6 className="text-heading-6 font-semibold text-grey-1 self-start">
            Comentarios
          </h6>
          {data.comments.map((comment) => {
            return <Comment key={comment.id} data={comment} />;
          })}
        </div>

        {/* Container para criar um comentario */}
        {decodedToken ? (
          <div
            className="bg-white w-[90%] py-4 mt-[15px] px-3 gap-8 self-center h-[90%] rounded-lg flex flex-col justify-center shadow-sm items-start
          md:max-w-[46.875rem] "
          >
            <div className="user-info flex gap-3 items-center">
              <span className="bg-brand-brand1 p-2 rounded-[50%] text-white">
                {getInitials(decodedToken.name)}
              </span>
              <span className="font-medium">{decodedToken.name}</span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-3"
            >
              <textarea
                {...register("description")}
                className="block border p-2 w-full placeholder-semibold focus:outline-brand-brand2 focus:outline-2 focus:placeholder-light resize-none mb-2"
                placeholder="Insira um comentario"
              />

              {errors.description && (
                <span className="text-sm text-feedback-alert1">
                  {errors.description.message}
                </span>
              )}

              <button className="bg-brand-brand1 py-2 px-3 rounded-lg text-white w-fit">
                Comentar
              </button>
            </form>
          </div>
        ) : null}
        <PageFooter />
      </div>
    </div>
  );
}

export default newcar;

export async function getStaticPaths() {
  const response = await axiosApi.get("/announcements");
  const announcements = response.data;

  const paths = announcements.map((announcement: any) => ({
    params: { announcement_id: announcement.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { announcement_id } = params;

  try {
    const response = await axiosApi.get(`/announcements/${announcement_id}`);

    return {
      props: {
        data: response.data,
      },
      revalidate: 60 * 5,
    };
  } catch (error: any) {
    const errorMessage =
      error.response.data.message || "An unknown error occurred";
    console.error("Error fetching data:", errorMessage);

    return {
      redirect: {
        destination: `/error?message=${encodeURIComponent(errorMessage)}`,
        permanent: false,
      },
    };
  }
}
