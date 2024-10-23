"use client";

import appointment from "@/../public/appointment.svg";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import MedicalServices from "@/components/MedicalServices";
import GlobalApi from "@/services/GlobalApi";
import React from "react";

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
  const [content, setContent] = useState<ContentProps[]>([]);
  const [filteredData, setFilteredData] = useState<ContentProps[]>([]);
  const qttPerPage = 12;

  const indexOfLast = currentPage * qttPerPage;
  const indexOfFirst = indexOfLast - qttPerPage;

  const [specialties, setSpecialties] = useState([]);
  const [error, setError] = useState(null);

  const paginate = (page: number) => setCurrentPage(page);

  useEffect(() => {
    const getConsultasApi = () => {
      GlobalApi.GetConsultas(indexOfFirst, indexOfLast, input).then((resp) => {
        setContent(resp[1]);
        setFilteredData(resp[0]);
      });
    };
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.feegow.com/v1/api/specialties/list",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token":
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOjE3Mjk2MjIwMDIsImxpY2Vuc2VJRCI6Mjk0ODN9.ZmXxn7f-RJeZgjsf2xT9c8p3HP8cgFWnLBiNuLoCAxA", // Substitua por seu token real
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        console.log(specialties, error);
        setSpecialties(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    getConsultasApi();
    fetchData();
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
