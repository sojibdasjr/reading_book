import BooksContents from "./components/BooksContents/BooksContents";
import BooksMarks from "./components/BooksMarks/BooksMarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <div className="md:flex gap-6 max-w-7xl mx-auto">
          <BooksContents />
          <BooksMarks />
        </div>
      </div>
    </>
  );
}

export default App;
