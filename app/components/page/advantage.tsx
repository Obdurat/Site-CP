import { ArrowRight, CircleHelp } from 'lucide-react';
import { PayIcon } from '../ui/icons';
import { cn } from '@/lib/utils';

type AdvantageCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
};

function AdvantageCard({
  title,
  description,
  icon,
  className,
}: AdvantageCardProps) {
  return (
    <div
      className={cn(
        'flex gap-4 shadow-[0_0px_50px_-20px_rgba(0,0,0,0.2)] p-4 sm:p-8 rounded-3xl sm:min-h-fit h-full flex-col sm:flex-row ',
        className
      )}
    >
      <div className="flex gap-4 flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-cpblue-300">{title}</h3>
          <div className="size-fit rounded-md">{icon}</div>
        </div>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
}

export function Advantage() {
  return (
    <div className="container mx-auto flex flex-col gap-9" id="vantagens">
      <h2 className="text-3xl font-bold text-cpblue-400">
        Consignado Público: principais vantagens
      </h2>
      <div className="grid lg:grid-cols-6 gap-4 grid-cols-1">
        <AdvantageCard
          title="Baixo índice de inadimplência"
          description="Por ter o desconto direto na folha de pagamento, a inadimplência é baixa e dessa forma, existe a possibilidade de liberação de crédito para quem está negativado."
          icon={<PayIcon className="size-8" />}
          className="col-span-2"
        />
        <AdvantageCard
          title="Taxas de juros mais baixas"
          description="As taxas de juros são mais baixas em relação a outras modalidades de crédito, o que torna o consignado público uma opção mais barata para quem precisa de crédito."
          icon={<PayIcon className="size-8" />}
          className="col-span-2"
        />
        <AdvantageCard
          title="Taxas de juros mais baixas"
          description="As taxas de juros são mais baixas em relação a outras modalidades de crédito, o que torna o consignado público uma opção mais barata para quem precisa de crédito."
          icon={<PayIcon className="size-8" />}
          className="col-span-2"
        />
        <AdvantageCard
          title="Taxas de juros mais baixas"
          description="As taxas de juros são mais baixas em relação a outras modalidades de crédito, o que torna o consignado público uma opção mais barata para quem precisa de crédito."
          icon={<PayIcon className="size-8" />}
          className="col-span-3"
        />
        <AdvantageCard
          title="Taxas de juros mais baixas"
          description="As taxas de juros são mais baixas em relação a outras modalidades de crédito, o que torna o consignado público uma opção mais barata para quem precisa de crédito."
          icon={<PayIcon className="size-8" />}
          className="col-span-3"
        />
      </div>
    </div>
  );
}
