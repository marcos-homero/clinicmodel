"use client";

import GlobalApi from "@/services/GlobalApi";
import React, { useEffect, useState } from "react";
import typeSvg from "@/../public/appointment.svg";
import SubHeader from "@/components/SubHeader";

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

  return <>{content && <SubHeader content={content} typeSvg={typeSvg} />}</>;
};

export default Page;
