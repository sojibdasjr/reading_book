import BooksContents from "./components/BooksContents/BooksContents";
import BooksMarks from "./components/BooksMarks/BooksMarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div>
        <BooksContents />
        <BooksMarks />
      </div>
    </>
  );
}

export default App;
