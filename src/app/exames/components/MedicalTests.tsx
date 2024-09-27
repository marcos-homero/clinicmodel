"use client";

import MedicalServices from "@/components/MedicalServices";
import { SearchContext } from "@/contexts/SearchContext";
import { useContext, useEffect, useState } from "react";
import test from "@/../public/test.svg";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  preparo: string;
}

const MedicalTests = ({ data }: { data: CardProps[] }) => {
  const { input } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<CardProps[]>([]);
  const qttPerPage = 10;

  const indexOfLast = currentPage * qttPerPage;
  const indexOfFirst = indexOfLast - qttPerPage;

  const paginate = (page: number) => setCurrentPage(page);

  useEffect(() => {
    const normalizeText = (text: string) => {
      return text
        .normalize("NFD") // Normaliza o texto decompondo caracteres acentuados
        .replace(/[\u0300-\u036f]/g, ""); // Remove os diacríticos (acentos)
    };

    const inputData = data.filter((item) => {
      const normalizedTipo = normalizeText(item.tipo.toLowerCase());
      const normalizedInput = normalizeText(input.toLowerCase());
      return normalizedTipo.includes(normalizedInput);
    });

    const currentItems = inputData.slice(indexOfFirst, indexOfLast);

    setFilteredData(currentItems);
  }, [input, indexOfFirst, indexOfLast, data]);

  return (
    <div className="w-full">
      <MedicalServices
        pageTitle="Exames"
        pageSubTitle="exame"
        typeSvg={test}
        qttPerPage={qttPerPage}
        dataLength={data.length}
        paginate={paginate}
        filteredData={filteredData}
      />
    </div>
  );
};

export default MedicalTests;
