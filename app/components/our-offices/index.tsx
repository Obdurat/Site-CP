import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { useRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const OurOfficesSectionContent = {
  icon: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 32 32"
      aria-hidden="true"
      data-icon="bv-school"
      color="#inherit"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.85">
        <path
          d="M28.5 21.9733C27.9467 21.9733 27.5 21.5267 27.5 20.9733V12C27.5 11.4467 27.9467 11 28.5 11C29.0533 11 29.5 11.4467 29.5 12V20.9733C29.5 21.5267 29.0533 21.9733 28.5 21.9733Z"
          fill="#25CBDB"
        />
      </g>
      <path
        opacity="0.85"
        d="M29.38 11.4999C29.3 11.3466 29.1733 11.2199 29 11.1333L16.9333 4.53327C16.78 4.4466 16.62 4.37993 16.4667 4.33327C16.3133 4.2866 16.1467 4.2666 15.9667 4.2666C15.7867 4.2666 15.62 4.2866 15.4667 4.33327C15.3133 4.37993 15.1533 4.4466 15 4.53327L2.93335 11.1333C2.75335 11.2199 2.62668 11.3466 2.55335 11.4999C2.47335 11.6533 2.43335 11.8199 2.43335 11.9999C2.43335 12.1799 2.47335 12.3466 2.55335 12.4999C2.63335 12.6533 2.76002 12.7799 2.93335 12.8666L15.0333 19.4999C15.1867 19.5866 15.34 19.6533 15.48 19.6799C15.6267 19.7133 15.7867 19.7333 15.9667 19.7333C16.1467 19.7333 16.3067 19.7133 16.4467 19.6799C16.5933 19.6466 16.74 19.5866 16.8933 19.4999L28.9933 12.8666C29.1733 12.7799 29.3 12.6533 29.3733 12.4999C29.4533 12.3466 29.4933 12.1799 29.4933 11.9999C29.4933 11.8199 29.4533 11.6533 29.3733 11.4999H29.38Z"
        fill="#25CBDB"
      />
      <path
        d="M15.9667 27.7C15.7867 27.7 15.62 27.68 15.4667 27.6467C15.3133 27.6134 15.1533 27.5534 15 27.46L7.33332 23.26C7.01999 23.08 6.77332 22.84 6.58665 22.5267C6.39999 22.2134 6.29999 21.8734 6.29999 21.4934V14.6934L14.6 19.2267L15.2667 19.56C15.4867 19.6734 15.72 19.7267 15.9667 19.7267C16.2133 19.7267 16.4467 19.6734 16.6867 19.56C16.92 19.4467 17.1467 19.34 17.3667 19.2267L25.6333 14.6934V21.4934C25.6333 21.8734 25.54 22.2134 25.3533 22.5267C25.1667 22.84 24.9133 23.08 24.6067 23.26L16.94 27.46C16.7867 27.5467 16.6267 27.6134 16.4733 27.6467C16.32 27.68 16.1533 27.7 15.9733 27.6934L15.9667 27.7Z"
        fill="#222343"
      />
    </svg>
  ),
  title: {
    text: {
      'pt-br': 'Nossos escritórios',
    },
  },
  subtitle: {
    text: {
      'pt-br': 'Conheça nossos escritórios e saiba onde estamos localizados.',
    },
  },

  subContainer: {
    image: {
      src: 'https://www.bevioficial.com.br/image/molecules/card-page/image.png',
      alt: 'Imagem do nosso negócio',
    },
    title: {
      text: {
        'pt-br': 'Título do nosso negócio',
      },
    },
    subtitle: {
      text: {
        'pt-br':
          'lorem ipsum dolor sit amet, consectetur adipiscing elit essere do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    },
    cta: {
      text: {
        'pt-br': 'Saiba mais',
      },
    },
  },
};

const addresses = [
  {
    label: 'Santo Andre/SP',
    key: 'santo-andre',
    address: 'Rua Gertrudes de Lima, 53 3º andar, sala 34',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.76081602899!2d-46.5299917929405!3d-23.660022946731797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4288ecf7dd77%3A0x1dc8908562d39ba7!2sR.%20Gertr%C3%BAdes%20de%20Lima%2C%2053%20-%203%C2%BA%20andar%2C%20sala%2034%20-%20Centro%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009020-000!5e1!3m2!1sen!2sbr!4v1737512578507!5m2!1sen!2sbr',
  },
  {
    label: 'Taboão da Serra/SP',
    key: 'taboao-da-serra',
    address: 'Rua Antônio de Oliveira Salazar, 855 C3 - Jardim São Salvador',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.3201810188903!2d-46.80138028923653!3d-23.63940777865768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce549c6055b39f%3A0xd82cec81787586b9!2sR.%20Ant%C3%B4nio%20de%20Oliveira%20Salazar%2C%20855%20-%20c3%20-%20Jardim%20Sao%20Salvador%2C%20Tabo%C3%A3o%20da%20Serra%20-%20SP%2C%2006775-470!5e1!3m2!1sen!2sbr!4v1737512785062!5m2!1sen!2sbr',
  },
  {
    label: 'Guarulhos/SP',
    key: 'guarulhos',
    address: 'Rua Otávio Forghieri, 72 sala 32 - Centro',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.976263307213!2d-46.535562489241904!3d-23.467147378776538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef55cfcb7487b%3A0xf4cf2ea9dd93961e!2sR.%20Ot%C3%A1vio%20Forghieri%2C%2072%20-%2032%20-%20Jardim%20Gumercindo%2C%20Guarulhos%20-%20SP%2C%2007090-070!5e1!3m2!1sen!2sbr!4v1737512814672!5m2!1sen!2sbr',
  },
  {
    label: 'Vila Matilde/SP',
    key: 'vila-matilde',
    address: 'Av Padres Olivetanos 735 Sala 5 - Vila Esperança',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.312245354127!2d-46.529531889240005!3d-23.528847378733804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e3d40ec3279%3A0x353cb497374a3648!2sAv.%20Padres%20Olivetanos%2C%20735%20-%205%20-%20Vila%20Esperan%C3%A7a%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003648-000!5e1!3m2!1sen!2sbr!4v1737512840143!5m2!1sen!2sbr',
  },
  {
    label: 'Porto Alegre/RS',
    key: 'porto-alegre',
    address: 'Rua sete de Setembro 1126 3 andar Sala 334',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5865.093818087944!2d-51.2320782890076!3d-30.02858337482701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519790e50b3eeab%3A0x9521308b78277788!2sR.%20Sete%20de%20Setembro%2C%201126%20-%203%20andar%20Sala%20334%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090010-191!5e1!3m2!1sen!2sbr!4v1737512882572!5m2!1sen!2sbr',
  },
  {
    label: 'BELÉM/PA',
    key: 'belem',
    address: 'TV Piedade, 469 3 Andar Sala 302 Reduto',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6772.210506509122!2d-48.49614182317701!3d-1.4497590985365925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e9160604b69%3A0xaac6fa4b9f887b28!2sTv.%20Piedade%2C%20469%20-%203%20Andar%20Sala%20302%20-%20Reduto%2C%20Bel%C3%A9m%20-%20PA%2C%2066053-210!5e1!3m2!1sen!2sbr!4v1737512911752!5m2!1sen!2sbr',
  },
];

export function Addresses() {
  return (
    <div className="w-full container">
      <Tabs defaultValue="santo-andre">
        <TabsList className="grid grid-cols-2 h-full sm:grid-cols-4 md:grid-cols-6">
          {addresses.map((address) => (
            <TabsTrigger key={address.key} value={address.key}>
              {address.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {addresses.map((address) => (
          <TabsContent key={address.key} value={address.key}>
            <Card>
              <CardHeader>
                <CardTitle>{address.label}</CardTitle>
                <CardDescription>{address.address}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <iframe
                  src={address.map}
                  className="w-full h-96"
                  style={{ border: 0 }}
                ></iframe>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export function OurOfficesSection() {
  const componentRef = useRef(null);

  useAnimationToRef(componentRef);
  return (
    <section
      ref={componentRef}
      className="flex flex-col gap-8 bg-gray-100 py-20"
      id="nossos-escritorios"
    >
      <div className="flex flex-col gap-4 items-start px-8 container">
        <div className="flex gap-4 items-center self-start">
          <div className="bg-white rounded-lg p-2">
            {OurOfficesSectionContent.icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {OurOfficesSectionContent.title.text['pt-br']}
          </h2>
        </div>
        <p className="text-gray-600">
          {OurOfficesSectionContent.subtitle.text['pt-br']}
        </p>
      </div>
      <Addresses />

      {/* <div className="flex gap-4 px-8 container bg-white py-16 rounded-[2rem] shadow-lg w-full lg:flex-row max-sm:flex-col sm:flex-col">
        <img
          src={OurOfficesSectionContent.subContainer.image.src}
          alt={OurOfficesSectionContent.subContainer.image.alt}
          className="w-full h-full object-cover"
        />
        <div className="flex flex-col gap-4 items-start justify-center">
          <h3 className="text-3xl font-bold text-gray-900 max-sm:text-2xl max-sm:text-wrap">
            {OurOfficesSectionContent.subContainer.title.text['pt-br']}
          </h3>
          <p className="text-gray-600">
            {OurOfficesSectionContent.subContainer.subtitle.text['pt-br']}
          </p>
          <Link
            to="/blog"
            className="text-cptext-cyan p-0 text-xl w-fit flex items-center gap-2"
          >
            {OurOfficesSectionContent.subContainer.cta.text['pt-br']}
            <MoveRight className="size-4" />
          </Link>
        </div>
      </div> */}
    </section>
  );
}
