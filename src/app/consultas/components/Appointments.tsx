"use client";

import appointment from "@/../public/appointment.svg";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import MedicalServices from "@/components/MedicalServices";
import GlobalApi from "@/services/GlobalApi";

interface ContentProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico: string;
}

const Appointments = () => {
  const { input } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<CardProps[]>([]);
  const qttPerPage = 10;

  const indexOfLast = currentPage * qttPerPage;
  const indexOfFirst = indexOfLast - qttPerPage;

  const paginate = (page: number) => setCurrentPage(page);

  useEffect(() => {
    const getConsultasApi = () => {
      GlobalApi.GetConsultas(indexOfFirst, indexOfLast, input).then((resp) => {
        setContent(resp[1]);
        setFilteredData(resp[0]);
      });
    };

    getConsultasApi();
  }, [input, indexOfFirst, indexOfLast]);

  return (
    <div className="w-full">
      <MedicalServices
        pageTitle="Consultas"
        pageSubTitle="consulta"
        typeSvg={appointment}
        qttPerPage={qttPerPage}
        dataLength={content.length}
        paginate={paginate}
        filteredData={filteredData}
      />
    </div>
  );
};

export default Appointments;
