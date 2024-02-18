import { useState } from "react";
import BooksContents from "./components/BooksContents/BooksContents";
import BooksMarks from "./components/BooksMarks/BooksMarks";
import Header from "./components/Header/Header";

function App() {
  const [booksMarks, setBooksMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookMark = (content) => {
    const newBooksMarks = [...booksMarks, content];
    setBooksMarks(newBooksMarks);
  };
  const handleAddToBooksmarks = (id, time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    // remove bookmarks
    const remainingBookMakrs = booksMarks.filter((book) => book.Id !== id);

    setBooksMarks(remainingBookMakrs);
  };

  return (
    <>
      <div>
        <Header></Header>
        <div className="md:flex gap-6 max-w-7xl mx-auto">
          <BooksContents
            handleBookMark={handleBookMark}
            handleAddToBooksmarks={handleAddToBooksmarks}
          />
          <BooksMarks booksMarks={booksMarks} readingTime={readingTime} />
        </div>
      </div>
    </>
  );
}

export default App;
