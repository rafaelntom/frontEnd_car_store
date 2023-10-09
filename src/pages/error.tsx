import { useRouter } from "next/router";
import React from "react";
import { lexend } from ".";
import { BiSolidError } from "react-icons/bi";
import Link from "next/link";

function Error() {
  const router = useRouter();
  const { message } = router.query;

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${lexend.className} bg-grey-6`}
    >
      <div className="center-container bg-feedback-alert1 h-1/2 p-8 max-w-[500px] rounded-lg text-white flex flex-col items-center gap-10 shadow-lg">
        <div className="top-message flex justify-between items-center min-w-full flex-col gap-2">
          <BiSolidError className="text-5xl" />
          <h2 className="text-3xl font-semibold text-center">
            Oops, ocorreu um erro!
          </h2>
        </div>
        <p className="text-2xl  text-feedback-alert2">
          {message || "Erro desconhecido."}
        </p>
        <Link
          href="/"
          className="bg-feedback-alert3 text-grey-1 p-2 rounded-lg hover:scale-105 transition-all duration-150"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}

export default Error;
