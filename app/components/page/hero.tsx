import { Link } from 'react-router';
import { PayIcon } from '../ui/icons';

const SectionLink = ({ title, link }: { title: string; link: string }) => (
  <Link
    to={link}
    className="flex items-center gap-2 hover:underline w-fit text-cpblue-300"
  >
    {title}
  </Link>
);

export function Hero() {
  return (
    <div>
      <section className="bg-[url('/assets/images/bg/bg-pattern-03.jpg')] h-full flex items-center justify-center bg-cover bg-top">
        <div className="container mx-auto flex items-center pt-8 flex-col lg:flex-row justify-between gap-8 relative w-full min-h-[500px] max-w-[800px]">
          <div className="lg:max-w-[60%] flex flex-col gap-4 backdrop-filter backdrop-blur-sm p-8 rounded-3xl bg-[rgba(69,71,135,.08)] absolute z-10 ">
            <h1 className="text-cpblue-400 lg:text-7xl text-3xl font-bold">
              Consignado Público
            </h1>
            <p className="lg:text-xl text-xs text-gray-500">
              Empréstimo voltado para funcionários públicos estadual e
              municipal, com as parcelas debitadas diretamente na folha de
              pagamento.
            </p>
          </div>
          <div className="h-[300px] lg:h-fit lg:w-[50%] lg:max-w-[448px] mr-8 absolute lg:right-0 bottom-0 ">
            <img
              src="/assets/images/page.png"
              alt="Hero"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto -mt-8 rounded-2xl relative z-10 bg-background shadow-md hidden lg:block">
        <div className="lg:p-6 p-0 pt-6 flex gap-6 justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="bg-accent rounded-lg p-2 w-fit">
              <PayIcon className="size-12" />
            </div>
            <h2 className="text-xl font-bold">Consignado Público</h2>
          </div>
          <div className="flex gap-8">
            <SectionLink title="O que é" link="#oque-e" />
            <SectionLink title="Vantagens" link="#vantagens" />
            <SectionLink title="Parceiros" link="#parceiros" />
            <SectionLink title="Seja parceiro" link="#seja-parceiro" />
          </div>
        </div>
      </section>
    </div>
  );
}
