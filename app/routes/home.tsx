import { Header } from '@/components/header';
import type { Route } from './+types/home';

import { OurOfficesSection } from '@/components/our-offices';
import { Main } from '@/components/main';
import { Benefits } from '@/components/benefits';
import { ProductCards, Products } from '@/components/products';
import { History } from '@/components/history';
import { HomeFooter as Footer } from '@/container/footer';
import { Partners } from '@/components/partners';
import { InfoModal } from '@/components/infoModal';
import { SocialMedia } from '@/components/socialMedia';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

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
        <Benefits />
        <Partners title="Conheça nossos parceiros" />
        <Products />
        <ProductCards />
        <OurOfficesSection />
        <SocialMedia />
        <History />
      </main>
      <Footer />
      <InfoModal />
      <FloatingWhatsApp
        phoneNumber="5511940320042"
        accountName="CPCréditos"
        avatar="/assets/images/whatsApp-avatar.jpeg"
        chatMessage="Olá! Como podemos te ajudar?"
        statusMessage="Estamos online!"
        darkMode={false}
        placeholder="Digite sua mensagem..."
      />
    </div>
  );
}
