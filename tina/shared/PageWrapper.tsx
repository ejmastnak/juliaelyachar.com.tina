import Wrapper from '@tina/shared/Wrapper.tsx'
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <Wrapper classes="py-8 md:py-12">
      {children}
    </Wrapper>
  );
}
