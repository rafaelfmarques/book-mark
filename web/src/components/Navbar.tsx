import Link from "next/link";
import Toggle from "./Toggle";

type NavbarProps = {
  title: string;
  submenus: Array<SubmenuProps>;
};

type SubmenuProps = {
  submenu: string;
  link: string;
};

export default function Navbar({ title, submenus }: NavbarProps) {
  return (
    <div className="dark:bg-dark">
      <nav className="p-6 flex justify-around">
        <Link
          href="/"
          className="text-2xl hover:text-blue-200 text-blue-400 font-bold"
        >
          <h1>{title}</h1>
        </Link>
        <div className="ml-5 flex  gap-5">
          {submenus.map((item) => (
            <Link
              href={item.link}
              className="text-blue-300 self-center hover:text-zinc-400"
              key={`${item.submenu}-${item.link}`}
            >
              {item.submenu}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          <Toggle />
        </div>
      </nav>
    </div>
  );
}
