import { Button } from '@/components/ui/button';
import { PayIcon } from '@/components/ui/icons';
import type { Data } from '@/routes/data';
import { MoveRight } from 'lucide-react';

type HistoryCardProps = {
  title: string;
  description: string;
};

const HistoryCard = ({ title, description }: HistoryCardProps) => (
  <div className="flex items-center gap-4">
    <PayIcon className="self-start size-10" />
    <div>
      <h2 className="text-lg font-bold text-cpblue-300">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const data = {
  title: 'Faça história com a CP',
  description: `O maior marketplace de crédito financeiro do país oferece as
            melhores soluções financeiras para você. A Bevi é uma gigante no
            mercado financeiro e quer levar você, rumo ao topo também.`,
  cta: 'Vem ser destaque no mercado com a gente',
  cards: [
    {
      title: 'Somos líder de mercado',
      description:
        'Temos as melhores soluções para sua operação decolar e parceria com as principais instituições financeiras do país.',
    },
    {
      title: 'Sempre à disposição para te atender',
      description:
        'Nosso suporte conta com uma equipe especializada no atendimento via chat, e-mail, telefone e WhatsApp.',
    },
    {
      title: 'Exclusividade e informação para nossos parceiros',
      description:
        'Temos um portal exclusivo, o Bevi Ajuda, que possui conteúdos completos sobre nossos produtos e as novidades do mercado.',
    },
  ],
};

export function BePartOfHistory() {
  return (
    <section>
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
          <h1 className="text-3xl font-bold text-cpblue-400">{data.title}</h1>
          <p className="text-sm text-gray-500">{data.description}</p>

          {data.cards.map((card, index) => (
            <HistoryCard key={Math.random()} {...card} />
          ))}
          <Button
            className="text-primary text-md w-fit border-cyan-600 text-cptext-cyan"
            variant="outline"
            size="lg"
          >
            {data.cta}
            <MoveRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
