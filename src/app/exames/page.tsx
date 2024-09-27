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
  const data = await fetch("http://localhost:3000/exames.json");
  const posts = await data.json();

  const converted: CardProps[] = Object.values(posts);

  return (
    <div className="w-full">
      <MedicalTests data={converted} />
    </div>
  );
};

export default page;
