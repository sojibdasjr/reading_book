import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center py-2  max-w-full px-10 bg-sky-100">
        <h1 className="text-3xl font-bold">Reading Books</h1>
        <img src={profile} alt="" />
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Header;
