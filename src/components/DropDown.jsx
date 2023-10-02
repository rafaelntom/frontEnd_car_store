import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

function DropDown() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setIconRotation(menuVisible ? 0 : 180);
  };

  return (
    <div className="md:hidden relative">
      <button
        className={`block text-white p-2 focus:outline-none transform transition-transform duration-250 ${
          menuVisible ? "rotate-180" : ""
        }`}
        onClick={toggleMenu}
      >
        <FiMenu className="text-black text-heading-4 transform rotate-0" />
      </button>
      {menuVisible && (
        <div className="absolute top-full right-0 bg-gray-900 rounded shadow-lg mt-2">
          <a href="#" className="block text-white py-2 px-4 hover:bg-gray-700">
            Login
          </a>
          <a href="#" className="block text-white py-2 px-4 hover:bg-gray-700">
            Cadastrar
          </a>
        </div>
      )}
    </div>
  );
}

export default DropDown;
