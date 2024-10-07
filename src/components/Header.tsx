"use client";

import {
  FaArrowDown,
  FaCalendar,
  FaMapMarked,
  FaPhoneSquare,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "./Logo";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import { Separator } from "./ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Header = () => {
  const navOptions = [
    { path: "/consultas", name: "Consultas" },
    { path: "/exames", name: "Exames" },
    { path: "/convenios", name: "Convênios" },
  ];

  const [city, setCity] = useState("Itapetininga");

  return (
    <header className="flex h-[137px] w-full flex-col items-center justify-center bg-white pb-2 pt-4 text-secondary shadow">
      <section className="flex w-full max-w-[1300px] gap-8 px-6 max-[940px]:items-center max-[940px]:justify-between">
        <Logo />
        <div className="flex w-full flex-col justify-between gap-2 max-[940px]:hidden">
          <div className="flex justify-between gap-4">
            <div className="flex gap-4">
              <Link
                href={
                  "https://api.whatsapp.com/send?phone=551535370431&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                }
                target="_blank"
                className="flex h-9 items-center gap-2 rounded-lg bg-sky-50 px-4 text-xs font-normal text-slate-600 shadow-sm hover:bg-sky-200"
              >
                <FaWhatsapp size={24} className="text-primary" />
                Agende pelo Whatsapp
              </Link>
              <Button className="h-9 gap-2 bg-green-50 text-xs font-normal text-slate-600 shadow-sm hover:bg-green-200">
                <FaPhoneSquare size={24} className="text-primary" />
                Agende pelo Telefone (15) 3537-0431
              </Button>
            </div>
            <Button className="h-10 gap-2 border-[1px] border-primary bg-white font-bold text-primary shadow-sm hover:bg-primary hover:text-white">
              Resultado de exames <FaArrowDown />
            </Button>
          </div>
          <Separator className="mt-4" />
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-8">
              {navOptions.map((item, index) => (
                <Link
                  className="text-sm font-normal text-slate-700 hover:font-bold hover:text-primary"
                  href={item.path}
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-8">
              <Link
                href="/agendamentos"
                className="flex items-center gap-2 border-none text-sm font-semibold text-primary outline-0"
              >
                <FaCalendar size={16} />
                <p className="w-full">Meus Agendamento</p>
                <FaArrowDown size={16} />
              </Link>

              <Select>
                <SelectTrigger className="flex w-fit items-center gap-2 border-none bg-white text-sm font-semibold">
                  <FaMapMarked size={16} />
                  <SelectValue placeholder={city} />
                  <FaArrowDown size={16} />
                </SelectTrigger>
                <SelectContent className="text-slate-500">
                  <SelectItem
                    onClick={() => setCity("São Paulo")}
                    value="São Paulo"
                  >
                    São Paulo
                  </SelectItem>
                  <SelectItem
                    onClick={() => setCity("Sorocaba")}
                    value="Sorocaba"
                  >
                    Sorocaba
                  </SelectItem>
                  <SelectItem
                    onClick={() => setCity("Itapetininga")}
                    value="Itapetininga"
                  >
                    Itapetininga
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <MobileNavbar />
      </section>
    </header>
  );
};

export default Header;
