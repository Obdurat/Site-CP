import { ArrowRight, CircleHelp } from 'lucide-react';
import { PayIcon } from '../ui/icons';
import type { JSX } from 'react';
import { cn } from '@/lib/utils';

const mockData = {
  title: 'Conheça o Consignado Público',
  sections: [
    {
      icon: <CircleHelp className="size-12" />,
      title: 'O que é?',
      description: `É um empréstimo específico para servidores públicos que atuam em
        Governos, Prefeituras e Autarquias. O pagamento para esta modalidade
        de crédito é feito diretamente na folha de pagamento destes
        públicos, o que evita a inadimplência. Nem todas as pessoas estão
        aptas a contratar este tipo de empréstimo, pois ele é destinado a
        pessoas com renda fixa e estável, assim como outras modalidades
        consignáveis.`,
    },
    {
      icon: <CircleHelp className="size-12" />,
      title: 'Para quem?',
      subSections: [
        {
          icon: <ArrowRight className="size-6 text-cyan-500" />,
          title: 'Governos',
          description: `Um convênio composto por funcionários públicos estaduais que
            atuam nos órgãos administrados pelos governos dos estados.
            Possui todas as vantagens consignáveis exclusivas da modalidade
            como taxa de juros baixas e prazos mais longos.`,
        },
        {
          icon: <ArrowRight className="size-6 text-cyan-500" />,
          title: 'Prefeituras',
          description: `Convênio formado por funcionários públicos municipais que atuam
            nos órgãos administrados pelas prefeituras das cidades. Assim
            como as outras modalidades, também possui todas as vantagens
            consignáveis.`,
        },
      ],
    },
  ],
};

function SectionHeader({
  icon,
  title,
  className,
}: {
  icon: JSX.Element;
  title: string;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className={cn(className)}>{icon}</div>
      <h2 className="text-2xl font-bold text-secondary">{title}</h2>
    </div>
  );
}

function InfoSection({ icon, title, description, subSections }: any) {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        icon={icon}
        title={title}
        className="bg-accent rounded-lg p-2 w-fit"
      />
      {description && <p className="text-xs text-secondary">{description}</p>}
      {subSections &&
        subSections.map((subSection: any, index: number) => (
          <div key={Math.random()}>
            <SectionHeader icon={subSection.icon} title={subSection.title} />
            <p className="text-xs text-secondary">{subSection.description}</p>
          </div>
        ))}
    </div>
  );
}

export function About() {
  return (
    <div className="container mx-auto flex flex-col gap-4" id="oque-e">
      <div className="flex items-center gap-8">
        <div className="bg-accent rounded-lg p-2 w-fit">
          <PayIcon className="size-12" />
        </div>
        <h2 className="text-3xl font-bold text-cpblue-400">{mockData.title}</h2>
      </div>
      <div className="flex flex-col gap-6 backdrop-filter backdrop-blur-sm p-16 rounded-3xl bg-cpblue-300">
        {mockData.sections.map((section, index) => (
          <div key={Math.random()}>
            <InfoSection {...section} />
            {index < mockData.sections.length - 1 && (
              <div className="bg-cyan-500 h-1.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
