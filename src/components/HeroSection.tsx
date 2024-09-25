import React from "react";
import { Button } from "./ui/button";
import {
  FaArrowRight,
  FaCalendar,
  FaFileMedicalAlt,
  FaMapMarked,
} from "react-icons/fa";
import Image from "next/image";
import family from "@/public/family.jpg";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaUserDoctor } from "react-icons/fa6";

const HeroSection = () => {
  const caroselOptions = [
    {
      icon: <FaUserDoctor size={24} />,
      title: "Verificar Médicos",
    },
    {
      icon: <FaFileMedicalAlt size={24} />,
      title: "Verificar Exames",
    },
    {
      icon: <FaCalendar size={24} />,
      title: "Meus agendamentos",
    },
    {
      icon: <FaMapMarked size={24} />,
      title: "Unidades",
    },
  ];

  return (
    <section className="flex">
      <div className="flex min-[940px]:absolute min-[940px]:z-50 flex-col w-full gap-4 min-[940px]:w-[940px] min-[940px]:mt-16">
        <h1 className="text-4xl font-extrabold w-fit text-wrap">
          A melhor escolha para <br /> a sua saúde!
        </h1>
        <p className="text-slate-600 text-lg w-fit text-wrap">
          Conte com a confiança e segurança dos nossos <br /> laboratórios e
          médicos. Agende já sua consulta
        </p>
        <Button className="flex mt-4 text-base w-fit px-8 gap-4 py-6">
          Agende já <FaArrowRight />
        </Button>
        <div className="grid grid-cols-2 grid-rows-2 min-[940px]:flex gap-4 min-[940px]:flex-wrap w-full my-8">
          {caroselOptions.map((item, index) => (
            <Card key={index} className="min-[940px]:w-[186px] h-[118px]">
              <CardHeader className="text-slate-700 flex flex-col h-full justify-between">
                <CardTitle>{item.icon}</CardTitle>
                <CardDescription className="flex items-center gap-2 font-semibold">
                  {item.title} <FaArrowRight />
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex max-[940px]:hidden w-full justify-end">
        <div className="relative  w-[688px] h-[484px]">
          <Image
            className="rounded-xl"
            alt="Familia feliz"
            fill
            src={family}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
