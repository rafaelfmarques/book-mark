export type BookListProps = {
  data: DataProps[];
};

type DataProps = {
  title: string;
  averageRating: number;
  publisher: string;
  publishedDate: string;
  imageLinks: {
    thumbnail: string;
  };
};
