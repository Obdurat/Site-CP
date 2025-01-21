import { CircleHelp, ArrowRight } from 'lucide-react';
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
  | 'fgts-saque-aniversario'
  | 'financiamento-refinanciamento-veiculos';

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
          icon: <CircleHelp className="size-12" />,
          title: 'O que é?',
          description: `O Consignado Público é uma linha de crédito exclusiva para servidores públicos municipais, estaduais e federais, ativos e inativos. Com condições diferenciadas, oferece taxas de juros reduzidas, prazos de pagamento longos e desconto direto em folha de pagamento.`,
        },
        {
          icon: <CircleHelp className="size-12" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cyan-500" />,
              title: 'Servidores Municipais',
              description: `Funcionários públicos municipais que atuam nos órgãos administrados pelas prefeituras das cidades.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cyan-500" />,
              title: 'Servidores Estaduais',
              description: `Funcionários públicos estaduais que atuam nos órgãos administrados pelos governos dos estados.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cyan-500" />,
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
          icon: <CircleHelp className="size-12" />,
          title: 'O que é?',
          description: `O Consignado Federal é uma linha de crédito exclusiva para servidores federais ativos, aposentados e pensionistas. Com condições exclusivas, oferece limite de crédito elevado, taxas competitivas e ajustadas para oferecer maior economia ao contratante.`,
        },
        {
          icon: <CircleHelp className="size-12" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cyan-500" />,
              title: 'Servidores Ativos',
              description: `Funcionários públicos federais que atuam nos órgãos administrados pelo governo federal.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cyan-500" />,
              title: 'Aposentados',
              description: `Funcionários públicos federais aposentados que atuaram nos órgãos administrados pelo governo federal.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cyan-500" />,
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
    seeAlso,
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
          icon: <CircleHelp className="size-12" />,
          title: 'O que é?',
          description: `O Consignado Privado é uma linha de crédito destinada a colaboradores de empresas privadas conveniadas. Com vantagens pensadas para o trabalhador do setor privado, oferece taxas reduzidas, parcelas descontadas diretamente na folha de pagamento e acessibilidade para quem busca crédito rápido, mesmo com outras pendências financeiras.`,
        },
        {
          icon: <CircleHelp className="size-12" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cyan-500" />,
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
    seeAlso,
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
          icon: <CircleHelp className="size-12" />,
          title: 'O que é?',
          description: `O Consignado INSS atende aposentados e pensionistas do Instituto Nacional do Seguro Social (INSS), com benefícios únicos: descontos automáticos no benefício mensal, taxas de juros controladas pelo governo e opção de renegociação ou refinanciamento de contratos existentes, caso necessário.`,
        },
        {
          icon: <CircleHelp className="size-12" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cyan-500" />,
              title: 'Aposentados',
              description: `Pessoas que já contribuíram para a Previdência Social e se aposentaram.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cyan-500" />,
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
    seeAlso,
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
          icon: <CircleHelp className="size-12" />,
          title: 'O que é?',
          description: `Realize o sonho da casa própria ou adquira imóveis para investimento com o Financiamento de Imóvel. Esse produto oferece condições flexíveis de pagamento, com prazos longos e parcelas acessíveis, taxas de juros competitivas, ajustadas ao seu perfil financeiro e a possibilidade de financiar imóveis residenciais, comerciais ou terrenos.`,
        },
        {
          icon: <CircleHelp className="size-12" />,
          title: 'Para quem?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cyan-500" />,
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
          icon: <CircleHelp className="size-12" />,
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
          icon: <CircleHelp className="size-12" />,
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
  'fgts-saque-aniversario': {
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
          icon: <CircleHelp className="size-12" />,
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
          icon: <CircleHelp className="size-12" />,
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
};
