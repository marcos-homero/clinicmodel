import HomeSearch from "@/components/HomeSearch";
import Notices from "@/components/Notices";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaHouseChimneyMedical } from "react-icons/fa6";

const Appointments = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[1300px] flex-col gap-16 px-6 pb-8 pt-16">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="flex items-center gap-2 text-slate-600"
                  href="/"
                >
                  <FaHouseChimneyMedical size={16} /> Início
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Agendamentos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[1300px] flex-row gap-8 px-6 py-8 max-[940px]:flex-col">
          <div className="flex w-1/2 flex-col justify-between gap-8 rounded-md border border-slate-200 p-8 shadow-sm max-[940px]:w-full">
            <div className="flex flex-col">
              <h4 className="text-xl font-bold">
                Consulte sua consulta ou exame que estão agendados
              </h4>
              <p className="mt-2 w-full text-wrap text-xs text-slate-600">
                Remarcações de consultas e exames devem ser feitas através do
                WhatsApp ou Telefone.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4">
              <h5 className="text-xl font-bold">Informe o CPF do paciente</h5>
              <Input
                type="number"
                className="h-12 px-4"
                placeholder="Digite o CPF"
              />
              <Link
                href={`https://api.whatsapp.com/send?phone=551535370431`}
                target="_blank"
                className="w-full"
              >
                <Button className="flex w-full gap-4 px-8 py-6 text-base">
                  Consultar <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-1/2 flex-col justify-between gap-8 rounded-md border border-slate-200 p-8 shadow-sm max-[940px]:w-full">
            <div className="flex flex-col">
              <h4 className="text-xl font-bold">
                Precisa remarcar ou cancelar?
              </h4>
              <p className="mt-2 w-full text-wrap text-xs text-slate-600">
                Clique no botão abaixo para entrar em contato no whatsapp ou
                pode estar ligando no telefone (15) 3537-0431
              </p>
            </div>
            <div className="flex w-full flex-col gap-4">
              <Link
                href={`https://api.whatsapp.com/send?phone=551535370431`}
                target="_blank"
                className="w-full"
              >
                <Button className="flex w-full gap-4 px-8 py-6 text-base">
                  Remarcar <FaArrowRight />
                </Button>
              </Link>
              <Link
                href={`https://api.whatsapp.com/send?phone=551535370431`}
                target="_blank"
                className="w-full"
              >
                <Button className="flex w-full gap-4 bg-red-600 px-8 py-6 text-base hover:bg-red-500">
                  Cancelar <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[1300px] flex-col gap-16 px-6 py-8">
          <Notices />
          <HomeSearch />
        </div>
      </div>
    </section>
  );
};

export default Appointments;
