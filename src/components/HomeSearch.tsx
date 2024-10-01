import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Search from "./ui/search";
import HomeAppointment from "./HomeAppointment";
import HomeTest from "./HomeTest";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HomeSearch = () => {
  return (
    <section className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">O que você precisa ?</h1>
        <p className="text-slate-600">Agende online suas consultas e exames.</p>
      </div>
      <Tabs defaultValue="consultas" className="w-full">
        <TabsList className="w-full bg-white p-0">
          <TabsTrigger
            value="consultas"
            className="w-1/2 rounded-none border-b-4 border-slate-300 text-lg hover:border-primary hover:text-primary data-[state=active]:border-primary data-[state=active]:font-bold data-[state=active]:text-primary"
          >
            Consultas
          </TabsTrigger>
          <TabsTrigger
            value="exames"
            className="w-1/2 rounded-none border-b-4 border-slate-300 text-lg hover:border-primary hover:text-primary data-[state=active]:border-primary data-[state=active]:font-bold data-[state=active]:text-primary"
          >
            Exames
          </TabsTrigger>
        </TabsList>
        <TabsContent className="pt-4" value="consultas">
          <Search type="consultas" />
          <HomeAppointment />
          <div className="flex items-center gap-4 pt-2 max-[940px]:flex-col">
            <p className="text-slate-600">
              Não encontrou o que você precisava?
            </p>
            <Link
              href="/consultas"
              className="flex items-center gap-2 font-medium text-primary hover:underline"
            >
              Acesse todos as nossas consultas <FaArrowRight />
            </Link>
          </div>
        </TabsContent>
        <TabsContent className="pt-4" value="exames">
          <Search type="exames" />
          <HomeTest />
          <div className="flex items-center gap-4 pt-2 max-[940px]:flex-col">
            <p className="text-slate-600">
              Não encontrou o que você precisava?
            </p>
            <Link
              href="/exames"
              className="flex items-center gap-2 font-medium text-primary hover:underline"
            >
              Acesse todos os nossos exames <FaArrowRight />
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default HomeSearch;
