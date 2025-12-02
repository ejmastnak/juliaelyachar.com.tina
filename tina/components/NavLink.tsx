import type { ReactNode } from "react";

type Props = {
  href: string;
  currentPathname: string;
  tinaField?: string;
  children: ReactNode;
};


function normalize(pathname) {
  return (pathname != "/") ? pathname.replace(/\/$/, "") : pathname;
}

export default function NavLink({href, currentPathname, tinaField, children}: Props) {
  return (
    <a
      href={href}
      data-tina-field={tinaField}
      className={`hover:underline hover:text-blue-600 ${normalize(currentPathname) == normalize(href) ? 'font-semibold' : ''}`}
    >
      {children}
    </a>
  );
}
