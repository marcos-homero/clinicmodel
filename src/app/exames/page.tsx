import React from "react";
import MedicalTests from "./components/MedicalTests";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  preparo: string;
}

const page = async () => {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const data = await fetch(`${origin}/examesmedicos.json`);
  const newData = await data.json();

  const converted: CardProps[] = Object.values(newData);

  return (
    <div className="w-full">
      <MedicalTests data={converted} />
    </div>
  );
};

export default page;
