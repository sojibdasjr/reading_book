import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";

const SingleContents = ({
  singleBook,
  handleBookMark,
  handleAddToBooksmarks,
}) => {
  const [details, setDetails] = useState(false);
  const {
    Id,
    title,
    cover,
    author_Img,
    author,
    posted_date,
    reading_time,
    hashtags,
    content,
  } = singleBook;
  const handleClickDetails = () => {
    setDetails(!details);
  };

  return (
    <div>
      <img
        className="rounded-lg  "
        src={cover}
        alt={`Reading Books Title ${title}`}
      />
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 my-4 ">
            <img className="w-16 rounded-md" src={author_Img} alt="" />
            <div>
              <h1 className="text-2xl font-bold">{author}</h1>
              <h1 className="opacity-50">{posted_date}</h1>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <h1>{reading_time} mins read</h1>
            <button onClick={() => handleBookMark(singleBook)}>
              <FaRegBookmark />
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold ">{title}</h1>
      {hashtags.map((hash, index) => (
        <span key={index}>
          <a className="opacity-50" href="#">
            #{hash}
          </a>
        </span>
      ))}{" "}
      <br />
      <button
        onClick={() => handleAddToBooksmarks(Id, reading_time)}
        className="text-blue-600 underline"
      >
        Marks as Read
      </button>{" "}
      <br />
      <button
        onClick={handleClickDetails}
        className="my-2 bg-yellow-300 p-1 rounded-md"
      >
        {details ? `${content}` : "Details"}
      </button>
    </div>
  );
};

export default SingleContents;
