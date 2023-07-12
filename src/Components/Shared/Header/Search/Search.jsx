import React from "react";
import { BiSolidMicrophone } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import "./Search.css";

const Search = () => {
  //

  //
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchBox.value;
    console.log(searchText);
  };
  return (
    <div className={`flex gap-3  lg:${() => console.log("Done")}`}>
      <form className="flex" onSubmit={handleSearch}>
        <input
          type="text"
          name="searchBox"
          placeholder="Search"
          className="lg:w-[530px]  search-input h-11 flex items-center pr-1 bg-YV_dark border-2 border-YV_soft_dark  focus:border-[#018cff] focus:outline-none"
        />
        <button
          type="submit"
          className="search-btn bg-YV_soft_dark px-4 h-11 m-0">
          <IoIosSearch size={24} className="text-YV_white" />
        </button>
      </form>
      <button className="YV-btn ">
        <BiSolidMicrophone size={24} />
      </button>
    </div>
  );
};

export default Search;
