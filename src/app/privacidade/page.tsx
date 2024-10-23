import React from "react";
import { FaSheetPlastic } from "react-icons/fa6";

const page = () => {
  return (
    <section className="flex w-full flex-col items-center gap-16 pb-16">
      <div className="relative flex h-[224px] w-full flex-col items-center justify-center bg-[#152e56]">
        <div className="flex w-full max-w-[1300px] flex-row items-center justify-between gap-2 px-6 py-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-white sm:text-2xl min-[940px]:text-4xl">
              Termos de Privacidade
            </h1>
          </div>

          <FaSheetPlastic className="text-white" size={64} />
        </div>
      </div>
      <div className="w-full max-w-[1300px] items-center justify-between gap-2 px-6">
        <p className="mb-8 text-lg text-gray-500">
          A Intelimed está comprometida em proteger a privacidade e os dados
          pessoais de nossos pacientes e visitantes. Este documento explica como
          coletamos, usamos e protegemos suas informações, conforme as leis de
          proteção de dados vigentes.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-gray-800">
          Coleta de Informações
        </h3>
        <p className="mb-8 text-lg text-gray-500">
          Coletamos informações pessoais fornecidas por você ao agendar
          consultas, preencher formulários em nosso site ou entrar em contato
          conosco diretamente. Essas informações podem incluir nome, endereço,
          e-mail, número de telefone e dados relacionados à saúde.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-gray-800">
          Uso de Informações
        </h3>
        <p className="mb-8 text-lg text-gray-500">
          As informações coletadas são utilizadas para prestar serviços médicos,
          agendar consultas, realizar exames e fornecer suporte ao paciente.
          Também utilizamos seus dados para enviar comunicações relevantes sobre
          seu atendimento e, quando necessário, informações sobre atualizações
          em nossos serviços.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-gray-800">
          Compartilhamento de Informações
        </h3>
        <p className="mb-8 text-lg text-gray-500">
          Não compartilhamos suas informações pessoais com terceiros, exceto
          quando necessário para a prestação dos serviços solicitados, em
          conformidade com a legislação aplicável ou com o seu consentimento
          explícito.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-gray-800">
          Segurança de Dados
        </h3>
        <p className="mb-8 text-lg text-gray-500">
          Tomamos medidas de segurança adequadas para proteger suas informações
          contra acesso não autorizado, alteração, divulgação ou destruição.
          Essas medidas incluem a utilização de tecnologias de criptografia e
          práticas de segurança em nossos sistemas.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-gray-800">Seus Direitos</h3>
        <p className="mb-8 text-lg text-gray-500">
          Você tem o direito de acessar, corrigir ou excluir suas informações
          pessoais a qualquer momento. Para exercer esses direitos, entre em
          contato conosco através de nossos canais de atendimento disponíveis no
          site.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-gray-800">
          Alterações na Política de Privacidade
        </h3>
        <p className="text-lg text-gray-500">
          Reservamo-nos o direito de alterar esta Política de Privacidade a
          qualquer momento. As alterações serão comunicadas em nosso site, e
          recomendamos que você reveja periodicamente este documento para se
          manter atualizado.
        </p>
      </div>
    </section>
  );
};

export default page;
