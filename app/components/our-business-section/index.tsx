import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { MoveRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router';

const OurBusinessSectionContent = {
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
      'pt-br': 'Entenda nosso negócio',
    },
  },
  subtitle: {
    text: {
      'pt-br': 'Conheça as soluções que a nossa empresa oferece',
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

export function OurBusinessSection() {
  const componentRef = useRef(null);

  useAnimationToRef(componentRef);
  return (
    <section
      ref={componentRef}
      className="flex flex-col gap-8 items-center bg-gray-100 py-20"
    >
      <div className="flex flex-col gap-4 items-start px-8 container">
        <div className="flex gap-4 items-center self-start">
          <div className="bg-white rounded-lg p-2">
            {OurBusinessSectionContent.icon}
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {OurBusinessSectionContent.title.text['pt-br']}
          </h2>
        </div>
        <p className="text-gray-600">
          {OurBusinessSectionContent.subtitle.text['pt-br']}
        </p>
      </div>

      <div className="flex gap-4 px-8 container bg-white py-16 rounded-[2rem] shadow-lg w-full lg:flex-row max-sm:flex-col sm:flex-col">
        <img
          src={OurBusinessSectionContent.subContainer.image.src}
          alt={OurBusinessSectionContent.subContainer.image.alt}
          className="w-full h-full object-cover"
        />
        <div className="flex flex-col gap-4 items-start justify-center">
          <h3 className="text-3xl font-bold text-gray-900 max-sm:text-2xl max-sm:text-wrap">
            {OurBusinessSectionContent.subContainer.title.text['pt-br']}
          </h3>
          <p className="text-gray-600">
            {OurBusinessSectionContent.subContainer.subtitle.text['pt-br']}
          </p>
          <Link
            to="/blog"
            className="text-cyan-500 p-0 text-xl w-fit flex items-center gap-2"
          >
            {OurBusinessSectionContent.subContainer.cta.text['pt-br']}
            <MoveRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
