import React from "react";
import { Link } from "react-router-dom";
import useYVContext from "../../../Util/Hooks/useYVContext";
import useYVData from "../../../Util/Hooks/useYVData";

const Aside = () => {
  const { isAsideOpen } = useYVContext();
  const { asidHome, asidOffline, asidExplore, asidFeature, asidSettings } =
    useYVData();

  return (
    <>
      {isAsideOpen ? (
        <div
          className={`p-3 w-56 bg-YV_dark  mt-14 fixed min-h-screen overflow-hidden hover:overflow-y-scroll top-0 bottom-0`}>
          {/* asidHome */}
          <div>
            {asidHome.map((item) => (
              <Link
                key={item.title}
                to={item.route}
                className=" hover:bg-YV_soften_dark flex items-center p-3 gap-5 mr-2 rounded text-xl">
                {item.icon}
                <span className="text-sm font-semibold">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-[0.5px] border-[#ffffff33] my-2" />
          {/* asidOffline */}
          <div>
            {asidOffline.map((item) => (
              <Link
                key={item.title}
                to={item.route}
                className=" hover:bg-YV_soften_dark flex items-center p-3 gap-5 mr-2 rounded text-xl">
                {item.icon}
                <span className="text-sm font-semibold">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-[0.5px] border-[#ffffff33] my-2" />
          {/* asidExplore */}
          <span className="font-semibold text-md">Explore</span>
          <div>
            {asidExplore.map((item) => (
              <Link
                key={item.title}
                to={item.route}
                className=" hover:bg-YV_soften_dark flex items-center p-3 gap-5 mr-2 rounded text-xl">
                {item.icon}
                <span className="text-sm font-semibold">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-[0.5px] border-[#ffffff33] my-2" />
          {/* asidFeature */}
          <span className="font-semibold text-md">More from YouView</span>
          <div>
            {asidFeature.map((item) => (
              <Link
                key={item.title}
                to={item.route}
                className=" hover:bg-YV_soften_dark flex items-center p-3 gap-5 mr-2 rounded text-xl">
                {item.icon}
                <span className="text-sm font-semibold">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-[0.5px] border-[#ffffff33] my-2" />
          {/* asidSettings */}
          <div>
            {asidSettings.map((item) => (
              <Link
                key={item.title}
                to={item.route}
                className=" hover:bg-YV_soften_dark flex items-center p-3 gap-5 mr-2 rounded text-xl">
                {item.icon}
                <span className="text-sm font-semibold">{item.title}</span>
              </Link>
            ))}
          </div>

          {/*  */}
        </div>
      ) : (
        <div className={`w-24 bg-green-800  mt-14 fixed min-h-screen`}>
          <h1>Aside</h1>
        </div>
      )}
    </>
  );
};

export default Aside;
