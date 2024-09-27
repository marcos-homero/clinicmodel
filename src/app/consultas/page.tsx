import Appointments from "./components/Appointments";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico: string;
}

const page = async () => {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const data = await fetch(`${origin}/consultasmedicas.json`);
  const newData = await data.json();

  const converted: CardProps[] = Object.values(newData);

  return (
    <div className="w-full">
      <Appointments data={converted} />
    </div>
  );
};

export default page;
