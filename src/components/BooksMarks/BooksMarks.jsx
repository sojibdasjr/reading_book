import React, { useState } from "react";

const BooksMarks = ({ booksMarks, readingTime }) => {
  return (
    <div className="md:w-1/3 border ">
      <h1 className="bg-yellow-50 m-2 text-center p-4 border border-yellow-500 text-2xl">
        Spent time on read :{readingTime} min
      </h1>
      <div className=" bg-sky-200 pb-2 mx-2">
        <h1 className="ms-4 text-2xl pt-2 underline">
          Bookmarked Blogs: {booksMarks.length}
        </h1>
        {booksMarks.map((book, index) => (
          <h2 className="bg-sky-100 text-2xl p-2 m-2 rounded" key={index}>
            {book.title}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default BooksMarks;
