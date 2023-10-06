import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

function DropDown() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);
  const { token, decodedToken, clearAuthToken } = useAuth();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setIconRotation(menuVisible ? 0 : 180);
  };

  return (
    <div className="md:hidden relative z-20">
      <button
        className={`block text-white p-2 focus:outline-none transform transition-transform duration-250 ${
          menuVisible ? "rotate-180" : ""
        }`}
        onClick={toggleMenu}
      >
        <FiMenu className="text-black text-heading-4 transform rotate-0" />
      </button>

      {menuVisible && (
        <div
          className={`${
            menuVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[-100%] opacity-0"
          } absolute top-8 right-2 bg-gray-900 rounded shadow-lg mt-2 transition duration-300 ease-in-out w-max`}
        >
          {token != null ? (
            <>
              <div className="">
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
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="block text-white py-2 px-4 hover:bg-gray-700"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block text-white py-2 px-4 hover:bg-gray-700"
              >
                Cadastrar
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default DropDown;
