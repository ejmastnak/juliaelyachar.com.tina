import type { ReactNode } from "react";
import Nav from '@tina/shared/Nav.tsx';

interface Props {
  currentPathname: string;
  children: ReactNode;
}

export default function ReactBaseLayout({ currentPathname, children }: Props) {
  return (
    <>
      <Nav currentPathname={currentPathname} />
      <main className="mx-auto">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
