import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowCircleRight } from "react-icons/fa";

const HomeAppointment = () => {
  const appointments = [
    {
      type: "Clínico Geral",
      firstValue: "R$ 60,00",
    },
    {
      type: "Ortopedia",
      firstValue: "R$ 120,00",
    },
    {
      type: "Ginecologia",
      firstValue: "R$ 70,00",
    },
    {
      type: "Pediatria",
      firstValue: "R$ 60,00",
    },
  ];

  return (
    <div className="flex gap-4 justify-between py-8 w-full overflow-x-auto whitespace-nowrap">
      {appointments.map((item, index) => (
        <Card
          key={index}
          className="max-[940px]:w-[200px] max-[940px]:h-[260px] w-1/4"
        >
          <CardHeader className="text-slate-700 max-[940px]:w-[200px] h-[260px] flex flex-col gap-4 justify-between">
            <CardTitle className="text-base">{item.type}</CardTitle>
            <span className="h-[1px] bg-slate-200" />
            <CardContent className="flex p-0 flex-col gap-2">
              <p className="text-xs text-slate-600">A partir de:</p>
              <p className="text-xl font-bold text-black">{item.firstValue}</p>
              <p className="text-xs text-slate-600 text-wrap">
                O valor da consulta pode variar de acordo com o covênio.
              </p>
              <div className="flex justify-end">
                <FaArrowCircleRight className="items-end" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default HomeAppointment;
