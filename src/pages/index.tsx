import { Inter } from "next/font/google";
import { Lexend } from "next/font/google";
import CarCard from "../components/CarCard";
import PageFooter from "../components/PageFooter.jsx";
import axiosApi from "@/services/api";
import PageHeader from "@/components/PageHeader";

export const inter = Inter({ subsets: ["latin"] });
export const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export default function Home({ data }: any) {
  return (
    <>
      <main className={`min-h-screen ${inter.className} `}>
        <PageHeader />

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
            <span className="text-sm sm:text-lg md:text-2xl md:bg-[#153356] px-2 py-1 rounded-2xl">
              A melhor plataforma de{" "}
              <span className="text-amber-300 rounded-3xl font-extrabold">
                anúncios de carros
              </span>{" "}
              do país
            </span>
          </div>
        </section>

        {/* Main section with all the cards being redered */}
        <section
          className="
        pt-10 pb-5 w-full flex h-full gap-3 overflow-x-auto px-4 scroll-smooth max-w-[1200px] mx-auto
        md:grid md:grid-cols-2 md:auto-cols-min md:px-10 md:gap-8 md:justify-center md:items-center md:pb-10
        lg:grid-cols-3"
        >
          {data.length > 0 ? (
            data.map((announcement: any, index: number) => (
              <CarCard key={index} announcement={announcement} />
            ))
          ) : (
            <div
              className={`${lexend.className} flex w-full justify-center text-grey-3 text-center text-2xl font-light pt-24 md:col-span-2 lg:col-span-3 md:`}
            >
              <h4>Nenhum anúncio foi encontrado...</h4>
            </div>
          )}
        </section>
      </main>
      <PageFooter />
    </>
  );
}

export async function getServerSideProps() {
  const response = await axiosApi.get("/announcements");

  return {
    props: { data: response.data },
  };
}
