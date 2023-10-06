import React, { useState } from "react";
import DropDown from "./DropDown";
import Link from "next/link";
import { lexend } from "@/pages";
import { useAuth } from "../hooks/useAuth";

function PageHeader() {
  const { token, clearAuthToken, decodedToken } = useAuth();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  function getInitials(name) {
    const names = name.split(" ");
    const initials = names.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials;
  }

  return (
    <header className="flex items-center justify-between p-4 ">
      <Link href="/">
        <h1 className="font-bold text-heading-4 gradient-text">
          Motors <span className="text-heading-6 pl-1">shop</span>
        </h1>
      </Link>

      <div className={`hidden md:flex gap-6 items-center ${lexend.className}`}>
        {token != null ? (
          <div className="flex flex-col relative">
            <div
              className="flex gap-2 items-center hover:cursor-pointer"
              onClick={toggleMenu}
            >
              <span
                className={`bg-brand-brand1 rounded-full p-[6px] w-max text-white text-text-body-2`}
              >
                {getInitials(decodedToken.name)}
              </span>
              <span className="text-grey-2">{decodedToken.name}</span>
            </div>
            {menuVisible && (
              <div
                className={`absolute bg-gray-900 z-20 w-max top-9 transition-all duration-300 animate-slideDown rounded`}
              >
                <Link
                  href="#"
                  className="block text-white py-2 px-4 hover:bg-gray-700"
                >
                  Editar perfil
                </Link>
                <Link
                  href="#"
                  className="block text-white py-2 px-4 hover:bg-gray-700"
                >
                  Editar Endereço
                </Link>
                {decodedToken.is_seller == true ? (
                  <Link
                    href="#"
                    className="block text-white py-2 px-4 hover:bg-gray-700"
                  >
                    Meus anuncios
                  </Link>
                ) : (
                  ""
                )}
                <Link
                  href="#"
                  className="block text-white py-2 px-4 hover:bg-gray-700"
                  onClick={clearAuthToken}
                >
                  Sair
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="text-brand-brand1 font-medium hover:cursor-pointer hover:scale-105 hover:text-brand-brand3 transition-all duration-200"
            >
              Realizar Login
            </Link>
            <Link
              href="/register"
              className="text-grey-0 font-semibold py-2 px-3 border-2 rounded-lg hover:cursor-pointer hover:scale-105 hover:bg-grey-6 hover:border-grey-0 transition-all duration-200"
            >
              Cadastrar
            </Link>
          </>
        )}
      </div>
      <DropDown />
    </header>
  );
}

export default PageHeader;
