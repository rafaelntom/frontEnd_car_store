import { lexend } from "@/pages";
import { Truculenta } from "next/font/google";
import React from "react";

function CarCard({ announcements }) {
  const currentAnnouncement = announcements[3];
  console.log(currentAnnouncement);

  // {
  // 	"id": 5,
  // 	"brand": "Toyota",
  // 	"model": "Camry",
  // 	"year": "2022",
  // 	"fuel_type": "Gasoline",
  // 	"milage": "25000",
  // 	"color": "Silver",
  // 	"price_fipe": "45000.00",
  // 	"price": "48000.00",
  // 	"description": "This is a great car!",
  // 	"user": {
  // 		"id": 1,
  // 		"name": "John Doe",
  // 		"email": "johndoe@example.com"
  // 	},
  // 	"images": [
  // 		{
  // 			"img_url": "https://www.nissan-cdn.net/content/dam/Nissan/br/site/veiculos/novo-kicks-24/thumbs/Sense-Silver.png"
  // 		}
  // 	]
  // }
  const truncatedDescription =
    currentAnnouncement.description.length > 100
      ? `${currentAnnouncement.description.slice(0, 100 - 1)}...`
      : currentAnnouncement.description;

  function getInitials(name) {
    const names = name.split(" ");
    const initials = names.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials;
  }

  return (
    <div className="rounded-xl w-[312px] max-w-[320px] flex flex-col group hover:cursor-pointer">
      <div className="image-container bg-grey-5 border-2 border-grey-5 w-full flex justify-center rounded-lg group-hover:border-2 group-hover:border-brand-brand1">
        <img
          src={currentAnnouncement.images[0].img_url}
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
          <span className="bg-purple-500 rounded-full p-[5px] w-max text-white text-text-body-2">
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
