import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";

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
  return (
    <section className="flex flex-col pb-16 items-center gap-16 w-full ">
      <div className="relative flex flex-col bg-[#152e56] w-full items-center justify-center ">
        <div className="flex max-sm:flex-col flex-row justify-between items-center py-16 gap-4 max-sm:gap-8 w-full px-6 max-w-[1300px]">
          <div className="flex flex-col gap-16 justify-between">
            <div className="flex flex-col max-sm:items-center  gap-4">
              <h1 className="text-4xl font-semibold text-white">
                {content?.tipo}
              </h1>
              {content.medico && (
                <h2 className="text-lg sm:text-2xl text-white font-bold w-fit text-wrap">
                  {content?.medico}
                </h2>
              )}
            </div>
            <p className="max-sm:hidden bg-sky-300 text-xs font-semibold w-fit text-[#152e56] px-4 py-1 mt-1 rounded-lg">
              Unidade: Itapetininga
            </p>
          </div>
          <div className="w-48 h-48">
            <Image src={typeSvg} alt="oi" />
          </div>
          <p className="min-[640px]:hidden bg-sky-300 text-xs font-semibold w-fit text-[#152e56] px-4 py-1 mt-1 rounded-lg">
            Unidade: Itapetininga
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center w-full px-6 max-w-[1300px]">
        <div className="flex flex-col justify-center w-full gap-4 min-[940px]:w-[840px] min-[940px]:mt-16">
          <p className="text-slate-600 text-lg  font-bold  w-full min-[940px]:w-[50%] text-wrap">
            {content?.descricao}
          </p>
          <Button className="flex mt-4 text-base w-fit px-8 gap-4 py-6">
            Agende já <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
