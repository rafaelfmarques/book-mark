"use client";
import Navbar from "@/components/Navbar";
import useDebounce from "@/hooks/useDebounce";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const inputDebounced = useDebounce(input, 500);

  const getBooks = async (input: string) => {
    try {
      const { data } = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: input,
          },
        }
      );
      const result = data.items.map((book) => book.volumeInfo);
      setData(result);
    } catch (error) {}
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (inputDebounced) getBooks(inputDebounced);
    else setData([]);
  }, [inputDebounced]);

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
          <h3 className="text-xl md:text-2xl lg:text-1xl font-bold dark:text-white">
            Não sabe o nome do livro? Não tem problema, se souber o nome do
            autor ou editora, basta digitar, pesquisar e encontrar
          </h3>
        </div>
      </div>

      <form className="mt-16 justify-center flex" onSubmit={handleSubmit}>
        <input
          className="bg-blue-100 flex-1 h-8 rounded-lg max-w-lg  border text-black placeholder-slate-900 "
          type="text"
          placeholder="Digite o nome do livro, autor, editora..."
          name="campo1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div className="dark:text-white">
        {data.length > 0 &&
          data.map((it) => (
            <>
              <img src={it?.imageLinks?.thumbnail}></img>
              <div>{it.title}</div>
              <div>{it.authors}</div>
              <div>{it.publisher}</div>
              <div>{it.publishedDate}</div>
              <div>{it.averageRating}</div>
            </>
          ))}
      </div>
    </div>
  );
}
