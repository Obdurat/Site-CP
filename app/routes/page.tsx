import type { Route } from '../+types/root';
import { Header } from '@/components/header';
import { InfoModal } from '@/components/infoModal';
import { About } from '@/components/page/About/About';
import { Advantage } from '@/components/page/Advantage/Advantage';
import { BePartOfHistory } from '@/components/page/BePartOfHistory/BePartOfHistory';
import { pagesData, type Paths } from '@/routes/data';
import { Hero } from '@/components/page/Hero/Hero';
import { SeeAlso } from '@/components/page/SeeAlso/SeeAlso';
import { Partners } from '@/components/partners';
import { HomeFooter } from '@/container/footer';
import { useLocation } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CPCréditos' },
    { name: 'description', content: 'CPCréditos' },
  ];
}

export default function ProductPage() {
  const { pathname } = useLocation();

  const path = pathname.split('/').pop() as Paths;

  const data = pagesData[path];

  return (
    <div>
      <Header />
      <main className="flex flex-col lg:gap-32 gap-20 pt-20">
        <Hero data={data.hero} />
        <About data={data.about} />
        <Advantage data={data.advantages} />
        <Partners
          title="Consignado Público: parcerias estratégicas"
          description="Atenção: somos prestadores de serviços das instituições financeiras:"
        />
        <BePartOfHistory />
        <SeeAlso data={data.seeAlso} />
      </main>
      <HomeFooter />
      <InfoModal />
    </div>
  );
}
