import { lexend } from "@/pages";
import React from "react";
import config from "../../tailwind.config";

function CarCard({ announcements }) {
  const currentAnnouncement = announcements[0];

  const truncatedDescription =
    currentAnnouncement.description.length > 100
      ? `${currentAnnouncement.description.slice(0, 100 - 1)}...`
      : currentAnnouncement.description;

  function getInitials(name) {
    const names = name.split(" ");
    const initials = names.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials;
  }

  function getRandomColor() {
    const colors = Object.values(config.theme.extend.colors.randomprofile);
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <div
      className="
    rounded-xl border-white 
    min-w-[312px] max-w-[320px] h-[315px] max-h-[340px] 
    flex flex-col p-1 group 
    hover:cursor-pointer hover:scale-[1.03] transition-all duration-100 
    md:justify-center md:mx-auto"
    >
      <div className="image-container bg-grey-5 border-2 border-grey-5 w-full flex justify-center rounded-lg group-hover:border-2 group-hover:border-brand-brand1">
        <img
          src={currentAnnouncement.images[0]?.img_url}
          className="max-w-[200px] min-w-[195px]"
        />
      </div>

      {/* Info bellow the car image */}
      <div className="info-container py-2 px-1 flex flex-col gap-3">
        <span className={`${lexend.className} font-semibold text-grey-1`}>
          {currentAnnouncement.brand} - {currentAnnouncement.model}
        </span>

        <span className="text-text-body-2 text-grey-2">
          {truncatedDescription}
        </span>

        {/* User description */}
        <section className="user-cotnainer ">
          <span
            className={`bg-brand-brand1 rounded-full p-[5px] w-max text-white text-text-body-2`}
          >
            {getInitials(currentAnnouncement.user.name)}
          </span>
          <span className="pl-2 text-grey-2 text-text-body-2">
            {currentAnnouncement.user.name}
          </span>
        </section>

        {/* Car information */}
        <section className="carInfo-container flex justify-between">
          <div className="year-milage flex gap-2">
            <span className="text-text-body-2 text-brand-brand1 bg-brand-brand4 font-medium w-fit rounded p-1">
              {currentAnnouncement.milage} {" KM"}
            </span>
            <span className="text-text-body-2 text-brand-brand1 bg-brand-brand4 font-medium w-fit rounded p-1">
              {currentAnnouncement.year}
            </span>
          </div>
          <span className="self-start text-grey-2 font-semibold">
            R$ {currentAnnouncement.price}
          </span>
        </section>
      </div>
    </div>
  );
}

export default CarCard;
