import { MdKeyboardArrowUp } from "react-icons/md";
import React from "react";
import { inter } from "@/pages";

function PageFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`bg-grey-0 w-full px-7 text-white absolute bottom-0  ${inter.className} md:py-2`}
    >
      <div className="content-container py-4 flex flex-col gap-4 justify-center items-center md:flex-row md:justify-between max-w-[1440px] mx-auto">
        <h2 className="font-bold text-heading-4">
          Motors <span className="text-heading-6 italic">shop</span>
        </h2>
        <span className="font-light italic">
          © 2023 - Todos os direitos reservados.
        </span>
        <button onClick={scrollToTop} className="bg-grey-2 p-1 rounded-md">
          <MdKeyboardArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default PageFooter;
