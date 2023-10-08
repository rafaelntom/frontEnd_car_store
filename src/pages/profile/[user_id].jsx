import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import axiosApi from "@/services/api";
import { useAuth } from "../../hooks/useAuth";
import { inter, lexend } from "../index";
import CarCard from "../../components/CarCard";

function UserPage({ currentUserAnnouncements }) {
  const { decodedToken } = useAuth();

  function getInitials(name) {
    const names = name.split(" ");
    const initials = names
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
    return initials;
  }

  function shortenDescription(description) {
    if (description.length <= 125) {
      return description;
    } else {
      return description.substring(0, 125 - 3) + "...";
    }
  }

  return (
    <div className={`flex flex-col min-h-screen ${lexend.className}`}>
      <PageHeader />

      <section className="main-container flex-1 bg-grey-6 flex flex-col items-center mb-10 md:mb-0">
        <div className="top-page-container w-full relative flex flex-col items-center">
          <div className="bg-brand-brand1 w-full min-h-[19.25rem]"></div>
          <div className="user-container bg-white w-[85%] absolute top-[25%] rounded-lg py-10 px-7 flex flex-col max-w-[1440px] animate-slideDown">
            <span
              className={`bg-brand-brand1 rounded-full px-11 py-10 mb-6 text-white w-fit text-[36px] 
            `}
            >
              {decodedToken ? getInitials(decodedToken?.name) : ""}
            </span>
            <div
              className={`name-is_announcer flex gap-4 w-fit items-center justify-between ${inter.className}`}
            >
              <h3 className="font-semibold">
                {decodedToken ? decodedToken.name : "Empty"}
              </h3>
              <span className="bg-brand-brand4 py-1 px-2 self-center rounded-lg text-brand-brand1 font-normal">
                Anunciante
              </span>
            </div>
            <span className="pt-4 w-fit">
              {shortenDescription(
                "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur ratione, minus ullam autem molestias quam velit placeat aliquid eveniet nostrum quos tempora sit earum iusto! Optio quas placeat fugit libero perspiciatis nemo natus? Quam, recusandae. Veritatis distinctio facilis illo quas autem accusantium quo dolorum explicabo corrupti ullam omnis, error suscipit ut voluptatem provident eos repudiandae neque? Consectetur ad, asperiores eaque soluta sit aliquam, aspernatur ipsam reiciendis, voluptas culpa illo similique voluptates officia nesciunt corrupti a. Deserunt facilis error maiores aspernatur exercitationem ratione ut, totam quas dicta, id atque nobis optio esse impedit saepe illum recusandae dolores nemo officia ex repellat provident! Expedita aspernatur inventore eveniet alias provident, repellat totam iste blanditiis minima adipisci dolores nobis suscipit sunt, aperiam numquam."
              )}
            </span>
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
                  <CarCard
                    key={index}
                    announcement={announcement}
                    edit={true}
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
