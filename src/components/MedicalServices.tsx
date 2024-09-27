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
  tipo: string;
  valor: string;
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
      <div className="relative flex flex-col bg-[#152e56] w-full items-center justify-center ">
        <div className="flex flex-row justify-between items-center py-16 gap-2 w-full px-6 max-w-[1300px]">
          <div className=" flex flex-col gap-2">
            <h1 className="text-lg sm:text-4xl font-semibold text-white">
              {pageTitle}
            </h1>
            <p className="text-sm sm:text-xl text-white">
              Qual {pageSubTitle} você está procurando ?
            </p>
          </div>

          <div className="w-24 h-24 items-center flex">
            <Image src={typeSvg} alt="oi" />
          </div>
        </div>
        <div className="w-full max-w-[1300px] px-6 absolute -bottom-[15%]">
          <Search type="consultas" />
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
                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <CardsView filteredData={filteredData} />
      <Pagination
        qttPerPage={qttPerPage}
        totalItems={dataLength}
        paginate={paginate}
      />
    </section>
  );
};

export default MedicalServices;
