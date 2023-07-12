import React from "react";
import Home from "../Pages/Home/Home";
import Aside from "../Shared/Aside/Aside";
import Header from "../Shared/Header/Header";

const MainLayouts = () => {
  return (
    <div className="text-white overflow-hidden">
      <Header />
      <Aside />
      <Home />
    </div>
  );
};

export default MainLayouts;
