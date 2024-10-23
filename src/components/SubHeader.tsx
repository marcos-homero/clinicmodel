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
    <section className="flex w-full flex-col items-center">
      <div className="relative flex h-[224px] w-full flex-col items-center justify-center bg-[#152e56]">
        <div className="flex w-full max-w-[1300px] flex-row items-center justify-between gap-4 px-6 py-16">
          <div className="flex flex-col justify-between gap-16">
            <div className="flex flex-col gap-4 max-sm:items-center">
              <h1 className="text-lg font-semibold text-white sm:text-2xl min-[940px]:text-4xl">
                {content?.tipo}
              </h1>
              {content.medico && (
                <h2 className="w-fit text-wrap text-base font-bold text-white sm:text-xl">
                  {content?.medico}
                </h2>
              )}
            </div>
          </div>
          <div className="flex h-24 w-24 items-center">
            <Image src={typeSvg} alt="oi" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[1300px] flex-col gap-16 px-6 pb-8 pt-16">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="flex items-center gap-2 text-slate-600"
                  href="/"
                >
                  <FaHouseChimneyMedical size={16} /> Início
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="flex items-center gap-2 text-slate-600"
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
      <div className="flex w-full max-w-[1300px] items-center gap-2 px-6">
        <div className="flex w-full flex-row justify-between gap-8 max-[940px]:flex-col">
          <div className="flex w-1/2 flex-col gap-4 max-[940px]:w-full">
            {content.medico && (
              <h3 className="w-fit text-wrap text-xl font-bold">
                Informações da consulta:
              </h3>
            )}
            {content.preparo && (
              <h3 className="w-fit text-wrap text-xl font-bold">
                Informações do exame:
              </h3>
            )}
            <p className="w-full text-wrap text-sm text-slate-600">
              {content?.descricao} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quam sint esse temporibus at laboriosam eaque,
              voluptate quis commodi cum doloribus rerum deserunt quaerat error?
              Illum minima consectetur explicabo hic non.
            </p>
            {content.preparo && (
              <>
                <h3 className="w-fit text-wrap text-xl font-bold">
                  Informações do preparo:
                </h3>
                <p className="w-full text-wrap text-sm text-slate-600">
                  {content?.preparo} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quam sint esse temporibus at laboriosam
                  eaque, voluptate quis commodi cum doloribus rerum deserunt
                  quaerat error? Illum minima consectetur explicabo hic non.
                </p>
              </>
            )}
            {content.medico && (
              <div className="flex flex-col">
                <h3 className="w-fit text-wrap text-xl font-bold">
                  Informações do médico:
                </h3>
                <p className="mt-4 w-full text-wrap text-sm text-slate-600">
                  {content.medico}
                </p>
                <p className="mt-2 w-full text-wrap text-sm text-slate-600">
                  CRM: 111111
                </p>
                <p className="mt-4 w-full text-wrap text-sm font-bold text-slate-600">
                  Este médico oferece desconto para todos os convênios
                </p>
                <p className="mt-2 w-full text-wrap text-xs text-slate-600">
                  As informações de valores das consultas com convênio aplicado
                  é feita durante o agendamento.
                </p>
              </div>
            )}

            {content.preparo && (
              <div className="flex flex-col">
                <p className="mt-4 w-full text-wrap text-sm font-bold text-slate-600">
                  Este exame possui desconto para todos os convênios
                </p>
                <p className="mt-2 w-full text-wrap text-xs text-slate-600">
                  As informações de valores dos exames com convênio aplicado é
                  feita durante o agendamento.
                </p>
              </div>
            )}
          </div>

          <div className="flex w-2/5 flex-col gap-8 rounded-md border border-slate-200 p-8 shadow-sm max-[940px]:w-full">
            <div className="flex flex-col">
              <h4 className="text-xl font-bold">
                Consulte os preços da unidade mais próxima de você
              </h4>
              <p className="mt-2 w-full text-wrap text-xs text-slate-600">
                Os valores podem sofrer alterações de acordo com a unidade
                selecionada.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl font-bold">Selecione a unidade</h5>
              <Select>
                <SelectTrigger className="flex w-full items-center gap-2 bg-white p-6 text-sm font-semibold">
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
              <p className="w-full text-wrap text-xs font-bold text-slate-600">
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
              <Button className="flex w-full gap-4 px-8 py-6 text-base">
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
