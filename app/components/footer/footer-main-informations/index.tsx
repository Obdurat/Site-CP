import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { footersInformations } from '../footer-SEO-informations';
import { AppStoreIcon, PlayStoreIcon } from '@/components/ui/icons';
import type { PropsWithChildren } from 'react';

export function FooterMainInformations({ children }: PropsWithChildren<any>) {
  return (
    <section className="container flex gap-8 justify-between lg:items-center flex-col-reverse lg:flex-row">
      {children}
    </section>
  );
}
