import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const HomeAppointment = () => {
  const appointments = [
    {
      id: "7632bf74-3c6d-4276-abdd-1fd65eac701a",
      tipo: "Clínico Geral",
      valor: "59,00",
      descricao:
        "O clínico geral é responsável pelo diagnóstico inicial e tratamento de diversas condições de saúde.",
      medico: "Dr. Carlos Silva",
    },
    {
      id: "802d9030-af64-44c1-9bda-3b09376b191e",
      tipo: "Cardiologia",
      valor: "150,00",
      descricao:
        "O cardiologista cuida do sistema cardiovascular, incluindo o coração e os vasos sanguíneos.",
      medico: "Dr. Fernando Costa",
    },
    {
      id: "7fa68f69-af42-475e-82b3-5180a81c1e19",
      tipo: "Dermatologia",
      valor: "120,00",
      descricao:
        "O dermatologista trata doenças e condições relacionadas à pele, cabelo e unhas.",
      medico: "Dra. Laura Mendes",
    },
    {
      id: "43f990cd-aae9-48b2-a5f3-cdbdff643afc",
      tipo: "Ginecologia",
      valor: "180,00",
      descricao:
        "O ginecologista cuida da saúde do sistema reprodutor feminino.",
      medico: "Dra. Ana Paula Souza",
    },
  ];

  return (
    <div className="flex w-full justify-between gap-4 overflow-x-auto whitespace-nowrap py-8">
      {appointments.map((item) => (
        <Link
          key={item.id}
          href={`/consultas/${item.id}`}
          className="w-1/4 max-[940px]:h-fit max-[940px]:w-[200px]"
        >
          <Card key={item.id}>
            <CardHeader className="flex h-fit flex-col justify-between gap-4 text-slate-700 max-[940px]:w-[200px]">
              <CardTitle className="h-[64px] text-wrap text-base">
                <p>{item.tipo}</p>
                <p className="text-sm text-slate-500">{item.medico}</p>
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

export default HomeAppointment;
