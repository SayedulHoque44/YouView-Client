import React from "react";
import useYVContext from "../../../Util/Hooks/useYVContext";

const Aside = () => {
  const { isAsideOpen } = useYVContext();

  return (
    <div
      className={`${
        isAsideOpen ? "w-44 " : "w-24"
      } bg-green-800 h-5 flex items-center justify-center mt-14 fixed min-h-screen`}>
      <h1>Aside</h1>
    </div>
  );
};

export default Aside;
