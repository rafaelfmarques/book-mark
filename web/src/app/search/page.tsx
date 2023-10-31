"use client";
import Navbar from "@/components/Navbar";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

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
        <div className="max-w-lg p-2 flex items-start">
          <h3 className="text-xl md:text-2xl lg:text-1xl font-bold ">
            Não sabe o nome do livro? Não tem problema, se souber o nome do
            autor ou editora, basta digitar, pesquisar e encontrar
          </h3>
        </div>
      </div>

      <form className="mt-16 justify-center flex" onSubmit={handleSubmit}>
        <input
          className="bg-blue-200 flex-1 h-8 rounded-lg max-w-lg  border text-white placeholder-slate-900"
          type="text"
          placeholder="Digite o nome do livro, autor, editora..."
          name="campo1"
          value={input}
          onChange={handleChange}
        />

        {/* <button type="submit">
          <AiOutlineSearch />
        </button> */}
      </form>

      <div className=" mt-8 justify-center flex">
        <span>NADA POR AQUI... (CRI) (CRI)</span>
      </div>
    </div>
  );
}
