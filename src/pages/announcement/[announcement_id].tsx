import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import axiosApi from "@/services/api";
import { useRouter } from "next/router";
import React from "react";

function newcar({ data }: any) {
  return (
    <>
      <PageHeader />
      <h1>{data.id}</h1>
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
