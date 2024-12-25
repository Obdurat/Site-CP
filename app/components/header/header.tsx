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
import { useState } from 'react';
import { cn } from '@/lib/utils';

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
  services: {
    links: TLink[];
  };
};

const mock: Mock = {
  products: {
    sections: [
      {
        title: '/Consignado',
        icon: <HandCoins />,
        links: [
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-publico',
          },
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-publico',
          },
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-publico',
          },
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-publico',
          },
          {
            title: 'Consignado INSS',
            href: '/consignado/consignado-publico',
          },
        ],
      },
      {
        title: '/Crédito',
        icon: <HandCoins />,
        links: [
          {
            title: 'Crédito Pessoal',
            href: '/credito/credito-pessoal',
          },
          {
            title: 'Crédito Imobiliário',
            href: '/credito/credito-imobiliario',
          },
          {
            title: 'Crédito Veículos',
            href: '/credito/credito-veiculos',
          },
          {
            title: 'FGTS',
            href: '/credito/fgts',
          },
        ],
      },
      {
        title: '/Cartões',
        icon: <HandCoins />,
        links: [
          {
            title: 'Crédito Pessoal',
            href: '/credito/credito-pessoal',
          },
          {
            title: 'Crédito Imobiliário',
            href: '/credito/credito-imobiliario',
          },
          {
            title: 'Crédito Veículos',
            href: '/credito/credito-veiculos',
          },
          {
            title: 'FGTS',
            href: '/credito/fgts',
          },
        ],
      },
      {
        title: '/Seguros',
        icon: <HandCoins />,
        links: [
          {
            title: 'Crédito Pessoal',
            href: '/credito/credito-pessoal',
          },
          {
            title: 'Crédito Imobiliário',
            href: '/credito/credito-imobiliario',
          },
        ],
      },
      {
        title: '/Outros',
        icon: <HandCoins />,
        links: [
          {
            title: 'Crédito Pessoal',
            href: '/credito/credito-pessoal',
          },
          {
            title: 'Crédito Imobiliário',
            href: '/credito/credito-imobiliario',
          },
          {
            title: 'Crédito Veículos',
            href: '/credito/credito-veiculos',
          },
          {
            title: 'FGTS',
            href: '/credito/fgts',
          },
        ],
      },
    ],
  },
  institutional: {
    links: [
      {
        title: 'Sobre',
        href: '/sobre',
        description: 'Conheça a história da empresa',
        icon: <Building2 />,
      },
      {
        title: 'Trabalhe Conosco',
        href: '/trabalhe-conosco',
        description: 'Venha fazer parte do nosso time',
        icon: <Building2 />,
      },
      {
        title: 'Política de Privacidade',
        href: '/politica-de-privacidade',
        description: 'Conheça nossa política de privacidade',
        icon: <Building2 />,
      },
    ],
  },
  services: {
    links: [
      {
        title: 'Atendimento',
        href: '/atendimento',
        description: 'Atendimento ao cliente',
        icon: <Building2 />,
      },
      {
        title: 'FAQ',
        href: '/faq',
        description: 'Perguntas frequentes',
        icon: <Building2 />,
      },
      {
        title: 'Contato',
        href: '/contato',
        description: 'Entre em contato conosco',
        icon: <Building2 />,
      },
    ],
  },
};

type HeaderLinkProps = {
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
}: HeaderLinkProps) {
  return (
    <Link to={href}>
      <a className="flex items-start gap-4 group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <div className="mt-1">{icon}</div>
        <div className="flex-1">
          <div className="text-sm text-muted-foreground group-hover:text-primary font-medium leading-none flex justify-between items-center">
            {title}
            <ArrowRight className="size-4 transition-all opacity-0 group-hover:opacity-100 delay-100 transform group-hover:translate-x-1" />
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
    <div className="grid grid-cols-3 grid-rows-1 gap-3 p-4 md:w-[800px] lg:w-[600px]">
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

export function HeaderServicesLinks() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-3 p-4 md:w-[800px] lg:w-[600px]">
      {mock.services.links.map((link) => (
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
          <HeaderLink key={link.title} {...link} />
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
            <MobileNavLinks links={mock.services.links} label="Atendimentos" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function Header() {
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
                <NavigationMenuTrigger>Atendimentos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <HeaderServicesLinks />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
