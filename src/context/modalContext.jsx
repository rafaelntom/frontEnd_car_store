import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [registerModal, setRegisterModal] = useState(false);
  const [editAnnouncementModal, setEditAnnouncementModal] = useState(false);
  const [adressModal, setAdressModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteAnnouncementModal, setDeleteAnnouncementModal] = useState(false);
  const [createAnnouncementModal, setCreateAnnouncementModal] = useState(false);
  const [announcementId, setAnnouncementId] = useState(null);

  const toogleRegisterModalOn = () => {
    setRegisterModal(true);
  };

  const toogleRegisterModalOff = () => {
    setRegisterModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        registerModal,
        setRegisterModal,
        toogleRegisterModalOff,
        toogleRegisterModalOn,
        editAnnouncementModal,
        setEditAnnouncementModal,
        adressModal,
        setAdressModal,
        deleteModal,
        setDeleteModal,
        deleteAnnouncementModal,
        setDeleteAnnouncementModal,
        announcementId,
        setAnnouncementId,
        createAnnouncementModal,
        setCreateAnnouncementModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
