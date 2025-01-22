import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
import { FaRegLightbulb } from 'react-icons/fa6';
import { MdQuestionMark } from 'react-icons/md';

import { PayIcon } from '../components/ui/icons';
import type { JSX } from 'react';

export type Paths =
  | 'consignado-publico'
  | 'consignado-federal'
  | 'consignado-privado'
  | 'consignado-inss'
  | 'financiamento-imovel'
  | 'home-equity'
  | 'credito-pessoal'
  | 'fgts'
  | 'financiamento-refinanciamento-veiculos'
  | 'cartao-consignado'
  | 'cartao-beneficio-consignado'
  | 'cartao-credcesta'
  | 'consorcio'
  | 'seguros'
  | 'painel-solar'
  | 'capital-de-giro'
  | 'operacoes-estruturadas'
  | 'imobiliario'
  | 'consignado';

type Image = {
  src: string;
  alt: string;
};

type VariantCard = {
  title: string;
  description: string;
  image: Image;
  href: string;
};

export type Data = {
  hero: {
    title: string;
    description: string;
    links: { title: string; link: string }[];
  };
  about: {
    title: string;
    sections: {
      icon: JSX.Element;
      title: string;
      description?: string;
      subSections?: {
        icon: JSX.Element;
        title: string;
        description: string;
      }[];
    }[];
  };
  advantages: {
    title: string;
    description: string;
    advantages: { title: string; description: string; icon: JSX.Element }[];
  };
  seeAlso: {
    title: string;
    cards: { title: string; description: string; link: string }[];
  };
  variants?: {
    icon: JSX.Element;
    sub: string;
    title: string;
    description: string;
    cta: string;
    image: Image;
    cards: VariantCard[];
  };
};

export type PagesData = {
  [key in Paths]: Data;
};

const seeAlso = {
  title: 'Veja também',
  cards: [
    {
      title: 'Consignado Público',
      description: 'Conheça o consignado público e suas vantagens.',
      link: '/produto/consignado/consignado-publico',
    },
    {
      title: 'Consignado Federal',
      description: 'Conheça o consignado federal e suas vantagens.',
      link: '/produto/consignado/consignado-federal',
    },
    {
      title: 'Consignado Privado',
      description: 'Conheça o consignado privado e suas vantagens.',
      link: '/produto/consignado/consignado-privado',
    },
  ],
};

const seeAlsoConsignado = [
  {
    title: 'Consignado Público',
    description: 'Conheça o consignado público e suas vantagens.',
    link: '/produto/consignado/consignado-publico',
  },
  {
    title: 'Consignado Federal',
    description: 'Conheça o consignado federal e suas vantagens.',
    link: '/produto/consignado/consignado-federal',
  },
  {
    title: 'Consignado Privado',
    description: 'Conheça o consignado privado e suas vantagens.',
    link: '/produto/consignado/consignado-privado',
  },
  {
    title: 'Consignado INSS',
    description: 'Conheça o consignado INSS e suas vantagens.',
    link: '/produto/consignado/consignado-inss',
  },
];

export const pagesData: PagesData = {
  'consignado-publico': {
    hero: {
      title: 'Consignado Público',
      description:
        'Linha de crédito exclusiva para servidores públicos municipais, estaduais e federais, ativos e inativos, com condições diferenciadas.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Consignado Público',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O Consignado Público é uma linha de crédito exclusiva para servidores públicos municipais, estaduais e federais, ativos e inativos. Com condições diferenciadas, oferece taxas de juros reduzidas, prazos de pagamento longos e desconto direto em folha de pagamento.`,
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Municipais',
              description: `Funcionários públicos municipais que atuam nos órgãos administrados pelas prefeituras das cidades.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Estaduais',
              description: `Funcionários públicos estaduais que atuam nos órgãos administrados pelos governos dos estados.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Federais',
              description: `Funcionários públicos federais que atuam nos órgãos administrados pelo governo federal.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Consignado Público: principais vantagens',
      description: 'Conheça as principais vantagens do consignado público.',
      advantages: [
        {
          title: 'Taxas de juros reduzidas',
          description:
            'Uma das menores do mercado, tornando o crédito mais acessível.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Prazos de pagamento longos',
          description:
            'Permite maior flexibilidade no orçamento, com prazos estendidos.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Desconto direto em folha de pagamento',
          description:
            'Garante segurança e praticidade no pagamento das parcelas.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Menos burocracia',
          description:
            'Ideal para quem busca crédito rápido, com menos burocracia e condições vantajosas.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },

    seeAlso: {
      title: 'Veja também',
      cards: seeAlsoConsignado.filter(
        (card) => card.title !== 'Consignado Público'
      ),
    },
  },
  'consignado-federal': {
    hero: {
      title: 'Consignado Federal',
      description:
        'Voltado para servidores federais ativos, aposentados e pensionistas, o Consignado Federal oferece condições exclusivas para servidores vinculados ao Governo Federal, limite de crédito elevado, dependendo da margem consignável, taxas competitivas, ajustadas para oferecer maior economia ao contratante. Uma solução prática e acessível para realizar projetos pessoais, quitar dívidas ou atender necessidades emergenciais.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Consignado Federal',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O Consignado Federal é uma linha de crédito exclusiva para servidores federais ativos, aposentados e pensionistas. Com condições exclusivas, oferece limite de crédito elevado, taxas competitivas e ajustadas para oferecer maior economia ao contratante.`,
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Ativos',
              description: `Funcionários públicos federais que atuam nos órgãos administrados pelo governo federal.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Aposentados',
              description: `Funcionários públicos federais aposentados que atuaram nos órgãos administrados pelo governo federal.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pensionistas',
              description: `Pensionistas de funcionários públicos federais que atuaram nos órgãos administrados pelo governo federal.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Consignado Federal: principais vantagens',
      description: 'Conheça as principais vantagens do consignado federal.',
      advantages: [
        {
          title: 'Condições exclusivas',
          description:
            'Para servidores vinculados ao Governo Federal, com limite de crédito elevado.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Taxas competitivas',
          description: 'Ajustadas para oferecer maior economia ao contratante.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Prático e acessível',
          description:
            'Uma solução prática e acessível para realizar projetos pessoais, quitar dívidas ou atender necessidades emergenciais.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso: {
      title: 'Veja também',
      cards: seeAlsoConsignado.filter(
        (card) => card.title !== 'Consignado Federal'
      ),
    },
  },
  'consignado-privado': {
    hero: {
      title: 'Consignado Privado',
      description:
        'Destinado a colaboradores de empresas privadas conveniadas, o Consignado Privado oferece vantagens pensadas para o trabalhador do setor privado, com taxas reduzidas, parcelas descontadas diretamente na folha de pagamento e acessibilidade para quem busca crédito rápido, mesmo com outras pendências financeiras.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Consignado Privado',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O Consignado Privado é uma linha de crédito destinada a colaboradores de empresas privadas conveniadas. Com vantagens pensadas para o trabalhador do setor privado, oferece taxas reduzidas, parcelas descontadas diretamente na folha de pagamento e acessibilidade para quem busca crédito rápido, mesmo com outras pendências financeiras.`,
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Colaboradores de Empresas Privadas',
              description: `Trabalhadores do setor privado que atuam em empresas conveniadas.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Consignado Privado: principais vantagens',
      description: 'Conheça as principais vantagens do consignado privado.',
      advantages: [
        {
          title: 'Taxas reduzidas',
          description:
            'Adaptadas ao perfil do cliente, oferecendo condições vantajosas.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Parcelas descontadas na folha',
          description:
            'Evita atrasos e garante segurança no pagamento das parcelas.',
          icon: <PayIcon className="size-8" />,
        },

        {
          title: 'Acessibilidade',
          description:
            'Para quem busca crédito rápido, mesmo com outras pendências financeiras.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso: {
      title: 'Veja também',
      cards: seeAlsoConsignado.filter(
        (card) => card.title !== 'Consignado INSS'
      ),
    },
  },
  'consignado-inss': {
    hero: {
      title: 'Consignado INSS',
      description:
        'Atende aposentados e pensionistas do Instituto Nacional do Seguro Social (INSS), com benefícios únicos: descontos automáticos no benefício mensal, taxas de juros controladas pelo governo e opção de renegociação ou refinanciamento de contratos existentes, caso necessário. Uma solução prática e vantajosa para quem busca crédito com segurança e menor custo.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Consignado INSS',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O Consignado INSS atende aposentados e pensionistas do Instituto Nacional do Seguro Social (INSS), com benefícios únicos: descontos automáticos no benefício mensal, taxas de juros controladas pelo governo e opção de renegociação ou refinanciamento de contratos existentes, caso necessário.`,
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Aposentados',
              description: `Pessoas que já contribuíram para a Previdência Social e se aposentaram.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pensionistas',
              description: `Pessoas que recebem pensão de um segurado falecido.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Consignado INSS: principais vantagens',
      description: 'Conheça as principais vantagens do consignado INSS.',
      advantages: [
        {
          title: 'Descontos automáticos',
          description:
            'Proporciona maior tranquilidade, com descontos automáticos no benefício mensal.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Taxas de juros controladas',
          description:
            'Pelo governo, garantindo economia e segurança no pagamento das parcelas.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Renegociação ou refinanciamento',
          description:
            'Opção de renegociação ou refinanciamento de contratos existentes, caso necessário.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Segurança e menor custo',
          description:
            'Uma solução prática e vantajosa para quem busca crédito com segurança e menor custo.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso: {
      title: 'Veja também',
      cards: seeAlsoConsignado.filter(
        (card) => card.title !== 'Consignado Privado'
      ),
    },
  },
  'financiamento-imovel': {
    hero: {
      title: 'Financiamento de Imóvel',
      description:
        'Realize o sonho da casa própria ou adquira imóveis para investimento com o Financiamento de Imóvel. Esse produto oferece:',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Financiamento de Imóvel',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `Realize o sonho da casa própria ou adquira imóveis para investimento com o Financiamento de Imóvel. Esse produto oferece condições flexíveis de pagamento, com prazos longos e parcelas acessíveis, taxas de juros competitivas, ajustadas ao seu perfil financeiro e a possibilidade de financiar imóveis residenciais, comerciais ou terrenos.`,
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pessoas físicas',
              description: `Indicado para quem deseja sair do aluguel ou expandir o patrimônio com segurança e facilidade.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Financiamento de Imóvel: principais vantagens',
      description:
        'Conheça as principais vantagens do financiamento de imóvel.',
      advantages: [
        {
          title: 'Condições flexíveis de pagamento',
          description:
            'Com prazos longos e parcelas acessíveis, para facilitar a aquisição do imóvel.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Taxas de juros competitivas',
          description:
            'Ajustadas ao seu perfil financeiro, para oferecer economia e segurança.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title:
            'Possibilidade de financiar imóveis residenciais, comerciais ou terrenos',
          description:
            'Para atender diferentes necessidades e perfis de investimento.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },
  'home-equity': {
    hero: {
      title: 'Home Equity / Crédito com Garantia de Imóvel',
      description:
        'Transforme o valor do seu imóvel em crédito com o Home Equity, uma solução prática para quem busca recursos com vantagens exclusivas.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Home Equity',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `Transforme o valor do seu imóvel em crédito com o Home Equity, uma solução prática para quem busca recursos com vantagens exclusivas: taxas de juros reduzidas, inferiores às de empréstimos pessoais; altos valores de crédito, com liberação de até 60% do valor do imóvel; flexibilidade para utilizar o recurso em diversos objetivos, como quitar dívidas, investir em negócios ou reformar a própria casa. Com o imóvel em garantia, você acessa crédito seguro e com condições diferenciadas, mantendo a propriedade do bem.`,
        },
      ],
    },
    advantages: {
      title: 'Home Equity: principais vantagens',
      description: 'Conheça as principais vantagens do Home Equity.',
      advantages: [
        {
          title: 'Taxas de juros reduzidas',
          description: 'Inferiores às de empréstimos pessoais.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Altos valores de crédito',
          description: 'Liberação de até 60% do valor do imóvel.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Flexibilidade de uso',
          description: 'Utilize o recurso em diversos objetivos.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  // Crédito Pessoal
  'credito-pessoal': {
    hero: {
      title: 'Crédito Pessoal',
      description:
        'O Crédito Pessoal é a solução ideal para quem precisa de recursos rápidos e descomplicados.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Crédito Pessoal',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O Crédito Pessoal é a solução ideal para quem precisa de recursos rápidos e descomplicados. Com ele, você conta com: liberação ágil e sem necessidade de garantias; flexibilidade no uso: utilize o crédito como desejar, seja para emergências, projetos pessoais ou investimentos; parcelamento ajustável, com condições que cabem no seu orçamento. Perfeito para quem busca praticidade e rapidez na obtenção de crédito.`,
        },
      ],
    },
    advantages: {
      title: 'Crédito Pessoal: principais vantagens',
      description: 'Conheça as principais vantagens do Crédito Pessoal.',
      advantages: [
        {
          title: 'Liberação ágil',
          description: 'Sem necessidade de garantias.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Flexibilidade no uso',
          description: 'Utilize o crédito como desejar.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Parcelamento ajustável',
          description: 'Condições que cabem no seu orçamento.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  // FGTS – Saque-Aniversário
  fgts: {
    hero: {
      title: 'FGTS – Saque-Aniversário',
      description:
        'Antecipe o valor disponível no seu FGTS – Saque-Aniversário e transforme seu benefício em dinheiro imediato.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o FGTS – Saque-Aniversário',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `Antecipe o valor disponível no seu FGTS – Saque-Aniversário e transforme seu benefício em dinheiro imediato. Vantagens: taxas reduzidas, devido à segurança do crédito vinculado ao FGTS; pagamento automático, sem impacto no orçamento mensal; processo 100% digital e sem burocracia. Uma alternativa rápida e econômica para quem precisa de dinheiro sem comprometer o salário.`,
        },
      ],
    },
    advantages: {
      title: 'FGTS – Saque-Aniversário: principais vantagens',
      description:
        'Conheça as principais vantagens do FGTS – Saque-Aniversário.',
      advantages: [
        {
          title: 'Taxas reduzidas',
          description: 'Devido à segurança do crédito vinculado ao FGTS.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Pagamento automático',
          description: 'Sem impacto no orçamento mensal.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Processo 100% digital',
          description: 'Sem burocracia.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  // Financiamento de Veículos
  'financiamento-refinanciamento-veiculos': {
    hero: {
      title: 'Financiamento e Refinanciamento de Veículos',
      description:
        'Com o Financiamento de Veículos, você realiza o sonho do carro próprio com condições sob medida. No Refinanciamento de Veículos, você utiliza seu carro quitado como garantia para obter crédito com vantagens exclusivas.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Financiamento e Refinanciamento de Veículos',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `Com o Financiamento de Veículos, você realiza o sonho do carro próprio com condições sob medida: taxas atrativas e prazos de pagamento ajustáveis; financiamento para carros novos ou usados, com ampla aprovação de crédito; parcelas que cabem no seu bolso, garantindo planejamento financeiro. A escolha ideal para quem quer adquirir um veículo de forma acessível e segura. No Refinanciamento de Veículos, você utiliza seu carro quitado como garantia para obter crédito com vantagens exclusivas: taxas de juros reduzidas, inferiores a de empréstimos pessoais; liberação de até 90% do valor do veículo; permaneça com seu carro enquanto utiliza o crédito. Uma solução prática e econômica para liberar recursos em momentos de necessidade ou oportunidade.`,
        },
      ],
    },
    advantages: {
      title:
        'Financiamento e Refinanciamento de Veículos: principais vantagens',
      description:
        'Conheça as principais vantagens do Financiamento e Refinanciamento de Veículos.',
      advantages: [
        {
          title: 'Taxas atrativas',
          description: 'E prazos de pagamento ajustáveis.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Financiamento para carros novos ou usados',
          description: 'Com ampla aprovação de crédito.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Parcelas que cabem no seu bolso',
          description: 'Garantindo planejamento financeiro.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Taxas de juros reduzidas',
          description: 'Inferiores a de empréstimos pessoais.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Liberação de até 90% do valor do veículo',
          description: 'Permaneça com seu carro enquanto utiliza o crédito.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },
  'cartao-consignado': {
    hero: {
      title: 'Cartão Consignado',
      description:
        'O Cartão Consignado é a escolha ideal para quem busca crédito rotativo com benefícios exclusivos.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Cartão Consignado',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O Cartão Consignado é a escolha ideal para quem busca crédito rotativo com benefícios exclusivos: sem consulta ao SPC/Serasa, facilitando a aprovação; parcelas descontadas diretamente na folha de pagamento ou benefício, evitando atrasos; taxas de juros reduzidas, menores que as dos cartões de crédito convencionais; limite elevado, oferecendo mais poder de compra. Ideal para servidores públicos, aposentados e pensionistas que desejam praticidade e economia.`,
        },
      ],
    },
    advantages: {
      title: 'Cartão Consignado: principais vantagens',
      description: 'Conheça as principais vantagens do Cartão Consignado.',
      advantages: [
        {
          title: 'Sem consulta ao SPC/Serasa',
          description: 'Facilitando a aprovação.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Parcelas descontadas diretamente',
          description: 'Na folha de pagamento ou benefício, evitando atrasos.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Taxas de juros reduzidas',
          description: 'Menores que as dos cartões de crédito convencionais.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Limite elevado',
          description: 'Oferecendo mais poder de compra.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  // Cartão Benefício Consignado
  'cartao-beneficio-consignado': {
    hero: {
      title: 'Cartão Benefício Consignado',
      description:
        'O Cartão Benefício Consignado é voltado para aposentados e pensionistas do INSS, com vantagens pensadas para esse público.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Cartão Benefício Consignado',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O Cartão Benefício Consignado é voltado para aposentados e pensionistas do INSS, com vantagens pensadas para esse público: sem anuidade, garantindo economia; descontos automáticos no benefício mensal; uso amplo, permitindo saques em dinheiro e compras à vista ou parceladas. Uma solução prática para quem quer aproveitar um cartão com vantagens exclusivas e maior controle financeiro.`,
        },
      ],
    },
    advantages: {
      title: 'Cartão Benefício Consignado: principais vantagens',
      description:
        'Conheça as principais vantagens do Cartão Benefício Consignado.',
      advantages: [
        {
          title: 'Sem anuidade',
          description: 'Garantindo economia.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Descontos automáticos',
          description: 'No benefício mensal.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Uso amplo',
          description:
            'Permitindo saques em dinheiro e compras à vista ou parceladas.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  // Cartão Credcesta
  'cartao-credcesta': {
    hero: {
      title: 'Cartão Credcesta',
      description:
        'O Cartão Credcesta oferece benefícios únicos para servidores públicos e pensionistas.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Cartão Credcesta',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O Cartão Credcesta oferece benefícios únicos para servidores públicos e pensionistas: taxas competitivas, ajustadas às condições do público atendido; aceitação em milhares de estabelecimentos para compras e serviços; opção de saques emergenciais e parcelamento flexível; desconto direto na folha de pagamento, garantindo maior comodidade. Uma alternativa prática e vantajosa para quem busca crédito acessível e com controle simplificado.`,
        },
      ],
    },
    advantages: {
      title: 'Cartão Credcesta: principais vantagens',
      description: 'Conheça as principais vantagens do Cartão Credcesta.',
      advantages: [
        {
          title: 'Taxas competitivas',
          description: 'Ajustadas às condições do público atendido.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Aceitação em milhares de estabelecimentos',
          description: 'Para compras e serviços.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Opção de saques emergenciais',
          description: 'E parcelamento flexível.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Desconto direto na folha de pagamento',
          description: 'Garantindo maior comodidade.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  // Consórcio
  consorcio: {
    hero: {
      title: 'Consórcio',
      description:
        'O Consórcio é a forma inteligente e econômica de planejar a realização dos seus sonhos, sem juros e com condições acessíveis.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Consórcio',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O Consórcio é a forma inteligente e econômica de planejar a realização dos seus sonhos, sem juros e com condições acessíveis. Benefícios: taxas reduzidas: apenas a cobrança de taxa de administração, sem juros; planejamento financeiro: ideal para adquirir imóveis, veículos ou outros bens de forma programada; flexibilidade nas parcelas, com opções que se ajustam ao seu orçamento; participação em sorteios mensais e possibilidade de antecipação por lance. Uma solução prática para quem quer investir de forma organizada e sem pressa.`,
        },
      ],
    },
    advantages: {
      title: 'Consórcio: principais vantagens',
      description: 'Conheça as principais vantagens do Consórcio.',
      advantages: [
        {
          title: 'Taxas reduzidas',
          description: 'Apenas a cobrança de taxa de administração, sem juros.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Planejamento financeiro',
          description:
            'Ideal para adquirir imóveis, veículos ou outros bens de forma programada.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Flexibilidade nas parcelas',
          description: 'Com opções que se ajustam ao seu orçamento.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Participação em sorteios mensais',
          description: 'E possibilidade de antecipação por lance.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  // Seguros CPCréditos
  seguros: {
    hero: {
      title: 'Seguros CPCréditos',
      description:
        'Os Seguros CPCréditos oferecem proteção personalizada para o que realmente importa.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça os Seguros CPCréditos',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `Os Seguros CPCréditos oferecem proteção personalizada para o que realmente importa. Seja qual for sua necessidade, contamos com as melhores opções de mercado: seguro de vida: segurança financeira para você e sua família em momentos imprevistos; seguro residencial: proteção completa para seu imóvel contra danos, furtos e outros riscos; seguro veicular: cobertura para o seu carro, com assistência 24 horas e vantagens exclusivas; planos adaptáveis e atendimento ágil, garantindo tranquilidade e confiança. Com os Seguros CPCréditos, você protege o que é valioso e mantém a sua tranquilidade em qualquer situação.`,
        },
      ],
    },
    advantages: {
      title: 'Seguros CPCréditos: principais vantagens',
      description: 'Conheça as principais vantagens dos Seguros CPCréditos.',
      advantages: [
        {
          title: 'Seguro de Vida',
          description:
            'Segurança financeira para você e sua família em momentos imprevistos.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Seguro Residencial',
          description:
            'Proteção completa para seu imóvel contra danos, furtos e outros riscos.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Seguro Veicular',
          description:
            'Cobertura para o seu carro, com assistência 24 horas e vantagens exclusivas.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Planos adaptáveis',
          description:
            'E atendimento ágil, garantindo tranquilidade e confiança.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  // Painel Solar
  'painel-solar': {
    hero: {
      title: 'Painel Solar',
      description:
        'Invista em energia sustentável com nosso financiamento para Painéis Solares, uma solução econômica e ecológica para reduzir custos e cuidar do planeta.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Painel Solar',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `Invista em energia sustentável com nosso financiamento para Painéis Solares, uma solução econômica e ecológica para reduzir custos e cuidar do planeta. Benefícios: taxas de juros competitivas, facilitando o acesso à tecnologia; financiamento de sistemas completos para residências, empresas ou propriedades rurais; redução imediata na conta de energia, com retorno do investimento em poucos anos; contribuição para a sustentabilidade, utilizando energia limpa e renovável. Ideal para quem busca economizar e adotar soluções sustentáveis no dia a dia.`,
        },
      ],
    },
    advantages: {
      title: 'Painel Solar: principais vantagens',
      description: 'Conheça as principais vantagens do Painel Solar.',
      advantages: [
        {
          title: 'Taxas de juros competitivas',
          description: 'Facilitando o acesso à tecnologia.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Financiamento de sistemas completos',
          description: 'Para residências, empresas ou propriedades rurais.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Redução imediata na conta de energia',
          description: 'Com retorno do investimento em poucos anos.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Contribuição para a sustentabilidade',
          description: 'Utilizando energia limpa e renovável.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  // Capital de Giro
  'capital-de-giro': {
    hero: {
      title: 'Capital de Giro',
      description:
        'Apoie o crescimento do seu negócio com nosso Crédito para Capital de Giro, uma linha de crédito essencial para equilibrar o fluxo de caixa e impulsionar operações.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Capital de Giro',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `Apoie o crescimento do seu negócio com nosso Crédito para Capital de Giro, uma linha de crédito essencial para equilibrar o fluxo de caixa e impulsionar operações. Benefícios: taxas ajustadas ao perfil da sua empresa, com condições flexíveis; liberação rápida, para atender necessidades imediatas, como compra de estoque, pagamento de fornecedores ou folha salarial; parcelamento adaptado à realidade financeira do negócio; disponível para empresas de diferentes portes e setores. Uma solução prática para manter sua empresa saudável e em crescimento.`,
        },
      ],
    },
    advantages: {
      title: 'Capital de Giro: principais vantagens',
      description: 'Conheça as principais vantagens do Capital de Giro.',
      advantages: [
        {
          title: 'Taxas ajustadas ao perfil da sua empresa',
          description: 'Com condições flexíveis.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Liberação rápida',
          description: 'Para atender necessidades imediatas.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Parcelamento adaptado',
          description: 'À realidade financeira do negócio.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Disponível para empresas de diferentes portes e setores',
          description: '',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  // Operações Estruturadas
  'operacoes-estruturadas': {
    hero: {
      title: 'Operações Estruturadas',
      description:
        'Para projetos de maior complexidade, oferecemos Operações Estruturadas, soluções financeiras personalizadas para atender demandas específicas.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça as Operações Estruturadas',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `Para projetos de maior complexidade, oferecemos Operações Estruturadas, soluções financeiras personalizadas para atender demandas específicas. Benefícios: planejamento estratégico, com análise detalhada das necessidades do cliente; estruturação de crédito, garantias e prazos customizados; apoio especializado para fusões, aquisições, investimentos em infraestrutura ou expansão de negócios; soluções sob medida para empresas de médio e grande porte. Com as Operações Estruturadas, sua empresa conta com apoio financeiro robusto para projetos estratégicos.`,
        },
      ],
    },
    advantages: {
      title: 'Operações Estruturadas: principais vantagens',
      description:
        'Conheça as principais vantagens das Operações Estruturadas.',
      advantages: [
        {
          title: 'Planejamento estratégico',
          description: 'Com análise detalhada das necessidades do cliente.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Estruturação de crédito',
          description: 'Garantias e prazos customizados.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Apoio especializado',
          description:
            'Para fusões, aquisições, investimentos em infraestrutura ou expansão de negócios.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Soluções sob medida',
          description: 'Para empresas de médio e grande porte.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso,
  },

  imobiliario: {
    hero: {
      title: 'Consignado Público',
      description:
        'Linha de crédito exclusiva para servidores públicos municipais, estaduais e federais, ativos e inativos, com condições diferenciadas.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    about: {
      title: 'Conheça o Consignado Público',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O Consignado Público é uma linha de crédito exclusiva para servidores públicos municipais, estaduais e federais, ativos e inativos. Com condições diferenciadas, oferece taxas de juros reduzidas, prazos de pagamento longos e desconto direto em folha de pagamento.`,
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Municipais',
              description: `Funcionários públicos municipais que atuam nos órgãos administrados pelas prefeituras das cidades.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Estaduais',
              description: `Funcionários públicos estaduais que atuam nos órgãos administrados pelos governos dos estados.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Federais',
              description: `Funcionários públicos federais que atuam nos órgãos administrados pelo governo federal.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Consignado Público: principais vantagens',
      description: 'Conheça as principais vantagens do consignado público.',
      advantages: [
        {
          title: 'Taxas de juros reduzidas',
          description:
            'Uma das menores do mercado, tornando o crédito mais acessível.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Prazos de pagamento longos',
          description:
            'Permite maior flexibilidade no orçamento, com prazos estendidos.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Desconto direto em folha de pagamento',
          description:
            'Garante segurança e praticidade no pagamento das parcelas.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Menos burocracia',
          description:
            'Ideal para quem busca crédito rápido, com menos burocracia e condições vantajosas.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },

    seeAlso: {
      title: 'Veja também',
      cards: [
        {
          title: 'Como pagar',
          description: 'Veja como pagar a sua fatura de forma rápida e segura.',
          link: '/como-pagar',
        },
        {
          title: 'Dúvidas frequentes',
          description: 'Tire suas dúvidas sobre o pagamento da fatura.',
          link: '/duvidas-frequentes',
        },
        {
          title: 'Onde pagar',
          description: 'Conheça os locais onde você pode pagar a sua fatura.',
          link: '/onde-pagar',
        },
      ],
    },
  },

  consignado: {
    hero: {
      title: 'Crédito Consignado',
      description:
        'Empréstimo com parcelas descontadas diretamente do salário ou aposentadoria, oferecendo mais praticidade e taxas reduzidas.',
      links: [
        { title: 'O que é', link: '#oque-e' },
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        { title: 'Seja parceiro', link: '#seja-parceiro' },
      ],
    },
    variants: {
      icon: <BriefcaseBusiness className="size-8 text-cptext-cyan" />,
      sub: '/produto',
      title: 'Crédito Consignado',
      description:
        'O crédito consignado é aquele tipo de empréstimo que você solicita e passa a ter o valor das parcelas cobrado direto na folha de pagamento, ou seja, o desconto é feito diretamente no salário ou na aposentadoria.',
      cta: 'Saiba mais',
      image: {
        src: '/assets/images/consigned.png',
        alt: 'Crédito Consignado',
      },
      cards: [
        {
          title: 'Consignado INSS',
          description:
            'Atende aposentados e pensionistas do Instituto Nacional do Seguro Social (INSS), com benefícios únicos: descontos automáticos no benefício mensal, taxas de juros controladas pelo governo e opção de renegociação ou refinanciamento de contratos existentes, caso necessário. Uma solução prática e vantajosa para quem busca crédito com segurança e menor custo.',
          image: {
            src: '/assets/images/consigned.png',
            alt: 'Crédito Consignado',
          },
          href: '/produto/consignado/consignado-inss',
        },
        {
          title: 'Consignado Público',
          description:
            'Linha de crédito exclusiva para servidores públicos municipais, estaduais e federais, ativos e inativos, com condições diferenciadas.',
          image: {
            src: '/assets/images/consigned.png',
            alt: 'Crédito Consignado',
          },
          href: '/produto/consignado/consignado-publico',
        },
        {
          title: 'Consignado Privado',
          description:
            'Destinado a colaboradores de empresas privadas conveniadas, o Consignado Privado oferece vantagens pensadas para o trabalhador do setor privado, com taxas reduzidas, parcelas descontadas diretamente na folha de pagamento e acessibilidade para quem busca crédito rápido, mesmo com outras pendências financeiras.',

          image: {
            src: '/assets/images/consigned.png',
            alt: 'Crédito Consignado',
          },
          href: '/produto/consignado/consignado-privado',
        },
        {
          title: 'Consignado Federal',
          description:
            'Voltado para servidores federais ativos, aposentados e pensionistas, o Consignado Federal oferece condições exclusivas para servidores vinculados ao Governo Federal, limite de crédito elevado, dependendo da margem consignável, taxas competitivas, ajustadas para oferecer maior economia ao contratante. Uma solução prática e acessível para realizar projetos pessoais, quitar dívidas ou atender necessidades emergenciais.',
          image: {
            src: '/assets/images/consigned.png',
            alt: 'Crédito Consignado',
          },
          href: '/produto/consignado/consignado-federal',
        },
      ],
    },
    about: {
      title: 'Conheça o Consignado Público',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: `O crédito consignado é aquele tipo de empréstimo que você solicita e passa a ter o valor das parcelas cobrado direto na folha de pagamento, ou seja, o desconto é feito diretamente no salário ou na aposentadoria.`,
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem?',
          description:
            'O crédito consignado é destinado a servidores públicos, aposentados e pensionistas, que possuem uma renda fixa e garantida.',
        },
      ],
    },
    advantages: {
      title: 'Crédito Consignado: principais vantagens',
      description: 'Conheça as principais vantagens do consignado público.',
      advantages: [
        {
          title: 'Taxas de juros reduzidas',
          description:
            'Uma das menores do mercado, tornando o crédito mais acessível.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Prazos de pagamento longos',
          description:
            'Permite maior flexibilidade no orçamento, com prazos estendidos.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Desconto direto em folha de pagamento',
          description:
            'Garante segurança e praticidade no pagamento das parcelas.',
          icon: <PayIcon className="size-8" />,
        },
        {
          title: 'Menos burocracia',
          description:
            'Ideal para quem busca crédito rápido, com menos burocracia e condições vantajosas.',
          icon: <PayIcon className="size-8" />,
        },
      ],
    },
    seeAlso: {
      title: 'Veja também',
      cards: [
        {
          title: 'Como pagar',
          description: 'Veja como pagar a sua fatura de forma rápida e segura.',
          link: '/como-pagar',
        },
        {
          title: 'Dúvidas frequentes',
          description: 'Tire suas dúvidas sobre o pagamento da fatura.',
          link: '/duvidas-frequentes',
        },
        {
          title: 'Onde pagar',
          description: 'Conheça os locais onde você pode pagar a sua fatura.',
          link: '/onde-pagar',
        },
      ],
    },
  },
};
