import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { useRef } from 'react';

type AboutContent = {
  sub: string;
  title: string;
  description1: string;
  description2: string;
  image: {
    src: string;
    alt: string;
  };
};

export function AboutCard({
  content,
  index,
}: {
  content: AboutContent;
  index: number;
}) {
  const componentRef = useRef(null);

  useAnimationToRef(componentRef, { y: 0, x: index % 2 === 0 ? -50 : 50 });

  return (
    <div
      className={`container mx-auto grid grid-cols-1 lg:grid-cols-5 lg:gap-28 gap-16 mb-16`}
      ref={componentRef}
    >
      <div
        className={`w-auto aspect-square overflow-hidden rounded-lg col-span-2 order-${
          index % 2 === 0 ? 1 : 2
        }`}
      >
        <img
          src={content.image.src}
          alt={content.image.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={
          'flex-1 flex flex-col gap-4 col-span-3' +
          (index % 2 === 0 ? ' order-2' : ' order-1')
        }
      >
        <p className="text-cptext-grey text-md">{content.sub}</p>
        <h2 className="text-cptext-primary text-xl font-bold">
          {content.title}
        </h2>
        <p className="text-lg text-cptext-blue">{content.description1}</p>
        <p className="text-lg text-cptext-blue">{content.description2}</p>
      </div>
    </div>
  );
}

export function AboutList({ aboutContent }: { aboutContent: AboutContent[] }) {
  return (
    <section className="mb-20">
      {aboutContent.map((content, index) => (
        <AboutCard key={index} content={content} index={index} />
      ))}
    </section>
  );
}
