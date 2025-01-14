import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { useAnimationToRef } from '../../hooks/use-animation-to-ref';
import { Link } from 'react-router';

type SliderProps = React.ComponentProps<typeof Slider>;

export function CreditSlider({ className, ...props }: SliderProps) {
  const [value, setValue] = useState(100);
  const [showButton, setShowButton] = useState(false);

  const componentRef = useRef(null);

  useAnimationToRef(componentRef);

  const formatCurrency = (value: number) => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <section ref={componentRef} className="flex flex-col gap-12 mt-4">
      <div className="flex flex-col gap-4 pb-8">
        <div className="gap-8">
          <div className="text-xl px-8 border-cyan-400 border-l-4 flex items-center w-full">
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-4">
                <span className="text-2xl font-bold text-gray-200">
                  Quanto você precisa?
                </span>
                <span className="text-4xl font-bold text-green-500">
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
                  onValueChange={(v) => {
                    if (!showButton) {
                      setShowButton(true);
                    }
                    setValue(v[0]);
                  }}
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
        {showButton && (
          <Link
            to="/simulacao"
            className=" text-primary text-md  hover:bg-cyan-400 bg-accent-foreground text-center py-2 rounded-lg w-fit px-4 bg-cyan-500"
          >
            Simule seu crédito AGORA
          </Link>
        )}
      </div>
    </section>
  );
}
