import React from "react";
import LogoAndMenu from "./LogoAndMenu/LogoAndMenu";
import Propile from "./Propile/Propile";
import Search from "./Search/Search";

const Header = () => {
  return (
    <div className="bg-YV_dark h-14 fixed min-w-full overflow-hidden flex justify-between px-4 items-center">
      <LogoAndMenu />
      <Search />
      <Propile />
    </div>
  );
};

export default Header;
