import { BriefcaseBusiness, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CarouselContainer } from '@/components/carousel';
import { useMemo, useRef } from 'react';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';

const benefitsContent = {
  sub: 'Nossos benefícios',
  title: 'Quais são os benefícios de ser nosso parceiro?',
  description: `Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e
  refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.
  Por aqui, a confiança e o cuidado com você vêm em primeiro lugar.`,
  cta: 'Seja parceiro e faça parte da nossa história',
  cards: [
    {
      title: 'Atendimento Personalizado',
      description:
        'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
      icon: <BriefcaseBusiness className="size-8" />,
    },
    {
      title: 'As melhores taxas',
      description:
        'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
      icon: <BriefcaseBusiness className="size-8" />,
    },
    {
      title: 'Segurança e Transparência',
      description:
        'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
      icon: <BriefcaseBusiness className="size-8" />,
    },
    {
      title: 'Facilidade e Agilidade',
      description:
        'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
      icon: <BriefcaseBusiness className="size-8" />,
    },
  ],
};

export function Benefits() {
  const cards = useMemo(() => {
    return benefitsContent.cards.map((card) => (
      <div className="flex gap-4 shadow-[0_0px_50px_-20px_rgba(0,0,0,0.2)] p-4 sm:p-8 rounded-3xl max-w-[600px] min-h-[460px] sm:min-h-fit h-full flex-col sm:flex-row ">
        <div className="mt-1 bg-cyan-100 p-3 size-fit rounded-md">
          {card.icon}
        </div>
        <div className="flex gap-4 flex-col">
          <h3 className="text-2xl font-bold">{card.title}</h3>
          <p className="text-xl">{card.description}</p>
        </div>
      </div>
    ));
  }, []);
  const contentRef = useRef(null);
  useAnimationToRef(contentRef);

  return (
    <section className=" flex flex-col gap-12 items-center">
      <div className="container mx-auto grid lg:gap-24 gap-16">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex-1 flex flex-col gap-2 w-full">
            <p className="text-accent-foreground text-xl">
              {benefitsContent.sub}
            </p>
            <h1 className="text-secondary-foreground text-4xl font-bold">
              {benefitsContent.title}
            </h1>
          </div>

          <p className="text-xl px-8 border-cyan-400 border-l-4">
            {benefitsContent.description}
          </p>
        </div>
        <div className="grid-cols-1 lg:grid-cols-2 gap-8 hidden md:grid">
          {cards}
        </div>
        <div className="md:hidden max-w-[90vw]">
          <CarouselContainer components={cards} />
        </div>
      </div>
      <Button
        className="text-primary text-md w-fit border-cyan-600 text-cyan-600"
        variant="outline"
        size="lg"
      >
        {benefitsContent.cta}
        <MoveRight className="size-4" />
      </Button>
    </section>
  );
}
