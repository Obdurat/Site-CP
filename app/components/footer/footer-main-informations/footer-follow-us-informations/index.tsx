import { AppStoreIcon, PlayStoreIcon } from '@/components/ui/icons';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export function FooterFollowUsInformations() {
  return (
    <section className="flex gap-4 justify-between items-start bg-[#FFFFFF0D] rounded-[2rem]  lg:h-[400px] max-w-[820px] w-full p-8 md:p-16 flex-col md:flex-row h-hull">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-cptext-cyan text-lg">Atendimento</h3>
        <p className="text-gray-400 font-bold text-[38px]">0800 000 0000</p>
        <a className="text-white">Fale conosco</a>
        <a className="text-white">Sua voz</a>
        <p className="text-white whitespace">
          Politicas de Privacidade e Compliance
        </p>
        <p className="text-white">Comunicacao de Violao de Dados</p>
      </div>
      {/* <hr className="w-full border-1 border-gray-500 rotate-90" /> */}
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-cptext-cyan text-lg">Siga a Bevi</h3>
          <div className="flex gap-4">
            <Linkedin className="text-secondary" />
            <Instagram className="text-secondary" />
            <Facebook className="text-secondary" />
            <Youtube className="text-secondary" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-cptext-cyan text-lg whitespace">
            Baixe o APP
          </h3>
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="border-[1px] border-white rounded-[8px] p-2 w-[min-content] bg-[#FFFFFF0D]">
              <AppStoreIcon />
            </div>
            <div className="border-[1px] border-white rounded-[8px] p-2 w-[min-content] bg-[#FFFFFF0D]">
              <PlayStoreIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
