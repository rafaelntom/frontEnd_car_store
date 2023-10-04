import React from "react";
import DropDown from "./DropDown";
import Link from "next/link";
import { lexend } from "@/pages";

function PageHeader() {
  return (
    <header className="flex items-center justify-between p-4 ">
      <Link href="/">
        <h1 className="font-bold text-heading-4 gradient-text">
          Motors <span className="text-heading-6 pl-1">shop</span>
        </h1>
      </Link>

      <div className={`hidden md:flex gap-6 items-center ${lexend.className}`}>
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
      </div>
      <DropDown />
    </header>
  );
}

export default PageHeader;
