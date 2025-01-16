import { ArrowRight, CircleHelp } from 'lucide-react';
import { PayIcon } from '../ui/icons';

export function About() {
  return (
    <div className="container mx-auto flex flex-col gap-4" id="oque-e">
      <div className="flex items-center gap-8">
        <div className="bg-accent rounded-lg p-2 w-fit">
          <PayIcon className="size-12" />
        </div>
        <h2 className="text-3xl font-bold text-cpblue-400">
          Conheça o Consignado Público
        </h2>
      </div>
      <div className="flex flex-col gap-6 backdrop-filter backdrop-blur-sm p-16 rounded-3xl bg-cpblue-300">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <div className="bg-accent rounded-lg p-2 w-fit">
              <CircleHelp className="size-12" />
            </div>
            <h2 className="text-2xl font-bold text-secondary">O que é?</h2>
          </div>
          <p className="text-xs text-secondary">
            É um empréstimo específico para servidores públicos que atuam em
            Governos, Prefeituras e Autarquias. O pagamento para esta modalidade
            de crédito é feito diretamente na folha de pagamento destes
            públicos, o que evita a inadimplência. Nem todas as pessoas estão
            aptas a contratar este tipo de empréstimo, pois ele é destinado a
            pessoas com renda fixa e estável, assim como outras modalidades
            consignáveis.
          </p>
        </div>
        <div className="bg-cyan-500 h-1.5" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <div className="bg-accent rounded-lg p-2 w-fit">
              <CircleHelp className="size-12" />
            </div>
            <h2 className="text-2xl font-bold text-secondary">Para quem?</h2>
          </div>
          <div className="flex lg:gap-2 gap-4  flex-col lg:flex-row">
            <div>
              <div className="flex gap-2 items-center">
                <ArrowRight className="size-6 text-cyan-500" />
                <h3 className="text-xl font-bold text-secondary">Governos</h3>
              </div>
              <p className="text-xs text-secondary">
                Um convênio composto por funcionários públicos estaduais que
                atuam nos órgãos administrados pelos governos dos estados.
                Possui todas as vantagens consignáveis exclusivas da modalidade
                como taxa de juros baixas e prazos mais longos.
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <ArrowRight className="size-6 text-cyan-500" />
                <h3 className="text-xl font-bold text-secondary">
                  Prefeituras
                </h3>
              </div>
              <p className="text-xs text-secondary">
                Convênio formado por funcionários públicos municipais que atuam
                nos órgãos administrados pelas prefeituras das cidades. Assim
                como as outras modalidades, também possui todas as vantagens
                consignáveis.
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <ArrowRight className="size-6 text-cyan-500" />
                <h3 className="text-xl font-bold text-secondary">Autarquias</h3>
              </div>
              <p className="text-xs text-secondary">
                Convênio que abrange todos os funcionários que trabalham em
                instituições que não são vinculadas aos governos e prefeituras,
                pois possui administração própria. Assim como os demais
                funcionários públicos, têm taxas e prazos diferenciados ao
                contratar um consignado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
