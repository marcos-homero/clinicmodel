import MedicalTests from "./components/MedicalTests";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  preparo: string;
}

const page = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_LINK}/examesmedicos.json`
  );
  const newData = await data.json();

  const converted: CardProps[] = Object.values(newData);

  return (
    <div className="w-full">
      <MedicalTests data={converted} />
    </div>
  );
};

export default page;
