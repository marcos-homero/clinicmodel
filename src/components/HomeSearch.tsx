import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Search from "./ui/search";
import HomeAppointment from "./HomeAppointment";
import HomeTest from "./HomeTest";

const HomeSearch = () => {
  return (
    <section className="w-full flex flex-col gap-8">
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
        <TabsContent className="py-4" value="consultas">
          <Search />
          <HomeAppointment />
        </TabsContent>
        <TabsContent className="py-4" value="exames">
          <Search />
          <HomeTest />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default HomeSearch;
