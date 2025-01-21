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
            A <strong>CPCréditos</strong> e Empresas Assossiadas{' '}
            <strong>NÃO SOLICITAM DEPÓSITOS</strong>, transferências,
            adiantamentos ou cobranças de taxas para nenhum de seus clientes.
            <br />
            Caso alguem tenha entrado em contato solicitando dinheiro em nosso
            nome, entre em contato conosco o quanto antes em:
            atendimento@cpassessoriafinanceira.com.br (11) 3705-5709
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
