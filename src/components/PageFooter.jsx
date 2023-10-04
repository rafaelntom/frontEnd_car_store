import React from "react";

function PageFooter() {
  return (
    <footer className="bg-grey-0 w-full py-5 px-7 flex flex-col gap-4 justify-center items-center text-white absolute bottom-0  ">
      <h2 className="font-bold text-heading-4">
        Motors <span className="text-heading-6 italic">shop</span>
      </h2>
      <span className="font-medium">
        © 2023 - Todos os direitos reservados.
      </span>
    </footer>
  );
}

export default PageFooter;
