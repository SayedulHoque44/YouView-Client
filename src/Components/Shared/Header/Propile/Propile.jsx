import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import useYVContext from "../../../../Util/Hooks/useYVContext";

const Propile = () => {
  const { user, auth } = useYVContext();
  console.log(user);

  //
  const userInItems = (
    <>
      <span className="YV-hover-btn hover:bg-YV_soft_dark cursor-pointer">
        <RiVideoAddLine size={24} />
      </span>
      <span className="YV-hover-btn hover:bg-YV_soft_dark cursor-pointer">
        <IoMdNotificationsOutline size={24} />
      </span>
      <span className="YV-propile-btn hover:bg-YV_soft_dark cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          alt=""
        />
      </span>
    </>
  );
  const userOutItems = (
    <>
      <span className="YV-hover-btn hover:bg-YV_soft_dark cursor-pointer">
        <BiDotsVerticalRounded size={24} />
      </span>
      <span className="p-2 flex items-center text-blue-500 border-2 border-YV_soft_dark rounded-full hover:bg-YV_soft_dark cursor-pointer">
        <HiOutlineUserCircle size={24} />
        <span>Sign in</span>
      </span>
    </>
  );
  //
  return (
    <div className="flex gap-3 items-center">
      {user ? userInItems : userOutItems}
    </div>
  );
};

export default Propile;
