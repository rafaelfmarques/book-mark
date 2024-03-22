"use client";
import BookList from "@/components/BookList";
import Error from "@/components/Error";
import useDebounce from "@/hooks/useDebounce";
import { getBooks } from "@/services/api-books/endpoints";
import { FormEvent, useEffect, useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const inputDebounced = useDebounce(input, 500);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  const handleBooks = async (inputDebounced: string) => {
    await getBooks(inputDebounced)
      .then((result) => setData(result))
      .catch(() => {
        setData([]);
        setError(true);
      });
  };

  useEffect(() => {
    if (inputDebounced) {
      setError(false);
      handleBooks(inputDebounced);
    } else setData([]);
  }, [inputDebounced]);

  return (
    <div>
      <div className="mt-16 justify-center flex">
        <div className="max-w-lg p-2 flex items-start">
          <h3 className="text-xl md:text-2xl lg:text-1xl font-bold dark:text-white">
            Não sabe o nome do livro? Não tem problema, se souber o nome do
            autor ou editora, basta digitar, pesquisar e encontrar
          </h3>
        </div>
      </div>

      <div className="mt-16 flex flex-col justify-center items-center">
        <form className="max-w-xl" onSubmit={handleSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>
        {error && (
          <div className="flex justify-center items-center mt-5">
            <Error message="" />
          </div>
        )}
      </div>

      <BookList data={data} />
    </div>
  );
}
