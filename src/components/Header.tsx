"use client";

import {
  FaArrowDown,
  FaCalendar,
  FaMapMarked,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "./Logo";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    { path: "/exames", name: "Exames" },
    { path: "/convenios", name: "Convênios" },
    { path: "/blog", name: "Blog" },
  ];

  const [city, setCity] = useState("Itapetininga");

  return (
    <header className="text-secondary pt-4 pb-2 bg-white flex flex-col shadow-sm items-center justify-center w-full">
      <section className="flex px-6 max-w-[1300px] gap-8 w-full max-[940px]:justify-between max-[940px]:items-center ">
        <Logo />
        <div className="max-[940px]:hidden flex flex-col gap-2 w-full justify-between">
          <div className="flex gap-4 justify-between">
            <div className="flex gap-4">
              <Button className=" bg-sky-50 h-9 gap-2 text-xs shadow-sm text-slate-600 font-normal">
                <FaWhatsapp size={24} className="text-primary" />
                Agende pelo Whatsapp
              </Button>
              <Button className=" bg-green-50 h-9 gap-2 text-xs shadow-sm text-slate-600 font-normal">
                <FaWhatsapp size={24} className="text-primary" />
                Agende pelo Telefone (15) 3537-0431
              </Button>
            </div>
            <Button className=" bg-white border-[1px] h-10 border-primary gap-2 shadow-sm text-primary font-bold">
              Resultado de exames <FaArrowDown />
            </Button>
          </div>
          <Separator className="mt-4" />
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-8">
              {navOptions.map((item, index) => (
                <Link
                  className="font-normal text-sm hover:text-primary hover:font-bold text-slate-700"
                  href={item.path}
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex border-none items-center gap-4 text-primary text-sm font-semibold">
                  <FaCalendar size={16} />
                  <p className="w-full">Meus Agendamento</p>
                  <FaArrowDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-slate-500">
                  <DropdownMenuItem>Agendar</DropdownMenuItem>
                  <DropdownMenuItem>Meus agendamentos</DropdownMenuItem>
                  <DropdownMenuItem>Cancelar agendamento</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Separator orientation="vertical" />
              <Select>
                <SelectTrigger className="flex items-center border-none w-fit gap-4 bg-white text-sm font-semibold  ">
                  <FaMapMarked size={16} />
                  <SelectValue placeholder="Selecionar Cidade" />
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
