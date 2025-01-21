import { cn } from '@/lib/utils';
import type { JSX } from 'react';

type SectionHeaderProps = {
  icon: JSX.Element;
  title: string;
  className?: string;
};

export function SectionHeader({ icon, title, className }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <div className={cn(className)}>{icon}</div>
      <h2 className="text-2xl font-bold text-secondary">{title}</h2>
    </div>
  );
}
