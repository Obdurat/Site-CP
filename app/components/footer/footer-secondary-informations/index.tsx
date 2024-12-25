import { FooterMobileLinks } from '../footer-mobile-informations';
import { footersInformations } from '../footer-SEO-informations';

export function FooterSecondaryInformations() {
  return (
    <section className="container">
      <div className="flex-row gap-4 justify-between items-center hidden lg:flex">
        {footersInformations.infos.secondary.map((info: any) => {
          return (
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-cyan-500 text-lg">{info.label}</h3>
              {info.links.map((link: any) => {
                return (
                  <a href={link.link} className="text-white">
                    {link.label}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="lg:hidden">
        {footersInformations.infos.secondary.map((info: any) => {
          return <FooterMobileLinks label={info.label} links={info.links} />;
        })}
      </div>
    </section>
  );
}
