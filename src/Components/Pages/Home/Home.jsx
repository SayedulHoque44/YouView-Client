import React from "react";
import ShortList from "./ShortList/ShortList";

const Home = () => {
  return (
    <div className="bg-blue-800 min-h-screen">
      <ShortList />

      <h1 className="">Home/body</h1>

      <div className="bg-violet-800 h-44 w-1/2 flex items-center justify-center">
        content
      </div>
    </div>
  );
};

export default Home;
