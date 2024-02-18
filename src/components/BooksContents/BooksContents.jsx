import React, { useEffect, useState } from "react";
import SingleContents from "../SingleContainer/SingleContents";

const BooksContents = ({ handleBookMark, handleAddToBooksmarks }) => {
  const [booksContenst, setBooksContents] = useState([]);
  useEffect(() => {
    fetch("reading.json")
      .then((res) => res.json())
      .then((data) => setBooksContents(data));
  }, []);
  return (
    <div className="md: w-2/3">
      {booksContenst.map((book) => (
        <SingleContents
          handleAddToBooksmarks={handleAddToBooksmarks}
          handleBookMark={handleBookMark}
          singleBook={book}
          key={book.Id}
        ></SingleContents>
      ))}
    </div>
  );
};

export default BooksContents;
