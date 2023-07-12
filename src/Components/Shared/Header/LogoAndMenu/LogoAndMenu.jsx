import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import useYVContext from "../../../../Util/Hooks/useYVContext";
const LogoAndMenu = () => {
  const { setIsAsideOpen, isAsideOpen } = useYVContext();
  return (
    <div className="flex gap-4 text-2xl items-center">
      <span
        className="YV-hover-btn hover:bg-YV_soft_dark cursor-pointer"
        onClick={() => setIsAsideOpen(!isAsideOpen)}>
        <HiMenu />
      </span>
      <span className="flex items-center gap-1 cursor-pointer">
        <BsFillPlayCircleFill className="text-info" />
        <span className="tracking-tighter">YouView</span>
      </span>
    </div>
  );
};

export default LogoAndMenu;
