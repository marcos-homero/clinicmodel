"use client";

import Search from "@/components/ui/search";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import Image from "next/image";
import appointment from "@/public/femaleappointment.svg";
import { useContext, useState } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import Pagination from "@/components/ui/pagination";
import CardsView from "@/components/ui/cardsview";

const Appointments = () => {
  const { input } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const qttPerPage = 10;

  const consultas = [
    {
      tipo: "Consulta Geral",
      valor: "60,00",
    },
    {
      tipo: "Consulta Dermatológica",
      valor: "80,00",
    },
    {
      tipo: "Consulta Cardiológica",
      valor: "100,00",
    },
    {
      tipo: "Consulta Pediátrica",
      valor: "75,00",
    },
    {
      tipo: "Consulta Ortopédica",
      valor: "90,00",
    },
    {
      tipo: "Consulta Neurológica",
      valor: "120,00",
    },
    {
      tipo: "Consulta Oftalmológica",
      valor: "85,00",
    },
    {
      tipo: "Consulta Ginecológica",
      valor: "95,00",
    },
    {
      tipo: "Consulta Urológica",
      valor: "110,00",
    },
    {
      tipo: "Consulta Psiquiátrica",
      valor: "130,00",
    },
    {
      tipo: "Consulta Psicologia",
      valor: "70,00",
    },
    {
      tipo: "Consulta Endocrinológica",
      valor: "105,00",
    },
    {
      tipo: "Consulta Odontológica",
      valor: "60,00",
    },
    {
      tipo: "Consulta Oncológica",
      valor: "150,00",
    },
    {
      tipo: "Consulta Reumatológica",
      valor: "110,00",
    },
    {
      tipo: "Consulta Geriátrica",
      valor: "85,00",
    },
    {
      tipo: "Consulta Fisioterapia",
      valor: "65,00",
    },
    {
      tipo: "Consulta Nutrição",
      valor: "75,00",
    },
    {
      tipo: "Consulta Otorrinolaringológica",
      valor: "95,00",
    },
    {
      tipo: "Consulta Infectologia",
      valor: "115,00",
    },
  ];

  const indexOfLast = currentPage * qttPerPage;
  const indexOfFirst = indexOfLast - qttPerPage;
  const currentItems = consultas.slice(indexOfFirst, indexOfLast);
  indexOfLast;
  const paginate = (page: number) => setCurrentPage(page);

  return (
    <section className="w-full gap-4">
      <div className="relative flex flex-col bg-[#152e56] w-full items-center justify-center ">
        <div className="flex flex-row justify-between items-center py-16 gap-2 w-full px-6 max-w-[1300px]">
          <div className=" flex flex-col gap-2">
            <h1 className="text-lg sm:text-4xl font-semibold text-white">
              Consultas
            </h1>
            <p className="text-sm sm:text-xl text-white">
              Qual consulta você está procurando ?
            </p>
          </div>

          <div className="w-24 h-24 items-center flex">
            <Image src={appointment} alt="oi" />
          </div>
        </div>
        <div className="w-full max-w-[1300px] px-6 absolute -bottom-[15%]">
          <Search type="consultas" />
        </div>
      </div>
      <div className="flex flex-col  w-full items-center justify-center">
        <div className="flex flex-col py-16 gap-16 w-full px-6 max-w-[1300px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="flex text-slate-600 items-center gap-2"
                  href="/"
                >
                  <FaHouseChimneyMedical size={16} /> Início
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Consultas</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <p>{input}</p>
      <CardsView filteredData={currentItems} />
      <Pagination
        qttPerPage={qttPerPage}
        totalItems={consultas.length}
        paginate={paginate}
      />
    </section>
  );
};

export default Appointments;
