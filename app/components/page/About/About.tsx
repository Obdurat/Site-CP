import { ArrowRight, CircleHelp } from 'lucide-react';
import { InfoSection } from './InfoSection';
import { PayIcon } from '@/components/ui/icons';
import type { Data } from '@/routes/data';

export function About({ data }: { data: Data['about'] }) {
  return (
    <div className="container mx-auto flex flex-col gap-4" id="oque-e">
      <div className="flex items-center gap-8">
        <div className="bg-accent rounded-lg p-2 w-fit">
          <PayIcon className="size-12" />
        </div>
        <h2 className="text-3xl font-bold text-cpblue-400">{data.title}</h2>
      </div>
      <div className="flex flex-col gap-6 backdrop-filter backdrop-blur-sm p-16 rounded-3xl bg-cpblue-300">
        {data.sections.map((section, index) => (
          <div key={Math.random()}>
            <InfoSection key={Math.random()} {...section} />
            {index === 0 && <div className="bg-cptext-cyan h-1.5 mt-4" />}
          </div>
        ))}
      </div>
    </div>
  );
}
