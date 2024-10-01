import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const HomeTest = () => {
  const tests = [
    {
      id: "a1d2f34b-47f6-4e1d-bc7a-631b4dfb1b15",
      tipo: "Hemograma",
      valor: "70,00",
      descricao:
        "O hemograma é um exame de sangue que avalia as células sanguíneas.",
      preparo: "Não é necessário jejum.",
    },
    {
      id: "b3c5e612-2b4f-4e9d-9b9e-51976f6c9f68",
      tipo: "Ressonância Magnética da Pelve",
      valor: "250,00",
      descricao:
        "A ressonância magnética usa campos magnéticos para gerar imagens detalhadas de órgãos e tecidos.",
      preparo:
        "Pode ser necessário jejum de 4 a 6 horas e evitar objetos metálicos.",
    },
    {
      id: "d6b7f2ae-e9c2-4d84-9db9-27667c73d9a1",
      tipo: "Ultrassonografia",
      valor: "120,00",
      descricao:
        "A ultrassonografia usa ondas sonoras para capturar imagens de estruturas internas do corpo.",
      preparo:
        "Dependendo da área a ser examinada, pode ser necessário beber água antes do exame.",
    },
    {
      id: "e8d3f5c1-b1f6-4184-8f9f-a6d5674b8a5e",
      tipo: "Tomografia Computadorizada",
      valor: "280,00",
      descricao:
        "A tomografia computadorizada usa raios-X para criar imagens detalhadas de áreas internas do corpo.",
      preparo:
        "Pode ser necessário jejum de 4 horas e a ingestão de contraste.",
    },
  ];

  return (
    <div className="flex w-full justify-between gap-4 overflow-x-auto whitespace-nowrap py-8">
      {tests.map((item) => (
        <Link
          key={item.id}
          href={`/exames/${item.id}`}
          className="w-1/4 max-[940px]:h-fit max-[940px]:w-[200px]"
        >
          <Card key={item.id}>
            <CardHeader className="flex h-fit flex-col justify-between gap-4 text-slate-700 max-[940px]:w-[200px]">
              <CardTitle className="h-[64px] text-wrap text-base">
                {item.tipo}
              </CardTitle>
              <span className="h-[1px] bg-slate-200" />
              <CardContent className="flex flex-col gap-2 p-0">
                <p className="text-xs text-slate-600">A partir de:</p>
                <p className="text-xl font-bold text-black">{item.valor}</p>
                <p className="text-wrap text-xs text-slate-600">
                  O valor da consulta pode variar de acordo com o covênio.
                </p>
                <div className="flex justify-end">
                  <FaArrowCircleRight className="items-end" />
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default HomeTest;
