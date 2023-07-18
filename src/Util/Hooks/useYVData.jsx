import React from "react";
import {
  AiOutlineLike,
  AiOutlineSetting,
  AiOutlineTrophy,
} from "react-icons/ai";
import { BiSolidHome, BiSolidVideos } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { HiOutlineFire } from "react-icons/hi";
import { LiaDownloadSolid } from "react-icons/lia";
import {
  MdHelpOutline,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import { PiMusicNoteBold } from "react-icons/pi";
import { RiFeedbackLine, RiPlayList2Fill } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { TbBrandYoutubeKids, TbFlag } from "react-icons/tb";

const useYVData = () => {
  // Aside Home List
  const asidHome = [
    {
      route: "/",
      icon: <BiSolidHome />,
      title: "Home",
    },
    {
      route: "/",
      icon: <BiSolidVideos />,
      title: "Shorts",
    },
    {
      route: "/",
      icon: <MdOutlineSubscriptions />,
      title: "Subscriptions",
    },
  ];
  // Aside Offline List
  const asidOffline = [
    {
      route: "/",
      icon: <MdOutlineVideoLibrary />,
      title: "Library",
    },
    {
      route: "/",
      icon: <GoHistory />,
      title: "History",
    },
    {
      route: "/",
      icon: <MdOutlineWatchLater />,
      title: "Watch later",
    },
    {
      route: "/",
      icon: <LiaDownloadSolid />,
      title: "Downloads",
    },
    {
      route: "/",
      icon: <AiOutlineLike />,
      title: "Liked videos",
    },
    {
      route: "/",
      icon: <RiPlayList2Fill />,
      title: "Somting just wat..",
    },
  ];

  // Aside Home List
  const asidExplore = [
    {
      route: "/",
      icon: <HiOutlineFire />,
      title: "Treanding",
    },
    {
      route: "/",
      icon: <PiMusicNoteBold />,
      title: "Music",
    },
    {
      route: "/",
      icon: <SiYoutubegaming />,
      title: "Gaming",
    },
    {
      route: "/",
      icon: <AiOutlineTrophy />,
      title: "Sports",
    },
  ];
  // Aside Home List
  const asidFeature = [
    {
      route: "/",
      icon: <TbBrandYoutubeKids color="red" />,
      title: "Treanding",
    },
  ];

  // Aside Home List
  const asidSettings = [
    {
      route: "/",
      icon: <AiOutlineSetting />,
      title: "Settings",
    },
    {
      route: "/",
      icon: <TbFlag />,
      title: "Report history",
    },
    {
      route: "/",
      icon: <MdHelpOutline />,
      title: "Help",
    },
    {
      route: "/",
      icon: <RiFeedbackLine />,
      title: "Send feedback",
    },
  ];

  return { asidHome, asidOffline, asidExplore, asidFeature, asidSettings };
};

export default useYVData;
