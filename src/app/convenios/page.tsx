import Image from "next/image";
import familypaint from "@/../public/familypaint.jpg";
import logomissao from "@/../public/missaologotransparente.png";
import Link from "next/link";
import { BsPostcardHeart } from "react-icons/bs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaHouseChimneyMedical } from "react-icons/fa6";

const page = () => {
  const partners = [
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
    { site: "https://www.google.com.br", image: logomissao },
  ];

  return (
    <section className="flex w-full flex-col items-center pb-16">
      <div className="relative flex h-[224px] w-full flex-col items-center justify-center bg-[#152e56]">
        <div className="flex w-full max-w-[1300px] flex-row items-center justify-between gap-2 px-6 py-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-white sm:text-2xl min-[940px]:text-4xl">
              Convênio
            </h1>
          </div>

          <BsPostcardHeart className="text-white" size={64} />
        </div>
      </div>
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
                <BreadcrumbPage>Convênios</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex w-full max-w-[1300px] gap-16 px-6 pb-16 pt-8">
        <div className="flex w-full flex-col gap-4 min-[940px]:absolute min-[940px]:z-50 min-[940px]:mt-16 min-[940px]:w-[840px] min-[940px]:pl-8">
          <h1 className="text-wrap text-4xl font-extrabold min-[940px]:w-3/4">
            Verifique se o seu plano de saúde é aceito pela nossa clínica
          </h1>
          <p className="text-wrap text-slate-600 min-[940px]:w-3/4">
            Trabalhamos com os principais convênios para garantir o melhor atendimento. Confira abaixo se o seu plano faz parte da nossa rede de parceiros.
          </p>
        </div>
        <div className="flex w-full justify-end max-[940px]:hidden">
          <div className="relative h-[360px] w-full rounded-lg border">
            <Image
              className="rounded-lg"
              alt="Familia feliz"
              fill
              sizes="100vw"
              src={familypaint}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="grid max-w-[1300px] grid-cols-4 gap-8 px-6 max-[940px]:grid-cols-2">
        {partners.map((item, index) => (
          <Link
            href={item.site}
            target="_blank"
            key={index}
            className="hover: w-auto rounded-lg border bg-card p-8 text-card-foreground shadow-sm transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <Image alt="Familia feliz" sizes="100vw" src={item.image} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
