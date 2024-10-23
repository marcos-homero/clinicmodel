import React from "react";
import { FaBuilding } from "react-icons/fa";

const page = () => {
  return (
    <section className="flex w-full flex-col items-center gap-16 pb-16">
      <div className="relative flex h-[224px] w-full flex-col items-center justify-center bg-[#152e56]">
        <div className="flex w-full max-w-[1300px] flex-row items-center justify-between gap-2 px-6 py-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-white sm:text-2xl min-[940px]:text-4xl">
              Sobre a Nossa Clínica
            </h1>
          </div>

          <FaBuilding className="text-white" size={64} />
        </div>
      </div>
      <div className="w-full max-w-[1300px] items-center justify-between gap-2 px-6">
        <p className="mb-8 text-lg text-gray-500">
          Na <strong className="text-primary">Intelimed</strong>, nossa missão é
          oferecer cuidados médicos de excelência, colocando a saúde e o
          bem-estar de nossos pacientes sempre em primeiro lugar. Com uma equipe
          de profissionais altamente qualificados e comprometidos, buscamos
          proporcionar um atendimento humanizado e personalizado para cada
          pessoa que passa por nossas portas.
        </p>
        <p className="mb-8 text-lg text-gray-500">
          Nossa clínica é equipada com tecnologia de ponta, oferecendo uma ampla
          gama de serviços médicos e diagnósticos. Desde consultas preventivas
          até tratamentos especializados, estamos prontos para cuidar da sua
          saúde de forma integral.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-gray-800">Nossa Visão</h3>
        <p className="mb-8 text-lg text-gray-500">
          Acreditamos que a saúde é o bem mais precioso que podemos ter. Por
          isso, trabalhamos incansavelmente para promover o bem-estar físico e
          mental de nossos pacientes, com um atendimento que combina
          conhecimento técnico e empatia.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-gray-800">
          Nossos Valores
        </h3>
        <ul className="mb-8 list-disc pl-5 text-lg text-gray-500">
          <li>
            <strong className="text-gray-800">Cuidado Humanizado</strong>:
            Valorizamos cada paciente, oferecendo atenção individual e
            respeitando suas necessidades e preferências.
          </li>
          <li>
            <strong className="text-gray-800">Excelência Médica</strong>: Nossos
            profissionais estão em constante atualização para garantir o melhor
            tratamento e as práticas mais avançadas da medicina.
          </li>
          <li>
            <strong className="text-gray-800">Transparência e Ética</strong>:
            Nos comprometemos com um atendimento ético, claro e honesto, sempre
            respeitando o direito dos nossos pacientes a informações completas
            sobre sua saúde.
          </li>
        </ul>

        <h3 className="mb-4 text-2xl font-bold text-gray-800">Nossa Equipe</h3>
        <p className="mb-8 text-lg text-gray-500">
          Contamos com uma equipe multidisciplinar composta por médicos,
          enfermeiros e especialistas dedicados a oferecer o melhor em saúde e
          bem-estar. Cada membro de nossa equipe traz uma vasta experiência em
          suas áreas, sempre prontos para atender com eficiência e
          profissionalismo.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-gray-800">
          Nossas Instalações
        </h3>
        <p className="text-lg text-gray-500">
          Nossa clínica foi projetada para proporcionar conforto e tranquilidade
          aos nossos pacientes. Além de um ambiente moderno e acolhedor,
          investimos em equipamentos de última geração para garantir
          diagnósticos precisos e tratamentos eficazes.
        </p>
      </div>
    </section>
  );
};

export default page;
