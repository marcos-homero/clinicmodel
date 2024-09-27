import React from "react";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico: string;
}

const page = async ({ params }: { params: { id: string } }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_LINK}/consultasmedicas.json`
  );
  const newData = await data.json();

  const converted: CardProps[] = Object.values(newData);

  const oi = converted.find((post) => post.id === params.id);

  return <div>{oi?.tipo}</div>;
};

export default page;
