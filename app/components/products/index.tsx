import { BriefcaseBusiness, MoveRight } from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';
import { useMemo, useRef } from 'react';
import { CarouselContainer } from '@/components/carousel';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';

const productsContent = {
  // consigned: {
  //   icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
  //   sub: '/products',
  //   title: 'Consignado',
  //   description:
  //     'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
  //   cta: 'Saiba mais',
  //   href: '/consignado',
  //   image: '/assets/images/consigned.png',
  //   cards: [
  //     {
  //       title: 'Consignado INSS',
  //       description:
  //         'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio e home equity, refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
  //       image: '/assets/images/credit.png',
  //       href: '/consignado/consignado-inss',
  //     },
  //     {
  //       title: 'Consignado Público',
  //       description:
  //         'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio e home equity, refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
  //       image: '/assets/images/credit.png',
  //       href: '/consignado/consignado-publico',
  //     },
  //     {
  //       title: 'Consignado Privado',
  //       description:
  //         'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio e home equity, refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
  //       image: '/assets/images/credit.png',
  //       href: '/consignado/consignado-privado',
  //     },
  //     {
  //       title: 'Consignado Federal',
  //       description:
  //         'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio e home equity, refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
  //       image: '/assets/images/credit.png',
  //       href: '/consignado/consignado-federal',
  //     },
  //   ],
  // },
  productCards: [
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Crédito Consignado',
      description:
        'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
      cta: 'Ver produtos',
      href: '/credito',
      image: '/assets/images/credit.png',
    },
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Cartão',
      description:
        'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
      cta: 'Ver produtos',
      href: '/cartao',
      image: '/assets/images/credit.png',
    },
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Seguros',
      description:
        'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
      cta: 'Ver produtos',
      href: '/seguros',
      image: '/assets/images/credit.png',
    },
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Investimentos',
      description:
        'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
      cta: 'Ver produtos',
      href: '/investimentos',
      image: '/assets/images/credit.png',
    },
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Consórcio',
      description:
        'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
      cta: 'Ver produtos',
      href: '/consorcio',
      image: '/assets/images/credit.png',
    },
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Crédito',
      description:
        'Oferecemos soluções em crédito consignado, pessoal, imobiliário, FGTS, consórcio, home equity e refinanciamento imobiliário, sempre com a parceria dos melhores bancos do mercado.',
      cta: 'Ver produtos',
      href: '/credito',
      image: '/assets/images/credit.png',
    },
  ],
};

// export function Products() {
//   const cards = useMemo(
//     () =>
//       productsContent.consigned.cards.map((card) => (
//         <div
//           key={Math.random()}
//           className="flex gap-4 bg-background rounded-3xl overflow-hidden"
//         >
//           <div className="flex gap-4 flex-col w-full lg:max-w-[60%] p-8 sm:pr-0">
//             <h3 className="text-2xl font-bold">{card.title}</h3>
//             <p className="text-xl">{card.description}</p>
//             <Link
//               to={card.href}
//               className="text-cyan-500 p-0 text-xl w-fit flex items-center gap-2"
//             >
//               Saiba mais
//               <MoveRight className="size-4" />
//             </Link>
//           </div>
//           <div className="max-size-[242px] aspect-square overflow-hidden hidden sm:block">
//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       )),
//     []
//   );

//   const componentRef = useRef(null);

//   useAnimationToRef(componentRef);

//   return (
//     <section>
//       <section className="bg-blue-950 py-16 lg:py-32">
//         <div
//           ref={componentRef}
//           className="container mx-auto flex items-start flex-col relative justify-between gap-8"
//         >
//           <div className="max-w-[512px] flex flex-col gap-4">
//             <div className="flex gap-2 items-center">
//               <div> {productsContent.consigned.icon}</div>
//               <p className="text-secondary lg:text-lg text-sm">
//                 {productsContent.consigned.sub}
//               </p>
//             </div>
//             <h1 className="text-secondary lg:text-3xl text-xl font-bold">
//               {productsContent.consigned.title}
//             </h1>
//             <p className="text-white lg:text-md text-sm">
//               {productsContent.consigned.description}
//             </p>
//             <Link
//               to={productsContent.consigned.href}
//               className="text-cyan-500 p-0 text-md w-fit flex items-center gap-2"
//             >
//               {productsContent.consigned.cta}
//               <MoveRight className="size-4" />
//             </Link>
//           </div>
//           <div className="max-w-[448px] mr-8 absolute -top-32 -right-16 hidden lg:block">
//             <img
//               src={productsContent.consigned.image}
//               alt={productsContent.consigned.title}
//               className="w-full h-full"
//             />
//           </div>
//           <div>
//             <div className="md:grid grid-cols-1 xl:grid-cols-2 gap-8 relative z-10 hidden">
//               {cards}
//             </div>
//             <div className="md:hidden max-w-[90vw]">
//               <CarouselContainer components={cards} />
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

export function ProductCards() {
  const componentRef = useRef(null);
  useAnimationToRef(componentRef);
  return (
    <section
      ref={componentRef}
      className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-secondary fadeIn"
    >
      {productsContent.productCards.map((card, i) => (
        <div
          key={Math.random()}
          className={cn(
            'flex gap-4 bg-background rounded-3xl overflow-hidden bg-cptext-blue flex-col sm:flex-row',
            i % 3 === 0 && 'lg:col-span-2'
          )}
        >
          <div className="flex gap-4 flex-col w-full lg:max-w-[60%] p-8 sm:pr-0">
            <h3 className="text-2xl font-bold">{card.title}</h3>
            <p className="text-xl">{card.description}</p>
            <Link
              to={card.href}
              className="text-cptext-cyan p-0 text-xl w-fit flex items-center gap-2"
            >
              Saiba mais
              <MoveRight className="size-4" />
            </Link>
          </div>
          <div className="max-size-[242px] aspect-square overflow-hidden sm:block">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
