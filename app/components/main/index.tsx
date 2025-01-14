import { BriefcaseBusiness } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { useRef } from 'react';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { CreditSlider } from '../creditSlider';

const mainContent = {
  hero: {
    sub: 'Nosso propóstio é a sua Confiança',
    title: 'Transparência, Confiança e Resultado',
    description:
      'Desde 2020, ajudamos pessoas a alcançarem seus sonhos e objetivos financeiros de forma segura e transparente.',
    cta: 'Seja nosso parceiro',
    image: '/assets/images/hero.jpeg',
  },
  help: {
    title: 'Como podemos ajudar você?',
    sections: [
      {
        title: 'Nossos Produtos',
        icon: <BriefcaseBusiness className="size-8" />,
        links: [
          {
            title: 'Consignado',
            href: '/consignado/consignado-publico',
          },
          {
            title: 'Cartão',
            href: '/cartao',
          },
          {
            title: 'Seguro',
            href: '/seguro',
          },
          {
            title: 'Investimento',
            href: '/investimento',
          },
          {
            title: 'Consórcio',
            href: '/consorcio',
          },
        ],
      },
      {
        title: 'Para Parceiros',
        icon: <BriefcaseBusiness className="size-8" />,
        links: [
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-publico',
          },
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-publico',
          },
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-publico',
          },
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-publico',
          },
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-publico',
          },
        ],
      },
      {
        title: 'Trabalhe Conosco',
        icon: <BriefcaseBusiness className="size-8" />,
        links: [
          {
            title: 'Venha fazer parte do nosso time',
            href: '/trabalhe-conosco',
          },
        ],
      },
    ],
  },
};

export function Main() {
  const componentRef = useRef(null);
  useAnimationToRef(componentRef);
  return (
    <section>
      <section className="bg-blue-950 h-full flex items-center justify-center py-16">
        <div>
          <div
            ref={componentRef}
            className="container mx-auto flex items-center flex-col lg:flex-row justify-between gap-8"
          >
            <div className="md:w-[50%] w-[70%] max-w-[448px] mr-8">
              <img
                src="/assets/images/hero.jpeg"
                alt="Hero"
                className="w-full h-full"
              />
            </div>
            <div className="mx-w-[448px] flex flex-col gap-4">
              <p className="text-muted-foreground lg:text-xl text-xs">
                {mainContent.hero.sub}
              </p>
              <h1 className="text-secondary lg:text-5xl text-3xl font-bold">
                {mainContent.hero.title}
              </h1>
              <p className="text-white lg:text-xl text-xs">
                {mainContent.hero.description}
              </p>
              <CreditSlider />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto -mt-16 rounded-3xl relative z-10 bg-background shadow-md">
        <div className="lg:p-16 p-0 pt-6 flex flex-col gap-6">
          <h2 className="text-2xl font-bold">{mainContent.help.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainContent.help.sections.map((section) => (
              <div key={section.title} className="flex gap-4">
                <div className="mt-1 bg-cyan-100 p-3 size-fit rounded-md">
                  {section.icon}
                </div>
                <div key={section.title} className="flex gap-4 flex-col">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {section.links.map(({ title, href }) => (
                      <Link to={href}>
                        <a className="text-md text-muted-foreground font-medium hover:underline justify-between transition-colors hover:text-accent-foreground focus:text-accent-foreground">
                          {title}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
