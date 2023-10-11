import React, { useContext, useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import axiosApi from "@/services/api";
import { useAuth } from "../../hooks/useAuth";
import { inter, lexend } from "../index";
import CarCardProfile from "../../components/CarCardProfile";
import { ModalContext } from "../../context/modalContext";

function UserPage({ currentUserAnnouncements, currentPageUser }) {
  const { decodedToken } = useAuth();
  const [profileOwner, setProfileOwner] = useState(false);
  const { setCreateAnnouncementModal } = useContext(ModalContext);

  useEffect(() => {
    if (
      decodedToken &&
      currentPageUser &&
      Number(decodedToken.sub) === Number(currentPageUser.id)
    ) {
      setProfileOwner(true);
    } else {
      setProfileOwner(false);
    }
  }, [decodedToken, currentPageUser]);

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

      <section className="main-container flex-1 bg-grey-7 flex flex-col items-center mb-10 md:mb-0">
        <div className="top-page-container w-full relative flex flex-col items-center">
          <div className="bg-brand-brand1 w-full min-h-[19.25rem]"></div>
          <div className="user-container bg-white w-[85%] absolute top-[25%] rounded-lg py-10 px-7 flex flex-col max-w-[1440px] animate-slideDown">
            <span
              className={`bg-brand-brand1 rounded-[50%] px-11 py-10 mb-6 text-white w-fit text-[36px] 
            `}
            >
              {currentPageUser ? getInitials(currentPageUser?.name) : ""}
            </span>
            <div
              className={`name-is_announcer flex gap-4 w-fit items-center justify-between ${inter.className}`}
            >
              <h3 className="font-semibold">
                {currentPageUser ? currentPageUser.name : "Empty"}
              </h3>
              <span className="bg-brand-brand4 py-1 px-2 self-center rounded-lg text-brand-brand1 font-normal">
                {currentPageUser && currentPageUser.is_seller
                  ? "Anunciante"
                  : "Comprador"}
              </span>
            </div>
            <span className="pt-4 w-fit">
              {currentPageUser ? currentPageUser.description : ""}
            </span>
            {currentPageUser && currentPageUser.is_seller ? (
              <span
                onClick={() => setCreateAnnouncementModal(true)}
                className="border-brand-brand1 cursor-pointer border w-fit px-4 py-2 mt-4 rounded-lg text-brand-brand1 font-semibold hover:bg-brand-brand2 hover:text-white transition-all duration-200"
              >
                Criar anuncio
              </span>
            ) : null}
          </div>
        </div>
        <div className="announcement-section w-full mt-[195px] md:mt-[120px]">
          <div className="max-w-[1440px] px-4 py-8 mx-auto text-heading-5 flex flex-col animate-slideUp">
            <h3 className="font-semibold">Anúncios</h3>
            <section
              className="
        pt-10 pb-10 w-full flex h-full gap-3 overflow-x-auto px-4 scroll-smooth max-w-[1440px] mx-auto
        md:grid md:grid-cols-2 md:auto-cols-min md:px-10 md:gap-10 md:justify-center md:items-center md:pb-20
        lg:grid-cols-3 2xl:grid-cols-4"
            >
              {currentUserAnnouncements.length > 0 ? (
                currentUserAnnouncements.map((announcement, index) => (
                  <CarCardProfile
                    key={index}
                    announcement={announcement}
                    edit={profileOwner}
                  />
                ))
              ) : (
                <div
                  className={`${lexend.className} flex w-full justify-center text-grey-3 text-center text-2xl font-light pt-24 md:col-span-2 lg:col-span-3`}
                >
                  <h4>Nenhum anúncio foi encontrado...</h4>
                </div>
              )}
            </section>
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

  try {
    const response = await axiosApi.get(`/announcements/user/${user_id}`);
    const responseUser = await axiosApi.get(`/users/${user_id}`);
    const currentUserAnnouncements = response.data;
    const currentPageUser = responseUser.data;

    return {
      props: {
        currentUserAnnouncements,
        currentPageUser,
      },
    };
  } catch (error) {
    const errorMessage =
      error.response?.data.message || "An unknown error occurred";
    console.error("Error fetching data:", errorMessage);

    return {
      redirect: {
        destination: `/error?message=${encodeURIComponent(errorMessage)}`,
        permanent: false,
      },
    };
  }
}
