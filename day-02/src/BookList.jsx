import BookRow from "./BookRow";

// Mock data for books
const Books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    featured: false,
  },
  { id: 2, title: "1984", author: "George Orwell", featured: false },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    featured: false,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    featured: false,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    featured: false,
  },
];

export default function BookList() {
  return (
    <ul>
      {Books.map((book) => (
        <li
          className="flex rounded-md justify-between p-4 items-center shadow mt-2"
          key={book.id}
        >
          <BookRow book={book} />
        </li>
      ))}
    </ul>
  );
}
