import React from "react";
import { Button } from "./ui/button";
import {
  FaArrowRight,
  FaCalendar,
  FaFileMedicalAlt,
  FaMapMarked,
} from "react-icons/fa";
import Image from "next/image";
import family from "@/../public/family.jpg";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaUserDoctor } from "react-icons/fa6";
import Link from "next/link";

const HeroSection = () => {
  const caroselOptions = [
    {
      icon: <FaUserDoctor size={24} />,
      title: "Verificar Médicos",
      href: "/consultas",
    },
    {
      icon: <FaFileMedicalAlt size={24} />,
      title: "Verificar Exames",
      href: "/exames",
    },
    {
      icon: <FaCalendar size={24} />,
      title: "Meus agendamentos",
      href: "/agendamentos",
    },
    {
      icon: <FaMapMarked size={24} />,
      title: "Unidades",
      href: "/unidades",
    },
  ];

  return (
    <section className="flex">
      <div className="flex w-full flex-col gap-4 min-[940px]:absolute min-[940px]:z-50 min-[940px]:mt-16 min-[940px]:w-[840px]">
        <h1 className="w-fit text-wrap text-4xl font-extrabold">
          Cuidando da Sua Saúde, Transformando Vidas!
        </h1>
        <p className="w-fit text-wrap text-lg text-slate-600">
          Oferecemos um atendimento de excelência para promover o bem-estar <br /> e a qualidade de vida. Agende já sua consulta
        </p>
        <Link
          href={
            "https://api.whatsapp.com/send?phone=551535370431&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
          }
        >
          <Button className="mt-4 flex w-fit gap-4 px-8 py-6 text-base">
            Agende já <FaArrowRight />
          </Button>
        </Link>

        <div className="my-8 grid w-full grid-cols-2 grid-rows-2 gap-4 min-[940px]:flex min-[940px]:flex-wrap">
          {caroselOptions.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card className="h-[118px] min-[940px]:w-[186px]">
                <CardHeader className="flex h-full flex-col justify-between text-slate-700">
                  <CardTitle>{item.icon}</CardTitle>
                  <CardDescription className="flex items-center gap-2 font-semibold">
                    {item.title} <FaArrowRight />
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-end max-[940px]:hidden">
        <div className="relative h-[484px] w-[688px]">
          <Image
            className="rounded-xl"
            alt="Familia feliz"
            fill
            sizes="100vw"
            src={family}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
