import { inter } from "@/pages";
import { CommentData } from "@/schemas/announcement.schema";
import React from "react";

function Comment({ data }: { data: CommentData }) {
  function getInitials(name: string) {
    const names = name.split(" ");
    const initials = names
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
    return initials;
  }

  function formatDate(dateString: string) {
    const currentDate = new Date();
    const inputDate = new Date(dateString);

    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (days > 1) {
      return `há ${days} dias`;
    } else if (days === 1) {
      return `há 1 dias`;
    } else {
      return `Hoje`;
    }
  }

  return (
    <div
      className={`comment-container flex flex-col gap-4 w-[100%] justify-center ${inter.className}`}
    >
      <div className="comment-header flex gap-3 items-center self-start">
        <span className="bg-brand-brand1 p-2 rounded-[50%] text-white">
          {getInitials(data.user.name)}
        </span>
        <span className="font-medium">{data.user.name}</span>

        <span className="text-grey-3">
          &#x2022; {formatDate(data.created_at)}
        </span>
      </div>

      <p className="text-justify">{data.description}</p>
    </div>
  );
}

export default Comment;
