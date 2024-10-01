"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaArrowDown, FaArrowRight, FaMapMarked } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { FaHouseChimneyMedical } from "react-icons/fa6";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico?: string;
  preparo?: string;
}

const SubHeader = ({
  content,
  typeSvg,
}: {
  content: CardProps;
  typeSvg: string;
}) => {
  const [city, setCity] = useState("Itapetininga");

  return (
    <section className="flex flex-col items-center w-full ">
      <div className="relative flex flex-col bg-[#152e56] w-full items-center justify-center ">
        <div className="flex max-sm:flex-col flex-row justify-between items-center py-16 gap-4 max-sm:gap-8 w-full px-6 max-w-[1300px]">
          <div className="flex flex-col gap-16 justify-between">
            <div className="flex flex-col max-sm:items-center  gap-4">
              <h1 className="max-sm:text-2xl text-4xl font-semibold text-white">
                {content?.tipo}
              </h1>
              {content.medico && (
                <h2 className="text-lg sm:text-2xl text-white font-bold w-fit text-wrap">
                  {content?.medico}
                </h2>
              )}
            </div>
          </div>
          <div className="max-sm:w-24 max-sm:h-24 w-48 h-48">
            <Image src={typeSvg} alt="oi" />
          </div>
          <p className="min-[640px]:hidden bg-sky-300 text-xs font-semibold w-fit text-[#152e56] px-4 py-1 mt-1 rounded-lg">
            Unidade: Itapetininga
          </p>
        </div>
      </div>
      <div className="flex flex-col  w-full items-center justify-center">
        <div className="flex flex-col pt-16 pb-8 gap-16 w-full px-6 max-w-[1300px]">
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
                <BreadcrumbLink
                  className="flex text-slate-600 items-center gap-2"
                  href={content.medico ? "/consultas" : "/exames"}
                >
                  {content.medico ? "Consultas" : "Exames"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{content.tipo}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex gap-2 items-center w-full px-6 max-w-[1300px]">
        <div className="flex flex-row max-[940px]:flex-col justify-between w-full gap-8 ">
          <div className="flex flex-col gap-4 max-[940px]:w-full w-1/2 ">
            {content.medico && (
              <h3 className="text-xl font-bold w-fit text-wrap">
                Informações da consulta:
              </h3>
            )}
            {content.preparo && (
              <h3 className="text-xl font-bold w-fit text-wrap">
                Informações do exame:
              </h3>
            )}
            <p className="text-slate-600 text-sm w-full text-wrap">
              {content?.descricao} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quam sint esse temporibus at laboriosam eaque,
              voluptate quis commodi cum doloribus rerum deserunt quaerat error?
              Illum minima consectetur explicabo hic non.
            </p>
            {content.preparo && (
              <>
                <h3 className="text-xl font-bold w-fit text-wrap">
                  Informações do preparo:
                </h3>
                <p className="text-slate-600 text-sm w-full text-wrap">
                  {content?.preparo} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quam sint esse temporibus at laboriosam
                  eaque, voluptate quis commodi cum doloribus rerum deserunt
                  quaerat error? Illum minima consectetur explicabo hic non.
                </p>
              </>
            )}
            {content.medico && (
              <div className="flex flex-col">
                <h3 className="text-xl font-bold w-fit text-wrap">
                  Informações do médico:
                </h3>
                <p className="text-slate-600 mt-4 text-sm w-full text-wrap">
                  {content.medico}
                </p>
                <p className="text-slate-600 mt-2 text-sm w-full text-wrap">
                  CRM: 111111
                </p>
                <p className="text-slate-600 mt-4 font-bold text-sm w-full text-wrap">
                  Este médico oferece desconto para todos os convênios
                </p>
                <p className="text-slate-600 mt-2 text-xs w-full text-wrap">
                  As informações de valores das consultas com convênio aplicado
                  é feita durante o agendamento.
                </p>
              </div>
            )}

            {content.preparo && (
              <div className="flex flex-col">
                <p className="text-slate-600 mt-4 font-bold text-sm w-full text-wrap">
                  Este exame possui desconto para todos os convênios
                </p>
                <p className="text-slate-600 mt-2 text-xs w-full text-wrap">
                  As informações de valores dos exames com convênio aplicado é
                  feita durante o agendamento.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-8 w-2/5 max-[940px]:w-full shadow-sm p-8 border border-slate-200 rounded-md ">
            <div className="flex flex-col">
              <h4 className="text-xl font-bold">
                Consulte os preços da unidade mais próxima de você
              </h4>
              <p className="text-slate-600 mt-2 text-xs w-full text-wrap">
                Os valores podem sofrer alterações de acordo com a unidade
                selecionada.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl font-bold">Selecione a unidade</h5>
              <Select>
                <SelectTrigger className="flex items-center w-full gap-2 p-6 bg-white text-sm font-semibold  ">
                  <FaMapMarked size={16} />
                  <SelectValue placeholder={city} />
                  <FaArrowDown size={16} />
                </SelectTrigger>
                <SelectContent className="text-slate-500">
                  <SelectItem
                    onClick={() => setCity("São Paulo")}
                    value="São Paulo"
                  >
                    São Paulo
                  </SelectItem>
                  <SelectItem
                    onClick={() => setCity("Sorocaba")}
                    value="Sorocaba"
                  >
                    Sorocaba
                  </SelectItem>
                  <SelectItem
                    onClick={() => setCity("Itapetininga")}
                    value="Itapetininga"
                  >
                    Itapetininga
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-slate-600 font-bold text-xs w-full text-wrap">
                A partir de:
              </p>
              <p className="text-4xl font-bold">R$ {content.valor}</p>
            </div>
            <Link
              href={
                content.medico
                  ? `https://api.whatsapp.com/send?phone=551535370431&text=Gostaria%20de%20agendar%20a%20especialidade%20${content.tipo}%20em%20${city}%20`
                  : `https://api.whatsapp.com/send?phone=551535370431&text=Gostaria%20de%20agendar%20o%20exame%20${content.tipo}%20em%20${city}%20`
              }
              target="_blank"
            >
              <Button className="flex text-base w-full px-8 gap-4 py-6">
                Agende já <FaArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
