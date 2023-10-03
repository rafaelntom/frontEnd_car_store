import { Inter } from "next/font/google";
import { Lexend } from "next/font/google";
import DropDown from "../components/DropDown";
import CarCard from "../components/CarCard";
import PageFooter from "../components/PageFooter.jsx";
import type { GetServerSideProps } from "next";
import axiosApi from "@/services/api";

export const inter = Inter({ subsets: ["latin"] });
export const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export default function Home({ data }: any) {
  return (
    <>
      <main className={`min-h-screen ${inter.className} `}>
        <header className="flex items-center justify-between p-4 ">
          <h1 className="font-bold text-heading-4 gradient-text">
            Motors <span className="text-heading-6 pl-1">shop</span>
          </h1>

          <div className="hidden md:flex gap-6 items-center">
            <span className="text-grey-2 font-semibold hover:cursor-pointer hover:scale-105 hover:text-gray-950">
              Realizar Login
            </span>
            <span className="text-grey-0 font-semibold py-2 px-3 border-2 rounded-lg hover:cursor-pointer hover:scale-105 hover:bg-grey-6 hover:border-grey-0 transition-all duration-200">
              Cadastrar
            </span>
          </div>
          <DropDown />
        </header>

        {/* Hero Section for the site logo and text */}
        <section className="hero-section relative text-center">
          <img
            src="/bmw.jpg"
            alt="nissan gtr blue car"
            className="max-h-[30vh] object-cover w-full md:max-h-[50vh]"
          />
          <div
            className={`absolute top-[10%] w-full flex items-center text-white tracking-wider flex-col font-bold ${lexend.className}`}
          >
            <h2 className="pb-4 md:text-4xl md:tracking-wider">Motors Shop</h2>
            <span className="text-sm sm:text-lg md:text-2xl">
              A melhor plataforma de anúncios de carros do país
            </span>
          </div>
        </section>

        {/* Main section with all the cards being redered */}
        <section
          className="
        py-16 w-full flex h-full gap-3 overflow-x-auto px-4 scroll-smooth max-w-[1200px] mx-auto
        md:grid md:grid-cols-2 md:auto-cols-min md:px-10 md:gap-8 md:justify-center md:items-center
        lg:grid-cols-3"
        >
          <CarCard announcements={data} />
          <CarCard announcements={data} />
          <CarCard announcements={data} />
          <CarCard announcements={data} />
          <CarCard announcements={data} />
        </section>
        <PageFooter />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axiosApi.get("/announcements");

  return {
    props: { data: response.data },
  };
}
