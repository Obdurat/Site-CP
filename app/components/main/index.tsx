import { CreditSlider } from '../creditSlider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const mainContent = [
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito consignado sem burocracia',
    description:
      'Aqui você encontra as melhores taxas e condições para o seu crédito consignado. Simule agora e descubra o valor que você pode solicitar.',
    cta: 'Seja nosso parceiro',
    image: '/assets/images/page.png',
  },
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito imobiliário para realizar seu sonho',
    description:
      'Aqui você encontra as melhores taxas e condições para o seu crédito imobiliário. Simule agora e descubra o valor que você pode solicitar.',
    cta: 'Seja nosso parceiro',
    image: '/assets/images/page.png',
  },
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito pessoal para você realizar seus sonhos',
    description:
      'Aqui você encontra as melhores taxas e condições para o seu crédito pessoal. Simule agora e descubra o valor que você pode solicitar.',
    cta: 'Seja nosso parceiro',
    image: '/assets/images/page.png',
  },
];

const Hero = ({ hero }: any) => {
  return (
    <section>
      <section className="bg-cpsection-primary h-full flex items-center justify-center pt-16">
        <div>
          <div className="container mx-auto flex items-center flex-col lg:flex-row justify-between gap-8">
            <div className="w-[70%] max-w-[600px] mr-8">
              <img src={hero.image} alt="Hero" className="w-full h-full" />
            </div>
            <div className="mx-w-[448px] flex flex-col gap-4">
              <p className="text-gray-300 lg:text-xl text-xs">{hero.sub}</p>
              <h1 className="text-secondary lg:text-5xl text-3xl font-bold">
                {hero.title}
              </h1>
              <p className="text-white lg:text-xl text-xs">
                {hero.description}
              </p>
              <CreditSlider />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export function Main() {
  return (
    <section>
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {mainContent.map((hero, index) => (
            <CarouselItem key={index}>
              <Hero hero={hero} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-1/2 left-0 right-0 flex justify-between">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}
