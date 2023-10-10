import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [registerModal, setRegisterModal] = useState(false);
  const [editAnnouncementModal, setEditAnnouncementModal] = useState(false);
  const [adressModal, setAdressModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
