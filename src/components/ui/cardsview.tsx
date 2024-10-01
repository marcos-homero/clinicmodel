import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

interface CardProps {
  id: string;
  tipo: string;
  valor: string;
  descricao: string;
  medico?: string;
  preparo?: string;
}

interface FilteredData {
  filteredData: CardProps[];
  type: string;
}

const CardsView = ({ filteredData, type }: FilteredData) => {
  return (
    <div className="flex w-full items-center justify-center pb-8 ">
      <div className="max-[480px]:grid-cols-1 max-[480px]:grid-rows-12 max-sm:grid-cols-2 max-sm:5 max-sm:grid-rows-6 max-[940px]:grid-cols-3 max-[940px]:grid-rows-4 grid grid-cols-4 grid-rows-3 gap-4 w-full px-6 max-w-[1300px]">
        {filteredData.map((item) => (
          <Link key={item.id} href={`/${type}/${item.id}`}>
            <Card className="max-[940px]:w-fit max-[940px]:h-fit">
              <CardHeader className="text-slate-700 max-[940px]:w-full h-fit flex flex-col gap-4 justify-between">
                <CardTitle className="max-[940px]:text-sm text-base h-[64px] text-wrap">
                  <p>{item.tipo}</p>
                  {item.medico && (
                    <p className="text-sm text-slate-500">{item.medico}</p>
                  )}
                </CardTitle>
                <span className="h-[1px] bg-slate-200" />
                <CardContent className="flex p-0 flex-col gap-2">
                  <p className="text-xs text-slate-600">A partir de:</p>
                  <p className="text-xl font-bold max-sm:text-lg text-black">
                    R$ {item.valor}
                  </p>
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
    </div>
  );
};

export default CardsView;
