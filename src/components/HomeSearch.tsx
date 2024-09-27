import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Search from "./ui/search";
import HomeAppointment from "./HomeAppointment";
import HomeTest from "./HomeTest";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HomeSearch = () => {
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">O que você precisa ?</h1>
        <p className="text-slate-600">Agende online suas consultas e exames.</p>
      </div>
      <Tabs defaultValue="consultas" className="w-full ">
        <TabsList className="w-full bg-white p-0">
          <TabsTrigger
            value="consultas"
            className="w-1/2 text-lg border-b-4 rounded-none data-[state=active]:font-bold data-[state=active]:text-primary data-[state=active]:border-primary border-slate-300 hover:text-primary hover:border-primary"
          >
            Consultas
          </TabsTrigger>
          <TabsTrigger
            value="exames"
            className="w-1/2 text-lg border-b-4 rounded-none data-[state=active]:font-bold data-[state=active]:text-primary data-[state=active]:border-primary border-slate-300 hover:text-primary hover:border-primary"
          >
            Exames
          </TabsTrigger>
        </TabsList>
        <TabsContent className="pt-4" value="consultas">
          <Search type="consultas" />
          <HomeAppointment />
          <div className="flex max-[940px]:flex-col gap-4 pt-2 items-center">
            <p className="text-slate-600">
              Não encontrou o que você precisava?
            </p>
            <Link
              href="/consultas"
              className="flex gap-2 text-primary hover:underline items-center font-medium"
            >
              Acesse todos as nossas consultas <FaArrowRight />
            </Link>
          </div>
        </TabsContent>
        <TabsContent className="pt-4" value="exames">
          <Search type="exames" />
          <HomeTest />
          <div className="flex max-[940px]:flex-col gap-4 pt-2 items-center">
            <p className="text-slate-600">
              Não encontrou o que você precisava?
            </p>
            <Link
              href="/exames"
              className="flex gap-2 text-primary hover:underline items-center font-medium"
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
