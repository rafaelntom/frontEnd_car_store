import { inter, lexend } from "@/pages";
import React from "react";
import config from "../../tailwind.config";
import Link from "next/link";

function CarCardProfile({ announcement, edit = false }) {
  const truncatedDescription =
    announcement.description.length > 100
      ? `${announcement.description.slice(0, 100 - 1)}...`
      : announcement.description;

  function getInitials(name) {
    const names = name.split(" ");
    const initials = names
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
    return initials;
  }

  function formatPrice(price) {
    const cleanPrice = price.replace(/[^\d]/g, "");

    const integerPart = cleanPrice.slice(0, -2);
    const decimalPart = cleanPrice.slice(-2);

    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    );

    return `R$ ${formattedIntegerPart},${decimalPart}`;
  }

  return (
    <div
      className={`rounded-xl border-white
      min-w-[312px] max-w-[320px] max-h-[360px]  mb-10
      flex flex-col p-1 group
      hover:cursor-pointer hover:scale-[1.03] transition-all duration-100
      md:justify-center md:mx-auto md:mb-0 ${inter.className}`}
    >
      <Link href={`/announcement/${announcement.id}`}>
        {/* Image container */}
        <div className="image-container bg-grey-5 w-full flex justify-center rounded-lg group-hover:border-2 group-hover:border-brand-brand1">
          <img
            src={announcement.images[0]?.img_url}
            className="max-w-full min-w-full min-h-[120px] max-h-[120px] object-cover rounded-lg"
          />
        </div>

        {/* Info bellow the car image */}
        <div className="info-container py-2 px-1 flex flex-col gap-3">
          <span className={`${lexend.className} font-semibold text-grey-1`}>
            {announcement.brand} - {announcement.model}
          </span>

          <span className="text-text-body-2 text-grey-2">
            {truncatedDescription}
          </span>

          {/* User description */}
          <section className="user-cotnainer ">
            <span
              className={`bg-brand-brand1 rounded-full p-[5px] w-max text-white text-text-body-2`}
            >
              {getInitials(announcement.user.name)}
            </span>
            <span className="pl-2 text-grey-2 text-text-body-2">
              {announcement.user.name}
            </span>
          </section>

          {/* Car information */}
          <section className="carInfo-container flex justify-between">
            <div className="year-milage flex gap-2 items-center flex-1">
              <span className="text-text-body-2 text-brand-brand1 bg-brand-brand4 font-medium w-fit rounded px-2 py-1">
                {announcement.milage} {" KM"}
              </span>
              <span className="text-text-body-2 text-brand-brand1 bg-brand-brand4 font-medium w-fit rounded p-1">
                {announcement.year}
              </span>
            </div>
            <span className="self-start text-grey-2 text-heading-7 font-semibold">
              {formatPrice(announcement.price)}
            </span>
          </section>
        </div>
      </Link>
      {edit ? (
        <div className="edit-buttons text-sm flex gap-4 w-full justify-start px-1 mt-2">
          <span className="border border-black p-1 font-medium px-2 rounded-md hover:bg-grey-2 hover:text-grey-8 hover:border-grey-8">
            Editar
          </span>
          <span className="border border-black p-1 font-medium px-2 rounded-md hover:bg-grey-2 hover:text-grey-8 hover:border-grey-8">
            Ver detalhes
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default CarCardProfile;
