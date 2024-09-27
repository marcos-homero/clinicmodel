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
      <div className="grid grid-cols-5 grid-rows-2 gap-4 px-6 max-w-[1300px]">
        {filteredData.map((item) => (
          <Link key={item.id} href={`/${type}/${item.id}`}>
            <Card className="max-[940px]:w-[200px] max-[940px]:h-fit">
              <CardHeader className="text-slate-700 max-[940px]:w-[200px] h-fit flex flex-col gap-4 justify-between">
                <CardTitle className="text-base h-[48px]">
                  {item.tipo}
                </CardTitle>
                <span className="h-[1px] bg-slate-200" />
                <CardContent className="flex p-0 flex-col gap-2">
                  <p className="text-xs text-slate-600">A partir de:</p>
                  <p className="text-xl font-bold text-black">
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
