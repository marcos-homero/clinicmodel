import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
      className="bg-[#031432] w-full flex items-center py-16 justify-center"
    >
      <div className="flex flex-col w-full px-6 max-w-[1300px] gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between w-full ">
          <div className="flex flex-col gap-4 max-lg:items-center">
            <h2 className="text-white text-4xl font-semibold">Intelimed</h2>
            <div className="flex flex-col max-lg:items-center gap-2">
              <p className="text-white text-sm text-start">
                Endereço: Rua Coronel Fernando Prestes 144, Centro, Itapetininga
              </p>
              <p className="text-white text-sm text-start">
                Endereço: Rua Coronel Fernando Prestes 144, Centro, Sorocaba
              </p>
              <p className="text-white text-sm">Contato: (15) 3537-0431</p>
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
          <div className="flex flex-col gap-4 max-lg:items-center">
            <h2 className="text-white text-2xl font-semibold">Informações:</h2>
            <div className="flex flex-col gap-2 max-lg:items-center">
              {links.map((item, index) => (
                <p
                  className="text-white text-end hover:text-primary cursor-pointer"
                  key={index}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        <span className="h-[2px] bg-white w-full"></span>
        <p className="text-white text-center">
          © COPYRIGHT 2024 - MARKOALA NETWORK S.A. TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </div>
  );
};

export default Footer;
