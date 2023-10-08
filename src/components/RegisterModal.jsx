import { AuthContext } from "@/context/authContext";
import { lexend } from "@/pages";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { GrFormClose } from "react-icons/gr";

function RegisterModal() {
  const { setModalVisibility } = useContext(AuthContext);

  const toogleModalOff = () => {
    setModalVisibility(false);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${lexend.className}`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="bg-white p-8 rounded-md z-50 max-w-[32.5rem] w-[80%] flex flex-col animate-slideUp">
        <div className="modal-top flex w-full justify-between pb-4 items-center">
          <h2 className="text-xl mb-4 text-gray-1">Sucesso!</h2>
          <div
            className="cursor-pointer hover:scale-105 transition-all duration-200"
            onClick={toogleModalOff}
          >
            <GrFormClose className="text-3xl" />
          </div>
        </div>
        <div className="modal-bottom flex flex-col gap-5">
          <span className="font-semibold">
            Sua conta foi criada com sucesso!
          </span>
          <span className="text-gray-500">
            Agora você poderá ver seus negócios crescendo em grande escala
          </span>
          <Link
            href="/login"
            className="text-sm mt-6 w-fit bg-brand-brand1 hover:bg-brand-brand3 text-white font-semibold py-2 px-4 rounded"
          >
            Ir para o login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
