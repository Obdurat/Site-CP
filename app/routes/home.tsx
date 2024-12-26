import { Header } from '@/components/header';
import type { Route } from './+types/home';

import { OurBusinessSection } from '@/components/our-business-section';
import { CreditSlider } from '@/components/creditSlider';
import { Main } from '@/components/main';
import { Benefits } from '@/components/benefits';
import { ProductCards, Products } from '@/components/products';
import { History } from '@/components/history';
import { HomeFooter as Footer } from '@/container/footer';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CPCréditos' },
    { name: 'description', content: 'CPCréditos' },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col lg:gap-44 gap-20 pt-20">
        <Main />
        <CreditSlider />
        <History />
        <Benefits />
        <Products />
        <ProductCards />
        <OurBusinessSection />
      </main>
      <Footer />
    </div>
  );
}
