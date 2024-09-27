"use client";

import appointment from "@/public/femaleappointment.svg";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import MedicalServices from "@/components/MedicalServices";

interface CardProps {
  tipo: string;
  valor: string;
}

const data = [
  { tipo: "Clínico Geral", valor: "60,00" },
  { tipo: "Cardiologia", valor: "150,00" },
  { tipo: "Dermatologia", valor: "120,00" },
  { tipo: "Ginecologia", valor: "180,00" },
  { tipo: "Pediatria", valor: "100,00" },
  { tipo: "Oftalmologia", valor: "200,00" },
  { tipo: "Ortopedia", valor: "140,00" },
  { tipo: "Endocrinologia", valor: "160,00" },
  { tipo: "Neurologia", valor: "250,00" },
  { tipo: "Psiquiatria", valor: "220,00" },
  { tipo: "Gastroenterologia", valor: "190,00" },
  { tipo: "Urologia", valor: "180,00" },
  { tipo: "Otorrinolaringologia", valor: "130,00" },
  { tipo: "Hematologia", valor: "170,00" },
  { tipo: "Reumatologia", valor: "210,00" },
  { tipo: "Oncologia", valor: "300,00" },
  { tipo: "Nefrologia", valor: "220,00" },
  { tipo: "Infectologia", valor: "200,00" },
  { tipo: "Alergologia", valor: "110,00" },
  { tipo: "Pneumologia", valor: "150,00" },
  { tipo: "Angiologia", valor: "240,00" },
  { tipo: "Cirurgia Plástica", valor: "300,00" },
  { tipo: "Radiologia", valor: "180,00" },
  { tipo: "Geriatria", valor: "140,00" },
  { tipo: "Imunologia", valor: "160,00" },
  { tipo: "Nutrologia", valor: "130,00" },
  { tipo: "Proctologia", valor: "170,00" },
  { tipo: "Fonoaudiologia", valor: "90,00" },
  { tipo: "Acupuntura", valor: "80,00" },
  { tipo: "Medicina Esportiva", valor: "220,00" },
];

const Appointments = () => {
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
  }, [input, indexOfFirst, indexOfLast]);

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
