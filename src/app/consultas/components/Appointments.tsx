"use client";

import appointment from "@/../public/appointment.svg";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import MedicalServices from "@/components/MedicalServices";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico: string;
}

const Appointments = ({ data }: { data: CardProps[] }) => {
  const { input } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<CardProps[]>([]);
  const qttPerPage = 12;

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
        pageTitle="Consultas"
        pageSubTitle="consulta"
        typeSvg={appointment}
        qttPerPage={qttPerPage}
        dataLength={data.length}
        paginate={paginate}
        filteredData={filteredData}
      />
    </div>
  );
};

export default Appointments;
