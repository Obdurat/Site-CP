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
  //     'O crédito consignado é aquele tipo de empréstimo que você solicita e passa a ter o valor das parcelas cobrado direto na folha de pagamento, ou seja, o desconto é feito diretamente no salário ou na aposentadoria.',
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
  sub: 'Principais produtos',
  title: 'Nossos Produtos',
  description:
    'Conheça nossos produtos e serviços financeiros, e escolha o que melhor se encaixa em suas necessidades.',
  productCards: [
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Crédito Consignado',
      description:
        'O crédito consignado é aquele tipo de empréstimo que você solicita e passa a ter o valor das parcelas cobrado direto na folha de pagamento, ou seja, o desconto é feito diretamente no salário ou na aposentadoria.',
      cta: 'Ver produtos',
      href: '/credito',
      image: '/assets/images/credit.png',
    },
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Crédito Imobiliário',
      description:
        'Em linhas simples, podemos definir crédito imobiliário como um empréstimo fornecido para que uma pessoa compre um imóvel, fazendo um pagamento financiado. O produto é oferecido pelos bancos e as instituições financeiras que quitam o imóvel e recebem o pagamento diretamente do comprador.',
      cta: 'Ver produtos',
      href: '/cartao',
      image: '/assets/images/credit.png',
    },
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Crédito Pessoal',
      description:
        'O crédito pessoal é uma forma de empréstimo destinada para Pessoa Física. Com isso, nesta modalidade de crédito, o consumidor pede o empréstimo sem necessidade de oferecer garantia ou de alienar um bem que está comprando. As taxas de CET variam de acordo com a instituição financeira e a análise de crédito.',
      cta: 'Ver produtos',
      href: '/produto/credito/credito-pessoal',
      image: '/assets/images/credit.png',
    },
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Operações Estruturadas',
      description:
        'As Operações Estruturadas são soluções financeiras personalizadas para atender demandas específicas de projetos complexos. Essa modalidade oferece planejamento estratégico detalhado, estruturação de crédito com garantias e prazos sob medida, além de apoio especializado para fusões, aquisições, investimentos em infraestrutura e expansão de negócios. Destinadas a empresas de médio e grande porte, garantem suporte financeiro robusto para projetos estratégicos.',
      cta: 'Ver produtos',
      href: '/produto/outros/operacoes-estruturadas',
      image: '/assets/images/credit.png',
    },
    {
      icon: <BriefcaseBusiness className="size-8 text-cyan-500" />,
      title: 'Consórcio',
      description:
        'Um grupo de pessoas ou empresas, que quer adquirir um bem ou serviço, abre uma poupança comum. Todos os participantes têm garantido o direito de usar essa conta para a compra do bem ou serviço, em algum momento, dentro de um prazo determinado.',
      cta: 'Ver produtos',
      href: '/produto/consorcio',
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
      className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-8 text-secondary fadeIn"
    >
      <div className="container mx-auto grid lg:gap-24 gap-16 col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex-1 flex flex-col gap-2 w-full">
            <p className="text-accent-foreground text-sm">
              {productsContent.sub}
            </p>
            <h1 className="text-cptext-primary text-4xl font-bold">
              {productsContent.title}
            </h1>
          </div>

          <p className="text-xl px-8 border-cyan-400 border-l-4 flex items-center text-cptext-primary">
            {productsContent.description}
          </p>
        </div>
        <div className="grid-cols-1 lg:grid-cols-2 gap-8 hidden md:grid"></div>
        <div className="md:hidden max-w-[90vw]"></div>
      </div>

      {productsContent.productCards.map((card, i) => (
        <div
          key={Math.random()}
          className={cn(
            'flex gap-4 bg-background rounded-3xl overflow-hidden bg-cptext-blue flex-col sm:flex-row',
            // i % 3 === 0 &&
            i % 2 === 0 && 'sm:flex-row-reverse',
            'lg:col-span-2'
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
