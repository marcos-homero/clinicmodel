interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico: string;
}

const page = async ({ params }: { params: { id: string } }) => {
  const data = await fetch("http://localhost:3000/examesmedicos.json");
  const posts = await data.json();

  const converted: CardProps[] = Object.values(posts);

  const oi = converted.find((post) => post.id === params.id);

  return <div>{oi?.tipo}</div>;
};

export default page;
