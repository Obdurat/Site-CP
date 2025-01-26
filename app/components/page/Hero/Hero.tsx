import { PayIcon } from '@/components/ui/icons';
import type { Data, PagesData } from '@/routes/data';
import { Link } from 'react-router';

const SectionLink = ({ title, link }: { title: string; link: string }) => (
  <Link
    to={link}
    target={link.startsWith('http') ? '_blank' : '_self'}
    className="flex items-center gap-2 hover:underline w-fit text-cpblue-300"
  >
    {title}
  </Link>
);

export function Hero({ data }: { data: Data['hero'] }) {
  return (
    <>
      <section className="bg-[url('/assets/images/bg/bg-pattern.png')] h-full flex items-center justify-center bg-cover bg-top">
        <div className="container mx-auto flex items-center pt-8 flex-col md:flex-row justify-between gap-8 relative w-full min-h-[500px] max-w-[800px]">
          <div className="md:max-w-[60%] flex flex-col gap-4 backdrop-filter backdrop-blur-sm p-8 rounded-3xl bg-gray-200/70 md:absolute md:right-0 z-10 ">
            <h1 className="text-cpblue-400 lg:text-5xl text-3xl font-bold">
              {data.title}
            </h1>
            <p className="lg:text-xl text-xs text-gray-700">
              {data.description}
            </p>
          </div>
          <div className="min-h-[300px] md:h-fit md:w-[50%] md:max-w-[448px] md:mr-8 md:absolute md:left-0 bottom-0">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      {data.links && (
        <section className="container mx-auto -mt-8 rounded-2xl relative z-10 bg-background shadow-md hidden lg:block">
          <div className="lg:p-6 p-0 pt-6 flex gap-6 justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="bg-accent rounded-lg p-2 w-fit">
                <PayIcon className="size-12" />
              </div>
              <h2 className="text-xl font-bold">{data.title}</h2>
            </div>
            <div className="flex gap-8">
              {data.links.map((link, index) => (
                <SectionLink key={Math.random()} {...link} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
