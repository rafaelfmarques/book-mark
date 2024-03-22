import { BookListProps } from "@/interfaces/BookList.interface";
import Rating from "./Rating";
import { transformDate } from "@/utils/transformDate";
import { formatArrayOfAuthors } from "@/utils/formatArrayOfAuthors";

export default function BookList({ data }: BookListProps) {
  return (
    <div className="m-10 sm:mb-10 dark:text-white grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-center items-center">
      {data.length > 0 &&
        data.map((it) => (
          <div className="max-w-md rounded overflow-hidden shadow-lg flex flex-row">
            <img src={it?.imageLinks?.thumbnail} alt={it.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 dark:text-white flex">
                {it.title}
              </div>
              {it.authors && (
                <p className="text-gray-700 text-base dark:text-white mb-2">
                  Autores: {formatArrayOfAuthors(it.authors)}.
                </p>
              )}

              <p className="text-gray-700 text-base dark:text-white mb-2">
                Editora: {it.publisher}
              </p>
              {it.publishedDate && (
                <p className="text-gray-700 text-base dark:text-white">
                  Data de Publicação: {transformDate(it.publishedDate)}
                </p>
              )}

              {it?.averageRating && <Rating amount={it?.averageRating} />}
            </div>
          </div>
        ))}
    </div>
  );
}
