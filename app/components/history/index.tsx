import { Button } from '@/components/ui/button';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { MoveRight } from 'lucide-react';
import { useRef } from 'react';

const historyContent = {
  sub: 'Nossa história',
  title:
    'Desde 2020, ajudamos pessoas a alcançarem seus sonhos e objetivos financeiros de forma segura e transparente',
  description: `Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e
  refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.
  Por aqui, a confiança e o cuidado com você vêm em primeiro lugar. Seja para realizar um sonho,
  equilibrar as contas ou conquistar novos passos, estamos prontos para ajudar.
  Fale agora com um de nossos consultores e descubra a solução ideal para você!`,
  cta: 'Saiba mais',
  image: '/assets/images/history.jpeg',
};

export function History() {
  const componentRef = useRef(null);
  useAnimationToRef(componentRef);
  return (
    <section className="">
      <div
        ref={componentRef}
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-44 gap-16"
      >
        <div className="w-auto aspect-square overflow-hidden rounded-tr-[30%] rounded-bl-[30%] rounded-tl-[10%] rounded-br-[10%]">
          <img
            src={historyContent.image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 col-span-1.5">
          <p className="text-accent-foreground text-xl">{historyContent.sub}</p>
          <h1 className="text-secondary-foreground text-3xl font-bold">
            {historyContent.title}
          </h1>
          <p className="text-xl">{historyContent.description}</p>
          <Button
            className="text-primary text-md w-fit border-cyan-600 text-cyan-600"
            variant="outline"
            size="lg"
          >
            {historyContent.cta}
            <MoveRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
