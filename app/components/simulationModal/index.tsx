import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PhoneInput } from '../ui/phone-input';

export function SimulationModal({
  cta = 'Simule seu crédito',
  variant = 'cp',
}: {
  cta: string;
  variant?: 'cp' | 'cpoutline' | 'cpcyan' | 'cpcyanoutline';
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className="w-fit">
          {cta}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-cptext-primary">
            Simule seu crédito
          </DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para simular seu crédito.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="items-center flex justify-end h-4">
              Nome<span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Seu nome aqui"
              value=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="username"
              className="items-center flex justify-end h-4"
            >
              Email<span className="text-red-500">*</span>
            </Label>
            <Input
              id="username"
              placeholder="Seu email aqui"
              value=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="password"
              className="items-center flex justify-end h-4"
            >
              CPF<span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="123.456.789-10"
              id="password"
              value=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="phone"
              className="items-center flex justify-end h-4"
            >
              Telefone<span className="text-red-500">*</span>
            </Label>
            <PhoneInput
              placeholder="(11) 99999-9999"
              defaultCountry="BR"
              id="phone"
              value=""
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="cpoutline" type="submit" className="w-fit">
            Simule Agora!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
