import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-around items-center py-2 mb-6 bg-slate-300">
      <h1 className="text-3xl font-bold">Reading Books</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
