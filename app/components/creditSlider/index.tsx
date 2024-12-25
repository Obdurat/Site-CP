import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { useAnimationToRef } from '../../hooks/use-animation-to-ref';

type SliderProps = React.ComponentProps<typeof Slider>;

export function CreditSlider({ className, ...props }: SliderProps) {
  const [value, setValue] = useState(100);

  const componentRef = useRef(null);

  useAnimationToRef(componentRef);

  const formatCurrency = (value: number) => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <section ref={componentRef} className="flex flex-col gap-12 items-center">
      <div className="container mx-auto grid lg:gap-24 gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex-1 flex flex-col gap-2 w-full">
            <p className="text-accent-foreground text-xl">
              Simule o valor do seu crédito
            </p>
            <h1 className="text-secondary-foreground text-4xl font-bold">
              Oferecemos a melhor solução para você
            </h1>
          </div>
          <div className="text-xl px-8 border-cyan-400 border-l-4 flex items-center w-full">
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-4">
                <span className="text-2xl font-bold text-gray-500">
                  Quanto você precisa?
                </span>
                <span className="text-4xl font-bold text-green-600">
                  {formatCurrency(value)}
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-xs font-bold text-gray-500">
                  {formatCurrency(100)}
                </span>
                <Slider
                  defaultValue={[value]}
                  max={50000}
                  step={50}
                  onValueChange={(v) => setValue(v[0])}
                  className={cn('flex-1', className)}
                  {...props}
                />
                <span className="text-xs font-bold text-gray-500">
                  {formatCurrency(50000)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
