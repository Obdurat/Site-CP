import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ArrowRight, Building2, ChevronsUpDown, HandCoins } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import { useState, type HTMLAttributes, type HtmlHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollToPlugin);

type TLink = {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
};

type Section = {
  title: string;
  icon: React.ReactElement;
  links: TLink[];
};

type Mock = {
  products: {
    sections: Section[];
  };
  institutional: {
    links: TLink[];
  };
  offices: {
    links: TLink[];
  };
};

// - *Produtos:*
//   - Consignado: Consignado Público, Consignado Federal, Consignado Privado, Consignado INSS.
//   - Imobiliário: Financiamento de Imóvel, Home Equity/Crédito com garantia de Imóvel.
//   - Crédito: Crédito Pessoal, FGTS, Financiamento/Refinanciamento de Veículos.
//   - Cartões: Cartão Consignado, Cartão Benefício Consignado, Cartão Credcesta.
//   - Consórcio/Seguros: Consórcio, Seguros CPCréditos.
//   - Outros: Painel Solar, Capital de Giro, Operações Estruturadas.

// - *Institucional:*
//   - Nossa História: Texto explicando missão, visão, valores, números e conquistas.
//   - Nossa Diretoria: Texto sobre Paulo, Lucas, Alessandro e Wellington.
//   - Trabalhe Conosco: Encaminhamento para o LinkedIn.
//   - Seja Parceiro: Encaminhamento para o LinkedIn.
//   - Privacidade e Compliance: Texto padrão de compliance.

// - *Nossos Escritórios:*
//   - Nossos Escritórios: Endereços com Maps e GMN.
//   - Fale Conosco: Contato via WhatsApp e redes sociais.

const mock: Mock = {
  products: {
    sections: [
      {
        title: 'Consignado',
        icon: <HandCoins />,
        links: [
          {
            title: 'Consignado Público',
            href: '/consignado/consignado-publico',
          },
          {
            title: 'Consignado Federal',
            href: '/consignado/consignado-federal',
          },
          {
            title: 'Consignado Privado',
            href: '/consignado/consignado-privado',
          },
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-inss',
          },
        ],
      },
      {
        title: 'Imobiliário',
        icon: <HandCoins />,
        links: [
          {
            title: 'Financiamento de Imóvel',
            href: '/credito/financiamento-de-imovel',
          },
          {
            title: 'Home Equity/Crédito com garantia de Imóvel',
            href: '/credito/home-equity',
          },
        ],
      },
      {
        title: 'Crédito',
        icon: <HandCoins />,
        links: [
          {
            title: 'Crédito Pessoal',
            href: '/credito/credito-pessoal',
          },
          {
            title: 'FGTS',
            href: '/credito/fgts',
          },
          {
            title: 'Financiamento/Refinanciamento de Veículos',
            href: '/credito/financiamento-veiculos',
          },
        ],
      },
      {
        title: 'Cartões',
        icon: <HandCoins />,
        links: [
          {
            title: 'Cartão Consignado',
            href: '/cartoes/cartao-consignado',
          },
          {
            title: 'Cartão Benefício Consignado',
            href: '/cartoes/cartao-beneficio-consignado',
          },
          {
            title: 'Cartão Credcesta',
            href: '/cartoes/cartao-credcesta',
          },
        ],
      },
      {
        title: 'Consórcio/Seguros',
        icon: <HandCoins />,
        links: [
          {
            title: 'Consórcio',
            href: '/consorcio',
          },
          {
            title: 'Seguros CPCréditos',
            href: '/seguros-cpcreditos',
          },
        ],
      },
      {
        title: 'Outros',
        icon: <HandCoins />,
        links: [
          {
            title: 'Painel Solar',
            href: '/outros/painel-solar',
          },
          {
            title: 'Capital de Giro',
            href: '/outros/capital-de-giro',
          },
          {
            title: 'Operações Estruturadas',
            href: '/outros/operacoes-estruturadas',
          },
        ],
      },
    ],
  },
  institutional: {
    links: [
      {
        title: 'Nossa História',
        href: '/sobre',
        description: 'Conheça a história da empresa',
        icon: <Building2 />,
      },
      {
        title: 'Nossa Diretoria',
        href: '/diretoria',
        description: 'Conheça nossa diretoria',
        icon: <Building2 />,
      },
      {
        title: 'Trabalhe Conosco',
        href: '/trabalhe-conosco',
        description: 'Venha fazer parte do nosso time',
        icon: <Building2 />,
      },
      {
        title: 'Seja Parceiro',
        href: '/seja-parceiro',
        description: 'Seja um parceiro da empresa',
        icon: <Building2 />,
      },
      {
        title: 'Privacidade e Compliance',
        href: '/privacidade',
        description: 'Política de privacidade e compliance',
        icon: <Building2 />,
      },
    ],
  },
  offices: {
    links: [
      {
        title: 'Nossos Escritórios',
        href: '/escritorios',
        description: 'Endereços com Maps e GMN',
        icon: <Building2 />,
      },
      {
        title: 'Fale Conosco',
        href: '/fale-conosco',
        description: 'Contato via WhatsApp e redes sociais',
        icon: <Building2 />,
      },
    ],
  },
};

type HeaderLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

export function HeaderLink({
  href,
  title,
  description,
  icon,
  ...props
}: HeaderLinkProps) {
  const { className, ...rest } = props;
  console.log('HeaderLinkProps', className);

  return (
    <Link to={href} {...rest}>
      <a
        className={cn(
          'flex items-start gap-4 group text-muted-foreground select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className
        )}
      >
        {icon && <div className="mt-1">{icon}</div>}
        <div className="flex-1">
          <div className="text-sm text-inherit group-hover:text-primary font-medium leading-none flex justify-between items-center">
            {title}
            <ArrowRight className="size-4 min-w-4 transition-all opacity-0 group-hover:opacity-100 delay-100 transform group-hover:translate-x-1" />
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}

export function HeaderProductsLinks() {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-2 p-4 md:w-[800px] ">
      {mock.products.sections.map(({ title, icon, links }) => (
        <ul>
          <div>
            <div className="flex items-center gap-2 p-2">
              {icon}
              <div className="text-sm font-medium">{title}</div>
            </div>
          </div>
          {links.map((link) => (
            <HeaderLink key={link.title} title={link.title} href={link.href} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export function HeaderInstitutionalLinks() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-3 p-4 md:w-[800px] lg:w-[600px]">
      {mock.institutional.links.map((link) => (
        <HeaderLink key={link.title} {...link} />
      ))}
    </div>
  );
}

export function HeaderOfficesLinks() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-3 p-4 md:w-[800px] lg:w-[600px]">
      {mock.offices.links.map((link) => (
        <HeaderLink key={link.title} {...link} />
      ))}
    </div>
  );
}

export function MobileNavLinks({
  links,
  label,
  className,
}: {
  links: TLink[];
  label: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn('w-[350px] space-y-2', className)}
    >
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">{label}</h4>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        {links.map((link) => (
          <HeaderLink key={link.title} {...link} className="ml-4" />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="right">
          <div className="pt-8 space-y-4">
            <Collapsible className="w-[350px] space-y-2">
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">Produtos</h4>
                  <Button variant="ghost" size="sm">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                {mock.products.sections.map(({ title, icon, links }) => (
                  <MobileNavLinks
                    className="pl-4"
                    links={links}
                    label={title}
                  />
                ))}
              </CollapsibleContent>
            </Collapsible>
            <MobileNavLinks
              links={mock.institutional.links}
              label="Institucional"
            />
            <HeaderLink
              title="Nossos Escritórios"
              href="/#nossos-escritorios"
              className="text-primary pl-4 mt-4 text-black"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function Header() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    gsap.to(window, { duration: 1, scrollTo: '#nossos-escritorios' });
  };

  return (
    <header className="h-24 fixed inset-0 bg-background w-full z-50 shadow-md">
      <div className="container flex items-center h-full justify-between">
        <div className="flex items-center gap-8">
          <div>LOGO</div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <HeaderProductsLinks />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Institucional</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <HeaderInstitutionalLinks />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <HeaderLink
                  title="Nossos Escritórios"
                  href="/#nossos-escritorios"
                  onClick={scrollToSection}
                />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
