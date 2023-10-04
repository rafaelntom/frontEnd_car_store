import React from "react";
import DropDown from "./DropDown";

function PageHeader() {
  return (
    <header className="flex items-center justify-between p-4 ">
      <h1 className="font-bold text-heading-4 gradient-text">
        Motors <span className="text-heading-6 pl-1">shop</span>
      </h1>

      <div className="hidden md:flex gap-6 items-center">
        <a
          href="#"
          className="text-grey-2 font-semibold hover:cursor-pointer hover:scale-105 hover:text-gray-950 transition-all duration-200"
        >
          Realizar Login
        </a>
        <a
          href="#"
          className="text-grey-0 font-semibold py-2 px-3 border-2 rounded-lg hover:cursor-pointer hover:scale-105 hover:bg-grey-6 hover:border-grey-0 transition-all duration-200"
        >
          Cadastrar
        </a>
      </div>
      <DropDown />
    </header>
  );
}

export default PageHeader;
