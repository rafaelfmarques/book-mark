"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Navbar
        title="BOOKMARK"
        submenus={[
          { submenu: "SOBRE", link: "/" },
          { submenu: "CONTATO", link: "/" },
        ]}
      />
      <div className="mt-16 justify-center flex">
        <div className="max-w-md p-4 flex items-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold ">
            Encontre os livros que você mais {""}
            <span className="text-red-600 hover:text-red-300">ama</span>, e
            salve-os para nunca mais perdê-los!
            <AiOutlineHeart className="ml-2 inline " />
          </h3>
        </div>
      </div>
      <div className="mt-16 justify-center flex ">
        <Link
          href={"/search"}
          className="px-4 py-3 bg-blue-400 hover:bg-blue-300 text-white rounded flex items-center gap-3 max-w-3xl"
        >
          BUSCAR
        </Link>
      </div>
      <footer></footer>
    </div>
  );
}
