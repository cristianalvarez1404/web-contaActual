import React from "react";

export const Navbar = () => {
  return (
    <div className="border-b-2 border-b-gray-200 h-[50px] relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-2">
          <a href="/" className="">
            <img src="../../icon.png" alt="" className="w-[50px] y-[50px] " />
          </a>
          <span className="ml-2 text-sm text-gray-400">
            Contax-<small>co</small>
          </span>
        </div>
        <div className="mr-10">
          <a
            href="/tributaria"
            className="p-1 mr-5 hover:bg-gray-300 hover:rounded-2xl"
          >
            Tributaria
          </a>
          <a
            href="/nomina"
            className="p-1 mr-5 hover:bg-gray-300 hover:rounded-2xl"
          >
            Nómina
          </a>
          <a
            href="/contabilidad"
            className="p-1 mr-5 hover:bg-gray-300 hover:rounded-2xl"
          >
            Contabilidad
          </a>
          <a
            href="/costos"
            className="p-1 mr-5 hover:bg-gray-300 hover:rounded-2xl"
          >
            Costos
          </a>
          <a
            href="/otros"
            className="p-1 mr-5 hover:bg-gray-300 hover:rounded-2xl"
          >
            Otros
          </a>
          <a
            href="/liquidadores"
            className="p-1 mr-5 hover:bg-gray-300 hover:rounded-2xl"
          >
            Liquidadores
          </a>
          {/* <a href="/" className="cursor-pointer">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a> */}
          <a href="/newPost" className="cursor-pointer">
            <i className="fa-solid fa-plus"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
