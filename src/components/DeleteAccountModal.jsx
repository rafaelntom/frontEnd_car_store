import { ModalContext } from "@/context/modalContext";
import { useAuth } from "@/hooks/useAuth";
import { lexend } from "@/pages";
import axiosApi from "@/services/api";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import React, { useContext, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";

const DeleteAccountModal = () => {
  const router = useRouter();
  const { deleteModal, setDeleteModal } = useContext(ModalContext);
  const { decodedToken } = useAuth();

  let userId = "";

  if (decodedToken) {
    userId = decodedToken.sub;
  }

  console.log(userId);

  const handleAccountDeletion = async () => {
    try {
      await axiosApi.delete(`/users/${userId}`);
      destroyCookie(null, "motorshop.token", { path: "/" });

      toast("Usuário deletado, você será deslogado", {
        autoClose: 4000,
      });

      setTimeout(() => {
        setDeleteModal(false);
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {deleteModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${lexend.className}`}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="bg-white p-8 rounded-md z-50 max-w-[35.5rem] w-[100%] flex flex-col animate-slideUp">
            <div className="modal-top flex w-full justify-between pb-4 items-center">
              <span>Excluir Perfil</span>
              <div
                className="cursor-pointer hover:scale-105 transition-all duration-200"
                onClick={() => setDeleteModal(false)}
              >
                <GrFormClose className="text-3xl" />
              </div>
            </div>
            <div className="text-container flex flex-col gap-5 mt-5">
              <span className="font-semibold ">
                Tem certeza de que deseja excluir o seu perfil?
              </span>
              <p className="text-grey-2 ">
                Essa ação não pode ser desfeita. Isso excluirá permanentemente
                sua conta e removerá seus dados de nossos servidores.
              </p>
            </div>
            <div className="btns-container flex gap-4 w-full justify-end mt-5">
              <button
                className="bg-grey-2 py-2 px-3 rounded-lg text-grey-6 hover:scale-105 transition-all duration-200"
                onClick={() => setDeleteModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-feedback-alert2 text-feedback-alert1 font-semibold py-2 px-3 rounded-lg hover:scale-105 transition-all duration-200"
                onClick={handleAccountDeletion}
              >
                Sim, excluir perfil
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteAccountModal;
