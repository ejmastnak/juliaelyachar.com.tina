import { useRef, useEffect } from "react";
import { useTina, } from "tinacms/dist/react";
import client from "@tina/__generated__/client";
import NavLink from '@tina/components/NavLink.tsx';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
const content = await client.queries.myNav({ relativePath: "nav.json" });

interface Props {
  currentPathname: string;
}

export default function Nav({currentPathname}: Props) {

  const { data } = useTina({
    query: content.query,
    variables: content.variables,
    data: content.data,
  });
  const nav = data.nav;

  const menuRef = useRef(null);
  const barsRef = useRef(null);
  const xmarkRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const bars = barsRef.current;
    const xmark = xmarkRef.current;

    const observer = new MutationObserver(() => {
      const open = menu.hasAttribute("open");
      bars.classList.toggle("hidden", open);
      xmark.classList.toggle("hidden", !open);
    });

    observer.observe(menu, { attributes: true, attributeFilter: ["open"] });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky relative top-0 bg-white border-b z-20 py-5 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex gap-x-5 items-center ml-auto w-fit">

          {/* Desktop */}
          <ul className="hidden sm:flex flex gap-x-8 mr-5">
            {nav.navLinks.map((navLink) => (
              <li key={navLink.href}><NavLink href={navLink.href} currentPathname={currentPathname}>{navLink.text}</NavLink></li>
            ))}
          </ul>

          {/* Mobile menu */}
          <el-dropdown class="inline-block sm:hidden">
            <button className="inline-flex items-center justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20">
              <Bars3Icon ref={barsRef} className="text-gray-600 h-[1.75rem] w-[1.75rem] xs:h-[2rem] xs:w-[2rem]" />
              <XMarkIcon ref={xmarkRef} className="hidden text-gray-600 h-[1.75rem] w-[1.75rem] xs:h-[2rem] xs:w-[2rem]" />
            </button>

            <el-menu ref={menuRef} anchor="bottom end" popover class="m-0 origin-top-right rounded-md bg-white p-0 shadow-lg outline outline-1 outline-black/5 transition [--anchor-gap:theme(spacing.2)] [transition-behavior:allow-discrete] data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 w-fit min-w-[160px]">
              <ul className="flex flex-col px-8 pt-6 pb-8 text-left mx-auto gap-y-4">
                {nav.navLinks.map((navLink) => (
                  <li key={navLink.href} className="border-b border-gray-200"><NavLink href={navLink.href} currentPathname={currentPathname}>{navLink.text}</NavLink></li>
                ))}
              </ul>
            </el-menu>
          </el-dropdown>

        </div>

      </div>

    </nav>
  );
}
