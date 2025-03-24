import BookList from "./BookList";
import Header from "./Header";
import Search from "./Search";

function Boimela() {
  return (
    <>
      <h1 className="text-5xl bg-amber-400 py-11 font-bold">Hello World</h1>
      <Search />
      <Header />
      <BookList />
    </>
  );
}

export default Boimela;
