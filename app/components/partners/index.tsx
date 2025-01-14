import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { useRef, useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';

const partners = [
  {
    image: '/assets/images/partners/c6consig.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/banco-pan.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/banco-day-coval.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/ole-consignado.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/facta-financeira.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/santander.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/itau.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/banco-mercantil.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/banco-bmg.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/master.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/banrisul.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/financeira-BRB.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/banco-do-brasil.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/crefaz.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
  {
    image: '/assets/images/partners/bradesco.svg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus',
    link: 'https://www.google.com',
  },
];

type Partner = {
  image: string;
  info: string;
  link: string;
};

function PartnerCard({ partner }: { partner: Partner }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      className={cn(
        'p-2 border-2 hover:border-2 group cursor-pointer hover:shadow-lg min-w-48 transition-all shadow-sm rounded-xl relative aspect-video duration-300 flex items-center justify-center',
        showInfo && 'z-50 border-0 hover:border-0'
      )}
    >
      <div
        onClick={() => setShowInfo(!showInfo)}
        className="absolute flex bg-border  z-10 text-gray-500 font-semibold top-0 left-0 p-1 px-4 rounded-br-xl rounded-tl-md"
      >
        <div className="text-xs flex items-center p-0 ">
          <ChevronRight size={12} />
          Info
        </div>
      </div>
      <Link to={partner.link} className="flex items-center justify-center">
        <img className="" src={partner.image} alt="partner" />
        <ExternalLink className="absolute right-2 bottom-2 size-4 text-gray-200 transition-all duration-300 group-hover:text-gray-400" />
        {showInfo && (
          <div className="absolute bg-white p-4 rounded-lg shadow-lg top-0 left-0 pt-8 border-4">
            <p className="text-sm">{partner.info}</p>
          </div>
        )}
      </Link>
    </div>
  );
}

export function Partners() {
  const componentRef = useRef(null);

  useAnimationToRef(componentRef);
  return (
    <section ref={componentRef} className="container mx-auto lg:gap-44 gap-16">
      <div className="gap-16 flex flex-col">
        <div className="text-xl px-8 border-cyan-400 border-l-4 flex items-center w-full">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-4">
              <span className="text-2xl font-bold text-gray-950">
                Conhça nossos parceiros
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
