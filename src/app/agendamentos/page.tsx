import React from "react";
import { BsPostcardHeart } from "react-icons/bs";
import Appointments from "./components/Appointments";

const page = () => {
  return (
    <section className="flex w-full flex-col items-center pb-16">
      <div className="relative flex h-[224px] w-full flex-col items-center justify-center bg-[#152e56]">
        <div className="flex w-full max-w-[1300px] flex-row items-center justify-between gap-2 px-6 py-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-white sm:text-2xl min-[940px]:text-4xl">
              Agendamentos
            </h1>
          </div>

          <BsPostcardHeart className="text-white" size={64} />
        </div>
      </div>
      <Appointments />
    </section>
  );
};

export default page;
