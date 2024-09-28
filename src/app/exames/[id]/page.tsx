"use client";

import GlobalApi from "@/services/GlobalApi";
import { useEffect, useState } from "react";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  preparo: string;
}

const Page = ({ params }: { params: { id: string } }) => {
  const [content, setContent] = useState<CardProps>();

  useEffect(() => {
    const getConsultasApi = () => {
      GlobalApi.GetExameId(params.id).then((resp) => {
        setContent(resp);
      });
    };

    getConsultasApi();
  }, [params.id]);

  return <div>{content?.tipo}</div>;
};

export default Page;
