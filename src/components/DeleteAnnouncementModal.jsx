import { ModalContext } from "@/context/modalContext";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import React, { useContext } from "react";
import { lexend } from "@/pages";
import { GrFormClose } from "react-icons/gr";
import axiosApi from "@/services/api";
import { toast } from "react-toastify";

const DeleteAnnouncementModal = () => {
  const {
    setDeleteAnnouncementModal,
    deleteAnnouncementModal,
    announcementId,
  } = useContext(ModalContext);

  const { decodedToken } = useAuth();

  let userId = "";

  if (decodedToken) {
    userId = decodedToken.sub;
  }

  const handleAnnouncementDeletion = async () => {
    try {
      await axiosApi.delete(`/announcements/${announcementId}`);

      toast.success("Anúncio deletado com sucesso.", {
        autoClose: 300,
      });

      setDeleteAnnouncementModal(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {deleteAnnouncementModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${lexend.className}`}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="bg-white p-8 rounded-md z-50 max-w-[35.5rem] w-[100%] flex flex-col animate-slideUp">
            <div className="modal-top flex w-full justify-between pb-4 items-center">
              <span>Excluir Anúncio</span>
              <div
                className="cursor-pointer hover:scale-105 transition-all duration-200"
                onClick={() => {
                  console.log(deleteAnnouncementModal);
                  setDeleteAnnouncementModal(false);
                }}
              >
                <GrFormClose className="text-3xl" />
              </div>
            </div>
            <div className="text-container flex flex-col gap-5 mt-5">
              <span className="font-semibold ">
                Tem certeza de que deseja excluir o seu anúncio?
              </span>
              <p className="text-grey-2 ">
                Essa ação não pode ser desfeita. Isso excluirá permanentemente o
                seu anúncio.
              </p>
            </div>
            <div className="btns-container flex gap-4 w-full justify-end mt-5">
              <button
                className="bg-grey-1 py-2 px-3 rounded-lg text-grey-6 hover:scale-105 transition-all duration-200"
                onClick={() => setDeleteAnnouncementModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-feedback-alert2 text-feedback-alert1 font-semibold py-2 px-3 rounded-lg hover:scale-105 transition-all duration-200"
                onClick={handleAnnouncementDeletion}
              >
                Sim, excluir anúncio
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteAnnouncementModal;
