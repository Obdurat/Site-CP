import { Header } from '@/components/header';
import type { Route } from './+types/home';

import { OurOfficesSection } from '@/components/our-offices';
import { HomeFooter as Footer } from '@/container/footer';
import { Partners } from '@/components/partners';
import { InfoModal } from '@/components/infoModal';
import { SocialMedia } from '@/components/socialMedia';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { AboutList } from '@/components/About';
import { Hero } from '@/components/page/Hero/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CPCréditos' },
    { name: 'description', content: 'CPCréditos' },
  ];
}

const aboutContent = [
  {
    sub: 'Visão e Valores',
    title: 'A CP Assessoria Financeira',
    description1: `A CP Assessoria Financeira iniciou suas atividades em 2020 com o objetivo de atender ao mercado de Crédito Consignado, Crédito Pessoal e Imobiliário, sempre com foco no crescimento sustentável. Nosso projeto é baseado em um time de profissionais altamente capacitados, com profundo conhecimento do mercado financeiro e atentos às necessidades dos nossos clientes.`,
    description2: `Com esse compromisso, buscamos continuar sendo referência em assessoria financeira.`,
    image: {
      alt: 'Imagem sobre a empresa',
      src: '/assets/images/history.jpeg',
    },
  },
  {
    sub: 'Valores',
    title: 'Excelência no Atendimento',
    description1: `Priorizamos a qualidade e a transparência nas relações com nossos clientes. Nosso atendimento é pautado pela ética e pelo respeito, garantindo que cada cliente receba um serviço personalizado e de alta qualidade.`,
    description2: `Estamos sempre disponíveis para ouvir e entender as necessidades dos nossos clientes, oferecendo soluções que realmente fazem a diferença.`,
    image: {
      alt: 'Imagem sobre a empresa',
      src: '/assets/images/history.jpeg',
    },
  },
  {
    sub: 'Valores',
    title: 'Sustentabilidade e Crescimento',
    description1: `Buscamos um crescimento responsável e sustentável, tanto para nossos clientes quanto para a empresa. Acreditamos que o sucesso deve ser construído com base em práticas éticas e sustentáveis, que beneficiem a todos os envolvidos.`,
    description2: `Nosso compromisso é com o desenvolvimento contínuo, sempre buscando novas oportunidades e soluções que promovam o crescimento sustentável.`,
    image: {
      alt: 'Imagem sobre a empresa',
      src: '/assets/images/history.jpeg',
    },
  },
  {
    sub: 'Valores',
    title: 'Inovação e Expertise',
    description1: `Trabalhamos com as melhores soluções financeiras, com o respaldo dos principais bancos do mercado, líderes no segmento de crédito. Nossa equipe está sempre atualizada com as últimas tendências e inovações do mercado financeiro.`,
    description2: `Com nossa expertise, oferecemos aos nossos clientes as melhores opções de crédito, sempre com segurança e transparência.`,
    image: {
      alt: 'Imagem sobre a empresa',
      src: '/assets/images/history.jpeg',
    },
  },
];

const heroData = {
  title: 'Sobre a CP Créditos',
  description: `A CP Créditos é uma empresa de assessoria financeira especializada em Crédito Consignado, Crédito Pessoal e Imobiliário. Nosso objetivo é oferecer soluções financeiras personalizadas e de alta qualidade, sempre com foco no atendimento
  transparente e eficiente.`,
  image: {
    alt: 'Imagem sobre a empresa',
    src: '/assets/images/history.jpeg',
  },
};

export default function About() {
  return (
    <>
      <Header />
      <main className="flex flex-col lg:gap-44 gap-20 pt-20   pb-20">
        <Hero data={heroData} />
        <AboutList aboutContent={aboutContent} />
        <Partners title="Conheça nossos parceiros" />
        <OurOfficesSection />
        <SocialMedia />
      </main>
      <Footer />
      <InfoModal />
      <FloatingWhatsApp
        phoneNumber={import.meta.env.VITE_CP_PHONE}
        accountName="CPCréditos"
        avatar="/assets/images/whatsApp-avatar.jpeg"
        chatMessage="Olá! Como podemos te ajudar?"
        statusMessage="Estamos online!"
        darkMode={false}
        placeholder="Digite sua mensagem..."
      />
    </>
  );
}
