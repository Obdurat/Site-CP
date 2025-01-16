import { ArrowRight, CircleHelp } from 'lucide-react';
import { PayIcon } from '../ui/icons';
import { Link } from 'react-router';

type SeeAlsoCardProps = {
  title: string;
  description: string;
  link: string;
};

function SeeAlsoCard({ title, description, link }: SeeAlsoCardProps) {
  return (
    <div className="bg-slate-50 rounded-3xl shadow-md p-4 flex flex-col gap-2 hover:shadow-[0_10px_50px_-10px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-0.5">
      <h3 className="flex items-center gap-2 text-2xl font-bold text-cpblue-400">
        {title}
      </h3>
      <p
        className="flex items-center gap-2 text-gray-600"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {description}
      </p>
      <Link
        to={link}
        className="flex items-center gap-2 hover:underline w-fit text-cpblue-300"
      >
        Conheça
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

export function SeeAlso() {
  return (
    <div className="container mx-auto flex flex-col gap-4 pb-8">
      <div className="flex items-center gap-8">
        <div className="bg-accent rounded-lg p-2 w-fit">
          <PayIcon className="size-12" />
        </div>
        <h2 className="text-3xl font-bold text-cpblue-400">Veja também</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SeeAlsoCard
          title="Como pagar"
          description="Veja como pagar a sua fatura de forma rápida e segura."
          link="/como-pagar"
        />
        <SeeAlsoCard
          title="Dúvidas frequentes"
          description="Tire suas dúvidas sobre o pagamento da fatura."
          link="/duvidas-frequentes"
        />
        <SeeAlsoCard
          title="Onde pagar"
          description="Conheça os locais onde você pode pagar a sua fatura."
          link="/onde-pagar"
        />
      </div>
    </div>
  );
}
