import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import axiosApi from "@/services/api";
import React from "react";

function newcar({ data }: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />
      <div className="container min-w-full flex flex-col items-center bg-grey-7 flex-1 relative">
        <div className="image-container bg-brand-brand1 h-[400px] flex justify-center min-w-full">
          <div className="bg-white w-[90%] self-center h-[90%] rounded-lg flex justify-center shadow-sm md:max-w-[46.875rem] overflow-x-auto ">
            <img
              src={data.images[0].img_url}
              alt="car-photo"
              className="self-center h-[90%] w-[90%] rounded-xl object-cover md:object-contain"
            />
          </div>
        </div>
        <div className="info-container bg-white w-[90%] self-center h-[90%] rounded-lg flex justify-center shadow-sm relative md:max-w-[46.875rem] py-4 mt-[-10px]">
          <span>
            {data.brand} {data.model}
          </span>
        </div>
      </div>
      <PageFooter />
    </div>
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
    revalidate: 60 * 5,
  };
}
