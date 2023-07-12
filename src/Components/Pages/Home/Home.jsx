import React from "react";
import useYVContext from "../../../Util/Hooks/useYVContext";
import ShortList from "./ShortList/ShortList";

const Home = () => {
  const { setIsAsideOpen, isAsideOpen } = useYVContext();

  return (
    <div
      className={`${
        isAsideOpen ? "ml-44" : "ml-24"
      } bg-blue-800  pt-14  h-[1000px]`}>
      <ShortList />

      <div className="bg-violet-800 flex flex-col items-center my-9 px-2 ">
        <div className="flex gap-2 py-5">
          <div className="bg-black h-56 w-48 flex text-white justify-center items-center">
            content box
          </div>
          <div className="bg-black h-56 w-48 flex text-white justify-center items-center">
            content box
          </div>
          <div className="bg-black h-56 w-48 flex text-white justify-center items-center">
            content box
          </div>
        </div>
        {/*  */}
        <div className="flex gap-2 py-5">
          <div className="bg-black h-56 w-48 flex text-white justify-center items-center">
            content box
          </div>
          <div className="bg-black h-56 w-48 flex text-white justify-center items-center">
            content box
          </div>
          <div className="bg-black h-56 w-48 flex text-white justify-center items-center">
            content box
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Home;
