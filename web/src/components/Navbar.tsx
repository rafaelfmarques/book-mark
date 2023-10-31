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
    <nav className="p-6 flex justify-around mt-6">
      <a
        href="/"
        className="text-2xl hover:text-blue-200 text-blue-400 font-bold"
      >
        <h1>{title}</h1>
      </a>
      <div className="hidden md:flex gap-5">
        {submenus.map((submenu, index) => (
          <a
            href={submenu.link}
            className="text-white hover:text-zinc-400"
            key={`${submenu}-${index}`}
          >
            {submenu.submenu}
          </a>
        ))}
      </div>
    </nav>
  );
}
