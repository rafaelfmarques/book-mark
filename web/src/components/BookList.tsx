import { BookListProps } from "@/interfaces/BookList.interface";
import Rating from "./Rating";

export default function BookList({ data }: BookListProps) {
  return (
    <div className="m-10 sm:mb-10 dark:text-white grid  grid-cols-3 gap-4 justify-center items-center">
      {data.length > 0 &&
        data.map((it) => (
          <div className="max-w-md rounded overflow-hidden shadow-lg flex flex-row">
            <img src={it?.imageLinks?.thumbnail} alt={it.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 dark:text-white flex">
                {it.title}
              </div>

              <p className="text-gray-700 text-base dark:text-white">
                Publisher: {it.publisher}
              </p>
              <p className="text-gray-700 text-base dark:text-white">
                Published Date: {it.publishedDate}
              </p>
              {it?.averageRating && <Rating amount={it?.averageRating} />}
            </div>
          </div>
        ))}
    </div>
  );
}
