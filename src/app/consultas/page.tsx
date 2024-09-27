import Appointments from "./components/Appointments";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico: string;
}

const page = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_LINK}/consultasmedicas.json`
  );
  const newData = await data.json();

  const converted: CardProps[] = Object.values(newData);

  return (
    <div className="w-full">
      <Appointments data={converted} />
    </div>
  );
};

export default page;
