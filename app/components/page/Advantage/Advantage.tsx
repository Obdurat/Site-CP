import { PayIcon } from '@/components/ui/icons';
import { AdvantageCard } from './AdvantageCard';
import type { Data } from '@/routes/data';

export function Advantage({ data }: { data: Data['advantages'] }) {
  return (
    <div className="container mx-auto flex flex-col gap-9" id="vantagens">
      <h2 className="text-3xl font-bold text-cpblue-400">{data.title}</h2>
      <div className="grid lg:grid-cols-6 gap-4 grid-cols-1">
        {data.advantages.map((advantage, index) => (
          <AdvantageCard
            key={Math.random()}
            title={advantage.title}
            description={advantage.description}
            icon={advantage.icon}
            className={index > 2 ? 'col-span-3' : 'col-span-2'}
          />
        ))}
      </div>
    </div>
  );
}
