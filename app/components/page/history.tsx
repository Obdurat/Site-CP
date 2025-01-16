import { MoveRight } from 'lucide-react';
import { Button } from '../ui/button';
import { PayIcon } from '../ui/icons';
// Faça história com a Bevi
export function BePartOfHistory() {
  return (
    <section className="">
      <div
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-44 gap-16"
        id="seja-parceiro"
      >
        <div className="w-auto h-full overflow-hidden rounded-tr-[30%] rounded-bl-[30%] rounded-tl-[8%] rounded-br-[8%] bg-gradient-to-r from-cyan-100 to-cyan-500">
          <img
            src="/assets/images/page.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 col-span-1.5">
          <h1 className="text-3xl font-bold text-cpblue-400">
            Faça história com a CP
          </h1>
          <p className="text-sm text-gray-500">
            O maior marketplace de crédito financeiro do país oferece as
            melhores soluções financeiras para você. A Bevi é uma gigante no
            mercado financeiro e quer levar você, rumo ao topo também.
          </p>

          <div className="flex items-center gap-4">
            <PayIcon className="self-start size-10" />
            <div>
              <h2 className="text-lg font-bold text-cpblue-300">
                Somos líder de mercado
              </h2>
              <p className="text-sm text-gray-500">
                Temos as melhores soluções para sua operação decolar e parceria
                com as principais instituições financeiras do país.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PayIcon className="self-start size-10" />
            <div>
              <h2 className="text-lg font-bold text-cpblue-300">
                Sempre à disposição para te atender
              </h2>
              <p className="text-sm text-gray-500">
                Nosso suporte conta com uma equipe especializada no atendimento
                via chat, e-mail, telefone e WhatsApp
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PayIcon className="self-start size-10" />
            <div>
              <h2 className="text-lg font-bold text-cpblue-300">
                Exclusividade e informação para nossos parceiros
              </h2>
              <p className="text-sm text-gray-500">
                Temos um portal exclusivo, o Bevi Ajuda, que possui conteúdos
                completos sobre nossos produtos e as novidades do mercado
              </p>
            </div>
          </div>

          <Button
            className="text-primary text-md w-fit border-cyan-600 text-cyan-600"
            variant="outline"
            size="lg"
          >
            Vem ser destaque no mercado com a gente
            <MoveRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
