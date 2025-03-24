import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";

export default function BookRow({ book }) {
  return (
    <>
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook />
    </>
  );
}
