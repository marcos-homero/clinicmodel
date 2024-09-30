import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaAlignJustify,
  FaArrowDown,
  FaCalendar,
  FaFacebookSquare,
  FaInstagram,
  FaMapMarked,
  FaPhoneSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { useState } from "react";

const MobileNavbar = () => {
  const [city, setCity] = useState("Itapetininga");

  const navOptions = [
    { path: "/consultas", name: "Consultas" },
    { path: "/exames", name: "Exames" },
    { path: "/convenios", name: "Convênios" },
    { path: "/blog", name: "Blog" },
  ];

  return (
    <div className="min-[940px]:hidden">
      <Sheet>
        <SheetTrigger>
          <FaAlignJustify size={32} className="text-primary" />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-white gap-4">
          <SheetHeader>
            <SheetTitle className="py-4 flex justify-center">
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <SheetDescription className="flex flex-col gap-4">
            <Link
              href={
                "https://api.whatsapp.com/send?phone=551535370431&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              }
              target="_blank"
              className="flex justify-center items-center rounded-lg px-4 bg-sky-50 hover:bg-sky-200 h-9 gap-2 text-xs shadow-sm text-slate-600 font-normal"
            >
              <FaWhatsapp size={24} className="text-primary" />
              Agende pelo Whatsapp
            </Link>
            <Button className=" bg-green-50 hover:bg-green-200  h-9 gap-2 text-xs shadow-sm text-slate-600 font-normal">
              <FaPhoneSquare size={24} className="text-primary" />
              Agende pelo Telefone
            </Button>
            <Separator />
            <div className="flex flex-col py-4 items-center gap-4">
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
            <Separator />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-center border-none items-center text-primary text-sm font-semibold outline-0">
                <div className="flex gap-2">
                  <FaCalendar size={16} />
                  <p className="w-full">Meus Agendamento</p>
                  <FaArrowDown size={16} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-slate-500">
                <DropdownMenuItem>Agendar</DropdownMenuItem>
                <DropdownMenuItem>Meus agendamentos</DropdownMenuItem>
                <DropdownMenuItem>Cancelar agendamento</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Select>
              <SelectTrigger className="flex justify-center items-center border-none w-full gap-4 bg-white text-sm font-semibold  ">
                <div className="flex gap-2">
                  <FaMapMarked size={16} />
                  <SelectValue placeholder={city} />
                  <FaArrowDown size={16} />
                </div>
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
            <Separator />
            <div className="flex text-primary gap-4 w-full justify-around">
              <FaInstagram size={36} />
              <FaFacebookSquare size={36} />
              <FaWhatsappSquare size={36} />
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
