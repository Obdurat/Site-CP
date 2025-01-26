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
import { SimulationModal } from '../simulationModal';

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

type HeaderData = {
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

const headerData: HeaderData = {
  products: {
    sections: [
      {
        title: 'Consignado',
        icon: <HandCoins />,
        links: [
          {
            title: 'Consignado Público',
            href: '/produto/consignado/consignado-publico',
          },
          {
            title: 'Consignado Federal',
            href: '/produto/consignado/consignado-federal',
          },
          {
            title: 'Consignado Privado',
            href: '/produto/consignado/consignado-privado',
          },
          {
            title: 'Consignado INSS',
            href: '/produto/consignado/consignado-inss',
          },
        ],
      },
      {
        title: 'Imobiliário',
        icon: <HandCoins />,
        links: [
          {
            title: 'Financiamento de Imóvel',
            href: '/produto/imobiliario/financiamento-imovel',
          },
          {
            title: 'Home Equity/Crédito com garantia de Imóvel',
            href: '/produto/imobiliario/home-equity',
          },
        ],
      },
      {
        title: 'Crédito',
        icon: <HandCoins />,
        links: [
          {
            title: 'Crédito Pessoal',
            href: '/produto/credito/credito-pessoal',
          },
          {
            title: 'FGTS',
            href: '/produto/credito/fgts',
          },
          {
            title: 'Financiamento/Refinanciamento de Veículos',
            href: '/produto/credito/financiamento-refinanciamento-veiculos',
          },
        ],
      },
      {
        title: 'Cartões',
        icon: <HandCoins />,
        links: [
          {
            title: 'Cartão Consignado',
            href: '/produto/cartao/cartao-consignado',
          },
          {
            title: 'Cartão Benefício Consignado',
            href: '/produto/cartao/cartao-beneficio-consignado',
          },
          {
            title: 'Cartão Credcesta',
            href: '/produto/cartao/cartao-credcesta',
          },
        ],
      },
      {
        title: 'Consórcio/Seguros',
        icon: <HandCoins />,
        links: [
          {
            title: 'Consórcio',
            href: '/produto/consorcio',
          },
          {
            title: 'Seguros CPCréditos',
            href: '/produto/seguros',
          },
        ],
      },
      {
        title: 'Outros',
        icon: <HandCoins />,
        links: [
          {
            title: 'Painel Solar',
            href: '/produto/outros/painel-solar',
          },
          {
            title: 'Capital de Giro',
            href: '/produto/outros/capital-de-giro',
          },
          {
            title: 'Operações Estruturadas',
            href: '/produto/outros/operacoes-estruturadas',
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
        href: import.meta.env.VITE_LINKEDIN,
        description: 'Venha fazer parte do nosso time',
        icon: <Building2 />,
      },
      {
        title: 'Seja Parceiro',
        href: import.meta.env.VITE_LINKEDIN,
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

  const isExternal = href.startsWith('http');

  return (
    <Link
      to={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
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
    </Link>
  );
}

export function HeaderProductsLinks() {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-2 p-4 md:w-[800px] ">
      {headerData.products.sections.map(({ title, icon, links }) => (
        <ul key={Math.random()}>
          <div>
            <div className="flex items-center gap-2 p-2">
              {icon}
              <div className="text-sm font-medium">{title}</div>
            </div>
          </div>
          {links.map((link) => (
            <HeaderLink
              key={Math.random()}
              title={link.title}
              href={link.href}
            />
          ))}
        </ul>
      ))}
    </div>
  );
}

export function HeaderInstitutionalLinks() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-3 p-4 md:w-[800px] lg:w-[600px]">
      {headerData.institutional.links.map((link) => (
        <HeaderLink key={Math.random()} {...link} />
      ))}
    </div>
  );
}

export function HeaderOfficesLinks() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-3 p-4 md:w-[800px] lg:w-[600px]">
      {headerData.offices.links.map((link) => (
        <HeaderLink key={Math.random()} {...link} />
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
          <HeaderLink key={Math.random()} {...link} className="ml-4" />
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
          <AlignJustify className="mt-2" />
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
                {headerData.products.sections.map(({ title, icon, links }) => (
                  <MobileNavLinks
                    key={Math.random()}
                    className="pl-4"
                    links={links}
                    label={title}
                  />
                ))}
              </CollapsibleContent>
            </Collapsible>
            <MobileNavLinks
              links={headerData.institutional.links}
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
          <a href="/" className="flex items-center size-20">
            <img
              src="/assets/images/logo-cp.png"
              alt="Logo CPCréditos"
              width="200"
              height="200"
              className="size-64 object-cover"
            />
          </a>
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
        <div className="flex items-center gap-4">
          <SimulationModal cta="Simule seu crédito" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
