import type { ReactNode } from "react";

type Props = {
  tinaField: string,
  children: ReactNode;
};

export default function Heading({tinaField, children}: Props) {
  return (
    <h1 className="text-3xl" data-tina-field={tinaField}>{children}</h1>
  );
}
