import type { PropsWithChildren } from 'react';

export function FooterRoot({ children }: PropsWithChildren<any>) {
  return (
    <footer className="bg-blue-950 py-16 lg:py-32 flex flex-col lg:gap-8 items-center">
      {children}
    </footer>
  );
}
