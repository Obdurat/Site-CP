import { CreditSlider } from '../creditSlider';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

const mainContent = [
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito consignado descomplicado',
    description: `Esqueça a burocracia! Aqui você garante as melhores taxas e condições para o seu crédito consignado.
Simule agora mesmo e descubra o valor ideal para realizar seus planos com facilidade!
`,
    cta: 'Seja nosso parceiro',
    image: {
      src: '/assets/images/consignado.png',
      alt: 'Homem com um cartão de crédito',
      class: '',
    },
    section: 'consignado',
  },
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito imobiliário para realizar seus sonhos',
    description: `Quer conquistar a casa própria ou investir em grandes oportunidades? Aqui você encontra as melhores taxas e condições para o crédito imobiliário ideal para você.
Simule agora e descubra o valor que pode transformar seus planos em realidade!`,
    cta: 'Seja nosso parceiro',
    image: {
      src: '/assets/images/imobiliario.png',
      alt: 'Homen com uma casa de brinquedo na mão',
      class: '',
    },
    section: 'imobiliario',
  },
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito pessoal para você realizar seus sonhos',
    description: `Crédito pessoal para realizar seus sonhos
Não adie seus planos! Aqui você encontra as melhores taxas e condições para transformar seus sonhos em realidade.
Simule agora e descubra o valor perfeito para você!`,
    cta: 'Seja nosso parceiro',
    image: {
      src: '/assets/images/credito-pessoal.png',
      alt: 'Casal com passaport',
      class: '',
    },
    section: 'home',
  },
];

const Hero = ({ hero }: any) => {
  return (
    <section>
      <section className="bg-cpsection-primary h-full flex items-center justify-center pt-16">
        <div>
          <div className="container mx-auto flex items-center flex-col-reverse lg:flex-row justify-between gap-8">
            <div className={cn('w-[70%] max-w-[600px] mr-8', hero.image.class)}>
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
    delay: 2e4,
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
