import Appointments from "./components/Appointments";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico: string;
}

const page = async () => {
  const data = await fetch("http://localhost:3000/consultasmedicas.json");
  const posts = await data.json();
  const converted: CardProps[] = Object.values(posts);

  return (
    <div className="w-full">
      <Appointments data={converted} />
    </div>
  );
};

export default page;
