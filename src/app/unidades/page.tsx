import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaMapPin } from "react-icons/fa";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import intelimed from "@/../public/intelimed.png";
import Image from "next/image";

const page = () => {
  const unidades = [
    {
      andress: "Rua Coronel Fernando Prestes, 144 - Centro",
      city: "Itapetininga",
      image: intelimed,
    },
    {
      andress: "Rua Coronel Fernando Prestes, 144 - Centro",
      city: "Sorocaba",
      image: intelimed,
    },
  ];

  return (
    <section className="flex w-full flex-col items-center pb-16">
      <div className="relative flex h-[224px] w-full flex-col items-center justify-center bg-[#152e56]">
        <div className="flex w-full max-w-[1300px] flex-row items-center justify-between gap-2 px-6 py-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-white sm:text-2xl min-[940px]:text-4xl">
              Unidades
            </h1>
          </div>

          <FaMapPin className="text-white" size={64} />
        </div>
        <div className="absolute -bottom-[15%] w-full max-w-[1300px] px-6"></div>
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
                <BreadcrumbPage>Unidades</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex w-full max-w-[1300px] gap-16 px-6 pt-8">
        <div className="flex w-full gap-16 max-[940px]:flex-col">
          {unidades.map((item, index) => (
            <Card key={index} className="w-full max-[940px]:h-fit">
              <div className="relative h-[240px] w-full rounded-t-md sm:h-[360px]">
                <Image
                  className="rounded-t-md"
                  alt="Familia feliz"
                  fill
                  sizes="100vw"
                  src={item.image}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader className="flex h-fit flex-col justify-between gap-4 text-slate-700 max-[940px]:w-full">
                <CardTitle>{item.city}</CardTitle>
                <CardContent className="flex flex-col gap-2 p-0">
                  <p>{item.andress}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
