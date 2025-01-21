import { BriefcaseBusiness, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CarouselContainer } from '@/components/carousel';
import { useMemo, useRef } from 'react';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';

const benefitsContent = {
  sub: 'Nos acompanhe nas redes',
  title: 'Nossas Redes',
  description: `Acompanhe nossas redes sociais e fique por dentro de todas as novidades e promoções!`,
  instagram: {},
  facebook: {},
  linkedin: {},
  whatsapp: {},
  googleReviews: {},
};

export function SocialMedia() {
  const contentRef = useRef(null);
  useAnimationToRef(contentRef);

  return (
    <section className=" flex flex-col gap-12 items-center">
      <div className="container mx-auto grid lg:gap-24 gap-16">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex-1 flex flex-col gap-2 w-full">
            <p className="text-accent-foreground text-sm">
              {benefitsContent.sub}
            </p>
            <h1 className="text-secondary-foreground text-4xl font-bold">
              {benefitsContent.title}
            </h1>
          </div>

          <p className="text-xl px-8 border-cyan-400 border-l-4 flex items-center">
            {benefitsContent.description}
          </p>
        </div>
        <div className="grid-cols-1 lg:grid-cols-2 gap-8 hidden md:grid"></div>
        <div className="md:hidden max-w-[90vw]"></div>
      </div>

      
    </section>
  );
}
