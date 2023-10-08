import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import axiosApi from "@/services/api";
import { useAuth } from "../../hooks/useAuth";
import { lexend } from "../index";
import { useRouter } from "next/router";

function UserPage({ currentUserAnnouncements }) {
  const { decodedToken, token } = useAuth();

  function getInitials(name) {
    const names = name.split(" ");
    const initials = names
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
    return initials;
  }

  return (
    <div className={`flex flex-col min-h-screen ${lexend.className}`}>
      <PageHeader />

      <section className="main-container flex-1 bg-grey-5">
        <div className="top-page-container w-full relative flex flex-col items-center">
          <div className="bg-brand-brand1 w-full min-h-[19.25rem]"></div>
          <div className="user-container bg-white w-[85%] absolute bottom-[-35%] rounded-lg py-10 px-7 flex flex-col max-w-[1440px]">
            <span
              className={`bg-brand-brand1 rounded-full p-12 text-white text-text-body-2 w-fit text-4xl mb-6`}
            >
              {decodedToken ? getInitials(decodedToken?.name) : "No token"}
            </span>
            <div className="name-is_announcer flex gap-4">
              <h3>{decodedToken ? decodedToken.name : "Empty"}</h3>
              <span>Anunciante</span>
            </div>
          </div>
        </div>
      </section>
      <PageFooter />
    </div>
  );
}

export default UserPage;

export async function getServerSideProps(context) {
  const { user_id } = context.params;
  console.log(user_id);

  try {
    const response = await axiosApi.get(`/announcements/user/${user_id}`);
    const currentUserAnnouncements = response.data;

    return {
      props: {
        currentUserAnnouncements,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }
}
