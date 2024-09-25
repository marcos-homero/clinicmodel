import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Command, CommandInput } from "@/components/ui/command";

const HomeSearch = () => {
  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">O que você precisa ?</h1>
        <p className="text-slate-600">Agende online suas consultas e exames.</p>
      </div>
      <Tabs defaultValue="account" className="w-full ">
        <TabsList className="w-full bg-white p-0">
          <TabsTrigger
            value="account"
            className="w-1/2 text-lg border-b-4 rounded-none data-[state=active]:font-bold data-[state=active]:text-primary data-[state=active]:border-primary border-slate-300 hover:text-primary hover:border-primary"
          >
            Consultas
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="w-1/2 text-lg border-b-4 rounded-none data-[state=active]:font-bold data-[state=active]:text-primary data-[state=active]:border-primary border-slate-300 hover:text-primary hover:border-primary"
          >
            Exames
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Command>
            <CommandInput placeholder="Type a command or search..." />
          </Command>
        </TabsContent>
        <TabsContent value="password">
          <Command>
            <CommandInput placeholder="Type a command or search..." />
          </Command>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default HomeSearch;
