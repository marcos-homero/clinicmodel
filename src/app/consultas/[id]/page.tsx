"use client";

import GlobalApi from "@/services/GlobalApi";
import React, { useEffect, useState } from "react";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico: string;
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

  return <div>{content?.tipo}</div>;
};

export default Page;
