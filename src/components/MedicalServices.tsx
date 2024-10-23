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
import Pagination from "@/components/ui/pagination";
import CardsView from "@/components/ui/cardsview";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico?: string;
  preparo?: string;
}

interface MedicalServicesProps {
  pageTitle: string;
  pageSubTitle: string;
  typeSvg: string;
  filteredData: CardProps[];
  qttPerPage: number;
  dataLength: number;
  paginate: (page: number) => void;
}

const MedicalServices = ({
  pageTitle,
  pageSubTitle,
  typeSvg,
  filteredData,
  qttPerPage,
  dataLength,
  paginate,
}: MedicalServicesProps) => {
  return (
    <section className="w-full gap-4">
      <div className="relative flex w-full flex-col items-center justify-center bg-[#152e56]">
        <div className="flex w-full max-w-[1300px] flex-row items-center justify-between gap-2 px-6 py-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-white sm:text-2xl min-[940px]:text-4xl">
              {pageTitle}
            </h1>
            <p className="text-sm text-white max-sm:w-2/3 sm:text-xl">
              Qual {pageSubTitle} você está procurando ?
            </p>
          </div>

          <div className="flex h-24 w-24 items-center">
            <Image src={typeSvg} alt="oi" />
          </div>
        </div>
        <div className="absolute -bottom-[15%] w-full max-w-[1300px] px-6">
          <Search type="consultas" />
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
                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <CardsView filteredData={filteredData} type={pageTitle.toLowerCase()} />
      <Pagination
        qttPerPage={qttPerPage}
        totalItems={dataLength}
        paginate={paginate}
      />
    </section>
  );
};

export default MedicalServices;
