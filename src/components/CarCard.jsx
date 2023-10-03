import { lexend } from "@/pages";
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
  // 	"images": [
  // 		{
  // 			"id": 7,
  // 			"img_url": "https://www.nissan-cdn.net/content/dam/Nissan/br/site/veiculos/novo-kicks-24/thumbs/Sense-Silver.png"
  // 		}
  // 	],
  // 	"comments": []
  // }

  console.log(currentAnnouncement);
  return (
    <div className="h-40 max-h-40  rounded-xl border ">
      <div className="image-container bg-grey-5 rounded-t-xl">
        <img
          src={currentAnnouncement.images[0].img_url}
          className="max-w-[200px]"
        />
      </div>
      <div className="info-container p-1">
        <span className={`${lexend.className} font-semibold text-grey-1`}>
          {currentAnnouncement.brand} -
        </span>
        <span className={`${lexend.className} font-semibold text-grey-1`}>
           {currentAnnouncement.model}
        </span>
      </div>
    </div>
  );
}

export default CarCard;
