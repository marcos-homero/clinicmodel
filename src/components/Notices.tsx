"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import appointment from "@/../public/femaleappointment.svg";
import { Button } from "./ui/button";
import { FaArrowRight, FaCircle } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const Notices = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full h-fit">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="bg-primary flex p-4 items-center">
                <CardContent className="flex max-[940px]:flex-col max-[940px]:gap-8 p-4 w-full justify-around items-center">
                  <div className="w-24 h-24">
                    <Image src={appointment} alt="oi" />
                  </div>
                  <div className="flex flex-col w-full min-[940px]:w-[60%] gap-4">
                    <h1 className="text-white text-center  text-2xl font-semibold">
                      Consulta de qualidade e humanizada é na Intelimed
                    </h1>
                    <p className="text-white text-center ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat eveniet tempora facilis aspernatur omnis, numquam
                      nobis vel laboriosam
                    </p>
                  </div>
                  <Button className="border hover:bg-sky-800 border-white">
                    Agende agora! <FaArrowRight />
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-1 w-full justify-center py-2 text-sm text-muted-foreground">
        {Array.from({ length: count }).map((_, index) => (
          <FaCircle
            size={6}
            className={`${
              current >= index + 1 ? "text-primary" : "text-slate-400"
            }`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Notices;
