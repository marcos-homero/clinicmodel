"use client";

import GlobalApi from "@/services/GlobalApi";
import React, { useEffect, useState } from "react";
import typeSvg from "@/../public/appointment.svg";
import SubHeader from "@/components/SubHeader";
import Notices from "@/components/Notices";
import HomeSearch from "@/components/HomeSearch";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico?: string;
  preparo?: string;
}

const Page = ({ params }: { params: { id: string } }) => {
  const [content, setContent] = useState<CardProps>();

  useEffect(() => {
    const getConsultasApi = () => {
      GlobalApi.GetConsultaId(params.id).then((resp) => {
        setContent(resp);
      });
    };

    getConsultasApi();
  }, [params.id]);

  return (
    <div className="flex flex-col gap-16 w-full items-center pb-16">
      {content && <SubHeader content={content} typeSvg={typeSvg} />}
      <div className="flex flex-col justify-between items-center gap-16 max-sm:gap-8 w-full px-6 max-w-[1300px]">
        <Notices />
        <HomeSearch />
      </div>
    </div>
  );
};

export default Page;
