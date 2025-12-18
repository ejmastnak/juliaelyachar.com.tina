import type { ReactNode } from "react";

type Props = {
  href: string;
  currentPathname: string;
  children: ReactNode;
};


function normalize(pathname) {
  return (pathname != "/") ? pathname.replace(/\/$/, "") : pathname;
}

export default function NavLink({href, currentPathname, children}: Props) {
  return (
    <a
      href={href}
      className={`hover:underline hover:text-blue-600 ${normalize(currentPathname) == normalize(href) ? 'font-semibold' : ''}`}
    >
      {children}
    </a>
  );
}
