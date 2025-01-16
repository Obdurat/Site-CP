import { Hero } from '@/components/page/hero';
import type { Route } from '../+types/root';
import { Header } from '@/components/header';
import { About } from '@/components/page/about';
import { Advantage } from '@/components/page/advantage';
import { Partners } from '@/components/partners';
import { BePartOfHistory } from '@/components/page/history';
import { Footer } from '@/components/footer';
import { HomeFooter } from '@/container/footer';
import { SeeAlso } from '@/components/page/seeAlso';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CPCréditos' },
    { name: 'description', content: 'CPCréditos' },
  ];
}

export default function Page() {
  return (
    <div>
      <Header />
      <main className="flex flex-col lg:gap-32 gap-20 pt-20">
        <Hero />
        <About />
        <Advantage />
        <Partners
          title="Consignado Público: parcerias estratégicas"
          description="Atenção: somos prestadores de serviços das instituições financeiras:"
        />
        <BePartOfHistory />
        <SeeAlso />
      </main>
      <HomeFooter />
    </div>
  );
}
