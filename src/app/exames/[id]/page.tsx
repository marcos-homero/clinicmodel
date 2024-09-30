"use client";

import GlobalApi from "@/services/GlobalApi";
import { useEffect, useState } from "react";
import medicaltest from "@/../public/test.svg";
import SubHeader from "@/components/SubHeader";

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

  return (
    <>{content && <SubHeader content={content} typeSvg={medicaltest} />}</>
  );
};

export default Page;
