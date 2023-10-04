import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import axiosApi from "@/services/api";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function newcar({ data }: any) {
  return (
    <>
      <PageHeader />
      <div className="container min-w-full bg-red-50">
        <div className="image-container bg-brand-brand1 h-[400px] flex justify-center min-w-full">
          <div className="bg-white w-[90%] self-center h-[90%] rounded-lg flex justify-center shadow-sm relative md:max-w-[46.875rem] overflow-x-auto ">
            <img
              src={data.images[0].img_url}
              alt="car-photo"
              className="self-center h-[90%] w-[90%] rounded-xl object-cover md:object-contain"
            />
          </div>
        </div>
        <div className="info-container"></div>
      </div>
      <PageFooter />
    </>
  );
}

export default newcar;

export async function getStaticPaths() {
  const response = await axiosApi.get("/announcements");
  const announcements = response.data;

  const paths = announcements.map((announcement: any) => ({
    params: { announcement_id: announcement.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { announcement_id } = params;
  const response = await axiosApi.get(`/announcements/${announcement_id}`);
  return {
    props: { data: response.data },
    revalidate: 60, // Re-generate the page every 60 seconds
  };
}
