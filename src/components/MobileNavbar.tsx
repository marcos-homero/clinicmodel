import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  ];

  return (
    <div className="min-[940px]:hidden">
      <Sheet>
        <SheetTrigger>
          <FaAlignJustify size={32} className="text-primary" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4 bg-white">
          <SheetHeader>
            <SheetTitle className="flex justify-center py-4">
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <SheetDescription className="flex flex-col gap-4">
            <Link
              href={
                "https://api.whatsapp.com/send?phone=551535370431&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              }
              target="_blank"
              className="flex h-9 items-center justify-center gap-2 rounded-lg bg-sky-50 px-4 text-xs font-normal text-slate-600 shadow-sm hover:bg-sky-200"
            >
              <FaWhatsapp size={24} className="text-primary" />
              Agende pelo Whatsapp
            </Link>
            <Link href="tel:1535370431" className="w-full">
              <Button className="h-9 w-full gap-2 bg-green-50 text-xs font-normal text-slate-600 shadow-sm hover:bg-green-200">
                <FaPhoneSquare size={24} className="text-primary" />
                Agende pelo Telefone
              </Button>
            </Link>
            <Link href="https://www.google.com" target="_blank">
              <Button className="h-10 w-full gap-2 border-[1px] border-primary bg-white font-bold text-primary shadow-sm hover:bg-primary hover:text-white">
                Resultado de exames <FaArrowDown />
              </Button>
            </Link>

            <Separator />
            <div className="flex flex-col items-center gap-4 py-4">
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
            <Separator />
            <Link
              href="/agendamentos"
              className="flex items-center justify-center gap-2 border-none text-sm font-semibold text-primary outline-0"
            >
              <FaCalendar size={16} />
              <p className="w-fit">Meus Agendamento</p>
              <FaArrowDown size={16} />
            </Link>

            <Select>
              <SelectTrigger className="flex w-full items-center justify-center gap-4 border-none bg-white text-sm font-semibold">
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
            <div className="flex w-full justify-around gap-4 text-primary">
              <Link href="https://www.instagram.com/" target="_blank">
                <FaInstagram size={36} />
              </Link>
              <Link href="https://www.facebook.com/" target="_blank">
                <FaFacebookSquare size={36} />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=551535370431"
                target="_blank"
              >
                <FaWhatsappSquare size={36} />
              </Link>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
