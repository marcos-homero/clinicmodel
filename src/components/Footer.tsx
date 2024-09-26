import Link from "next/link";
import React from "react";
import {
  FaClinicMedical,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    { path: "/", name: "Início" },
    { path: "/convenios", name: "Convênios" },
    { path: "/servicos", name: "Serviços" },
    { path: "/sobre-nos", name: "Sobre" },
  ];

  return (
    <div
      id="footer"
      className="bg-[#0f213e] w-full flex flex-col items-center justify-center"
    >
      <div className="flex flex-col w-full px-6 py-16 max-w-[1300px] h-[75%] gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-16 ">
          <div className="flex flex-col gap-8 lg:flex-row w-full">
            <div className="flex flex-col gap-4 max-lg:items-center">
              <h2 className="text-white font-normal">Paciente:</h2>
              <div className="flex flex-col gap-2 max-lg:items-center">
                {links.map((item, index) => (
                  <p
                    className="text-sky-200 text-sm hover:underline cursor-pointer"
                    key={index}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 max-lg:items-center">
              <h2 className="text-white font-normal">Sobre nós:</h2>
              <div className="flex flex-col gap-2 max-lg:items-center">
                {links.map((item, index) => (
                  <p
                    className="text-sky-200  hover:underline text-sm cursor-pointer"
                    key={index}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 max-lg:items-center">
              <h2 className="text-white font-normal">Informações:</h2>
              <div className="flex flex-col gap-2 max-lg:items-center">
                {links.map((item, index) => (
                  <p
                    className="text-sky-200 text-sm hover:underline cursor-pointer"
                    key={index}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-white text-4xl font-semibold">
              <div className="flex flex-col justify-around items-center w-fit">
                <FaClinicMedical size={64} className="text-white" />
                <h1 className="text-white text-xl font-bold">Intelimed</h1>
              </div>
            </h1>
            <div className="flex flex-col max-lg:items-center gap-2">
              <p className="text-white font-semibold">Rede Sociais</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/os5produtos"
                target="_blank"
              >
                <FaInstagram
                  className="h-8 w-8 text-white transition-colors"
                  aria-label="Instagram"
                  role="link"
                />
              </Link>
              <Link
                href="https://www.instagram.com/os5produtos"
                target="_blank"
              >
                <FaFacebook
                  className="h-8 w-8 text-white transition-colors"
                  aria-label="Instagram"
                  role="link"
                />
              </Link>
              <Link
                href="https://www.instagram.com/os5produtos"
                target="_blank"
              >
                <FaWhatsapp
                  className="h-8 w-8 text-white transition-colors"
                  aria-label="Instagram"
                  role="link"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[25%] py-16 bg-[#152e56]">
        <p className="text-white text-center">
          © COPYRIGHT 2024 - MARKOALA NETWORK S.A. TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </div>
  );
};

export default Footer;
