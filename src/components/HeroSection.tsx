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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaMapLocation, FaUserDoctor } from "react-icons/fa6";

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
      <div className="flex absolute z-50 flex-col gap-4 w-fit mt-16">
        <h1 className="text-4xl font-extrabold">
          A melhor escolha para <br /> a sua saúde!
        </h1>
        <p className="text-slate-600 text-lg">
          Conte com a confiança e segurança dos nossos <br /> laboratórios e
          médicos. Agende já sua consulta
        </p>
        <Button className="flex mt-4 text-base w-fit px-8 gap-4 py-6">
          Agende já <FaArrowRight />
        </Button>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-fit gap-4"
        >
          <CarouselContent>
            {caroselOptions.map((item, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <Card className="w-[250px]">
                  <CardHeader className="text-slate-700 flex flex-col gap-4 ">
                    <CardTitle>{item.icon}</CardTitle>
                    <CardDescription className="flex items-center justify-between gap-2 font-semibold">
                      {item.title} <FaArrowRight />
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex w-full justify-end">
        <div className="relative max-[940px]:hidden w-[688px] h-[484px]">
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
