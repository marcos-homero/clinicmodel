import Link from "next/link";
import React from "react";
import {
  FaClinicMedical,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const linksPatient = [
    { path: "/consultas", name: "Consultas" },
    { path: "/exames", name: "Exames" },
    { path: "/agendamentos", name: "Meus Agendamentos" },
    { path: "/resultados", name: "Resultado de Exames" },
    { path: "/convenios", name: "Convênios" },
  ];

  const linksAbout = [
    { path: "/", name: "Início" },

    { path: "/sobre", name: "Quem somos" },
    { path: "/blog", name: "Blog" },
    { path: "/unidades", name: "Unidades" },
    { path: "/privacidade", name: "Politíca de Privacidade" },
  ];

  const linksContact = [
    {
      path: "https://api.whatsapp.com/send?phone=551535370431",
      name: "Sugestões, elogios ou reclamações",
    },
    {
      path: "tel:1535370431",
      name: "Telefone: (15) 3537-0431",
    },
    {
      path: "mailto:contato@intelimed.com.br",
      name: "E-mail: contato@intelimed.com.br",
    },
    {
      path: "mailto:paula@intelimed.com.br",
      name: "Assessoria de Imprensa: paula@intelimed.com.br",
    },
  ];

  return (
    <div
      id="footer"
      className="flex w-full flex-col items-center justify-center bg-[#0f213e]"
    >
      <div className="flex h-[75%] w-full max-w-[1300px] flex-col gap-4 px-6 py-16">
        <div className="flex w-full flex-row gap-16 max-[940px]:flex-col lg:justify-between">
          <div className="flex w-full flex-row gap-8 max-[940px]:flex-col">
            <div className="flex flex-col gap-4 max-[940px]:items-center">
              <h2 className="font-normal text-white">Paciente:</h2>
              <div className="flex flex-col gap-4 max-[940px]:items-center">
                {linksPatient.map((item, index) => (
                  <Link
                    href={item.path}
                    className="cursor-pointer text-sm text-sky-200 hover:underline max-[940px]:text-center"
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 max-[940px]:items-center">
              <h2 className="font-normal text-white">Sobre Nós:</h2>
              <div className="flex flex-col gap-4 max-[940px]:items-center">
                {linksAbout.map((item, index) => (
                  <Link
                    href={item.path}
                    className="cursor-pointer text-sm text-sky-200 hover:underline max-[940px]:text-center"
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 max-[940px]:items-center">
              <h2 className="font-normal text-white">Fale Conosco:</h2>
              <div className="flex flex-col gap-4 max-[940px]:items-center">
                {linksContact.map((item, index) => (
                  <Link
                    href={item.path}
                    className="cursor-pointer text-sm text-sky-200 hover:underline max-[940px]:text-center"
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
                <p className="cursor-pointer text-sm text-sky-200 hover:underline max-[940px]:text-center">
                  Segunda a Sexta 7h30 às 19h00
                </p>
                <p className="cursor-pointer text-sm text-sky-200 hover:underline max-[940px]:text-center">
                  Sábado: 8h00 às 12h00
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-semibold text-white">
              <div className="flex w-fit flex-col items-center justify-around">
                <FaClinicMedical size={64} className="text-white" />
                <h1 className="text-xl font-bold text-white">Intelimed</h1>
              </div>
            </h1>
            <div className="flex flex-col gap-2 max-lg:items-center">
              <p className="font-semibold text-white">Rede Sociais</p>
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
      <div className="h-[25%] w-full bg-[#152e56] py-16">
        <p className="text-center text-white">
          © COPYRIGHT 2024 - MARKOALA NETWORK S.A. TODOS OS DIREITOS
          RESERVADOS.
        </p>
      </div>
    </div>
  );
};

export default Footer;
