import { cn } from '@/lib/utils';
import type { JSX } from 'react';

type SectionHeaderProps = {
  icon: JSX.Element;
  title: string;
  className?: string;
};

const SectionHeader = ({ icon, title, className }: SectionHeaderProps) => (
  <div className="flex items-center gap-4">
    <div className={cn(className)}>{icon}</div>
    <h2 className="text-2xl font-bold text-secondary">{title}</h2>
  </div>
);

type InfoSectionProps = {
  icon: JSX.Element;
  title: string;
  description?: string;
  subSections?: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
  }>;
};

export const InfoSection = ({
  icon,
  title,
  description,
  subSections,
}: InfoSectionProps) => (
  <div className="flex flex-col gap-4">
    <SectionHeader
      icon={icon}
      title={title}
      className="bg-cptext-cyan rounded-lg p-2 w-fit"
    />
    {description && <p className="text-xs text-secondary">{description}</p>}
    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
      {subSections &&
        subSections.map((subSection, index) => (
          <div key={Math.random()}>
            <SectionHeader icon={subSection.icon} title={subSection.title} />
            <p className="text-xs text-secondary">{subSection.description}</p>
          </div>
        ))}
    </div>
  </div>
);
