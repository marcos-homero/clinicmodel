"use client";

import MedicalServices from "@/components/MedicalServices";
import { SearchContext } from "@/contexts/SearchContext";
import { useContext, useEffect, useState } from "react";
import test from "@/../public/test.svg";
import GlobalApi from "@/services/GlobalApi";

interface ContentProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  preparo: string;
}

const MedicalTests = () => {
  const { input } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState<ContentProps[]>([]);
  const [filteredData, setFilteredData] = useState<ContentProps[]>([]);
  const qttPerPage = 12;

  const indexOfLast = currentPage * qttPerPage;
  const indexOfFirst = indexOfLast - qttPerPage;

  const paginate = (page: number) => setCurrentPage(page);

  useEffect(() => {
    const getExamesApi = () => {
      GlobalApi.GetExames(indexOfFirst, indexOfLast, input).then((resp) => {
        setContent(resp[1]);
        setFilteredData(resp[0]);
      });
    };

    getExamesApi();
  }, [input, indexOfFirst, indexOfLast]);

  return (
    <div className="w-full">
      <MedicalServices
        pageTitle="Exames"
        pageSubTitle="exame"
        typeSvg={test}
        qttPerPage={qttPerPage}
        dataLength={content.length}
        paginate={paginate}
        filteredData={filteredData}
      />
    </div>
  );
};

export default MedicalTests;
