"use client";

import MedicalServices from "@/components/MedicalServices";
import { SearchContext } from "@/contexts/SearchContext";
import { useContext, useEffect, useState } from "react";
import test from "@/public/test.svg";

interface CardProps {
  tipo: string;
  valor: string;
}

const data = [
  { tipo: "Hemograma", valor: "70,00" },
  { tipo: "Ressonância Magnética", valor: "250,00" },
  { tipo: "Ultrassonografia", valor: "120,00" },
  { tipo: "Tomografia Computadorizada", valor: "280,00" },
  { tipo: "Eletrocardiograma", valor: "80,00" },
  { tipo: "Endoscopia", valor: "200,00" },
  { tipo: "Exame de Urina", valor: "60,00" },
  { tipo: "Raio-X", valor: "90,00" },
  { tipo: "Mamografia", valor: "150,00" },
  { tipo: "Ecocardiograma", valor: "180,00" },
  { tipo: "Colonoscopia", valor: "230,00" },
  { tipo: "Densitometria Óssea", valor: "170,00" },
  { tipo: "Teste de Esforço", valor: "190,00" },
  { tipo: "Holter 24 Horas", valor: "210,00" },
  { tipo: "Exame de Glicemia", valor: "70,00" },
  { tipo: "Exame de Colesterol", valor: "80,00" },
  { tipo: "Audiometria", valor: "100,00" },
  { tipo: "Exame de TSH", valor: "75,00" },
  { tipo: "Exame de Fezes", valor: "65,00" },
  { tipo: "Broncoscopia", valor: "220,00" },
  { tipo: "Polissonografia", valor: "300,00" },
  { tipo: "Eletroneuromiografia", valor: "250,00" },
  { tipo: "Cintilografia", valor: "270,00" },
  { tipo: "Testes Alérgicos", valor: "140,00" },
  { tipo: "Ecodoppler", valor: "160,00" },
  { tipo: "Biópsia", valor: "240,00" },
  { tipo: "Exame de Creatinina", valor: "60,00" },
  { tipo: "Exame de PCR", valor: "95,00" },
  { tipo: "Exame de Vitamina D", valor: "110,00" },
  { tipo: "PET Scan", valor: "300,00" },
];

const MedicalTests = () => {
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
