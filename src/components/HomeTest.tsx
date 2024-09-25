import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowCircleRight } from "react-icons/fa";

const HomeTest = () => {
  const tests = [
    {
      type: "Raio-X",
      firstValue: "R$ 40,00",
    },
    {
      type: "Ultrassom",
      firstValue: "R$ 90,00",
    },
    {
      type: "Eletrocardiograma",
      firstValue: "R$ 25,00",
    },
    {
      type: "Hemograma",
      firstValue: "R$ 12,00",
    },
  ];

  return (
    <div className="flex gap-4 justify-between py-8 w-full overflow-x-auto whitespace-nowrap">
      {tests.map((item, index) => (
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

export default HomeTest;
