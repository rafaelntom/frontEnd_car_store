import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [registerModal, setRegisterModal] = useState(false);
  const [editAnnouncementModal, setEditAnnouncementModal] = useState(false);
  const [adressModal, setAdressModal] = useState(true);

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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
