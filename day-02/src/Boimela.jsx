import BookList from "./BookList";
import Header from "./Header";
import Search from "./Search";

function Boimela() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-3">
        <Search />
        <BookList />
      </div>
    </>
  );
}

export default Boimela;
