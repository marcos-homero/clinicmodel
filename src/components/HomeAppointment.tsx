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
    <div className="flex gap-4 justify-between py-8 w-full overflow-x-auto whitespace-nowrap">
      {appointments.map((item) => (
        <Link
          key={item.id}
          href={`/exames/${item.id}`}
          className="max-[940px]:w-[200px] max-[940px]:h-fit w-1/4"
        >
          <Card key={item.id}>
            <CardHeader className="text-slate-700 max-[940px]:w-[200px] h-fit flex flex-col gap-4 justify-between">
              <CardTitle className=" text-base h-[64px] text-wrap">
                <p>{item.tipo}</p>
                <p className="text-sm text-slate-500">{item.medico}</p>
              </CardTitle>
              <span className="h-[1px] bg-slate-200" />
              <CardContent className="flex p-0 flex-col gap-2">
                <p className="text-xs text-slate-600">A partir de:</p>
                <p className="text-xl font-bold text-black">{item.valor}</p>
                <p className="text-xs text-slate-600 text-wrap">
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
