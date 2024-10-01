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
    <div className="h-fit w-full">
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
              <Card className="flex items-center bg-primary p-4">
                <CardContent className="flex w-full items-center justify-around p-4 max-[940px]:flex-col max-[940px]:gap-8">
                  <div className="h-24 w-24">
                    <Image src={appointment} alt="oi" />
                  </div>
                  <div className="flex w-full flex-col gap-4 min-[940px]:w-[60%]">
                    <h1 className="text-center text-2xl font-semibold text-white">
                      Consulta de qualidade e humanizada é na Intelimed
                    </h1>
                    <p className="text-center text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat eveniet tempora facilis aspernatur omnis, numquam
                      nobis vel laboriosam
                    </p>
                  </div>
                  <Button className="border border-white hover:bg-sky-800">
                    Agende agora! <FaArrowRight />
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex w-full justify-center gap-1 py-2 text-sm text-muted-foreground">
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
