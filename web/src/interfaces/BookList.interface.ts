export type BookListProps = {
  data: DataProps[];
};

type DataProps = {
  title: string;
  authors: string[];
  averageRating: number;
  publisher: string;
  publishedDate: string;
  imageLinks: {
    thumbnail: string;
  };
};
