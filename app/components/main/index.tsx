import { CreditSlider } from '../creditSlider';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
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
    image: {
      src: '/assets/images/consignado.png',
      alt: 'Casal com uma criança',
    },
    section: 'consignado',
  },
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito imobiliário para realizar seu sonho',
    description:
      'Aqui você encontra as melhores taxas e condições para o seu crédito imobiliário. Simule agora e descubra o valor que você pode solicitar.',
    cta: 'Seja nosso parceiro',
    image: {
      src: '/assets/images/imobiliario.png',
      alt: 'Casal com uma maquete de casa',
    },
    section: 'imobiliario',
  },
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito pessoal para você realizar seus sonhos',
    description:
      'Aqui você encontra as melhores taxas e condições para o seu crédito pessoal. Simule agora e descubra o valor que você pode solicitar.',
    cta: 'Seja nosso parceiro',
    image: {
      src: '/assets/images/credito-pessoal.png',
      alt: 'Mulher com um cartão de crédito',
    },
    section: 'home',
  },
];

const Hero = ({ hero }: any) => {
  return (
    <section>
      <section className="bg-cpsection-primary h-full flex items-center justify-center pt-16">
        <div>
          <div className="container mx-auto flex items-center flex-col lg:flex-row justify-between gap-8">
            <div className="w-[70%] max-w-[600px] mr-8 max-h-[580px]">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-full"
              />
            </div>
            <div className="mx-w-[448px] flex flex-col gap-4">
              <p className="text-gray-300 lg:text-xl text-xs">{hero.sub}</p>
              <h1 className="text-secondary lg:text-5xl text-3xl font-bold">
                {hero.title}
              </h1>
              <p className="text-white lg:text-xl text-xs">
                {hero.description}
              </p>
              <CreditSlider section={hero.section} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export function Main() {
  const autoPlay = Autoplay({
    delay: 5e3,
    stopOnMouseEnter: true,
    stopOnFocusIn: true,
  });

  return (
    <section>
      <Carousel
        className="w-full bg-cptext-blue"
        opts={{ loop: true }}
        plugins={[autoPlay]}
      >
        <CarouselContent>
          {mainContent.map((hero, index) => (
            <CarouselItem key={index}>
              <Hero hero={hero} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </section>
  );
}
