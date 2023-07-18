import { Tooltip } from "@mui/material";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import useYVBtnFn from "../../../../Util/Hooks/useYVBtnFn";
import useYVContext from "../../../../Util/Hooks/useYVContext";
import YVIcon from "../../YVIcon";

const Propile = () => {
  const { user, auth, signIn } = useYVContext();
  const { handleSignOut } = useYVBtnFn();

  //
  const handleSignIn = () => {
    signIn()
      .then((res) => {
        const currentUser = res.user;
      })
      .catch((err) => console.log(err.message));
  };
  //

  //
  const userInItems = (
    <>
      <YVIcon
        eventClick={handleSignOut}
        icon={<RiVideoAddLine />}
        title={"Create"}
      />
      <YVIcon icon={<IoMdNotificationsOutline />} title={"Notification"} />
      <Tooltip title={user?.displayName}>
        <span className="YV-propile-btn hover:bg-YV_soft_dark cursor-pointer overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
            alt=""
          />
        </span>
      </Tooltip>
    </>
  );
  const userOutItems = (
    <>
      <YVIcon icon={<BiDotsVerticalRounded />} title={"Your Video"} />
      <span
        onClick={handleSignIn}
        className="p-2 flex items-center text-blue-500 border-2 border-YV_soft_dark rounded-full hover:bg-YV_soft_dark cursor-pointer">
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
