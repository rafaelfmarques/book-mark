export default function Navbar() {
  return (
    <nav className="p-6 flex justify-around mt-6">
      <a
        href="/"
        className="text-2xl hover:text-blue-200 text-blue-400 font-bold"
      >
        <h1>BOOKMARK</h1>
      </a>
      <div className="hidden md:flex gap-5">
        <a href="/" className="text-white hover:text-zinc-400">
          Sobre
        </a>
        <a href="/" className="text-white hover:text-zinc-400">
          Contato
        </a>
      </div>
    </nav>
  );
}
