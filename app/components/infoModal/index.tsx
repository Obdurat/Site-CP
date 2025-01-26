import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useEffect, useState } from 'react';
import { FaPhoneFlip } from 'react-icons/fa6';
import { MdOutlineMail, MdOutlinePhoneEnabled } from 'react-icons/md';

const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

const setToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export function InfoModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const isAlertOpen = getFromLocalStorage('alert-dialog');

    if (isAlertOpen === null) {
      setToLocalStorage('alert-dialog', 'true');
      setIsOpen(true);
      return;
    }

    setIsOpen(getFromLocalStorage('alert-dialog') === 'true');
  }, []);

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={() => {
        setToLocalStorage('alert-dialog', 'false');
        setIsOpen(false);
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-cptext-primary">
            Esclarecimento aos nossos clientes e colaboradores
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-700">
            A CP Créditos e Empresas Associadas{' '}
            <strong>não solicita depósitos</strong>, transferências,
            adiantamentos ou qualquer tipo de pagamento de taxas a seus
            clientes.
            <br />
            <br />
            Caso receba contato de alguém solicitando dinheiro em nosso nome,
            pedimos que nos informe imediatamente por meio dos canais oficiais:
            <br />
            <br />
            <span className="flex gap-2 items-center">
              <MdOutlineMail /> E-mail:
              atendimento@cpassessoriafinanceira.com.br
            </span>
            <span className="flex gap-2 items-center">
              <MdOutlinePhoneEnabled /> Telefone: (11) 3705-5709
            </span>
            <br />
            Estamos à disposição para esclarecer qualquer dúvida.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              setToLocalStorage('alert-dialog', 'false');
              setIsOpen(false);
            }}
            className="bg-cpblue-400"
          >
            Ok
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
