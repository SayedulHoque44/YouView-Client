import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import YVProvider from "./Util/Provider/YVProvider.jsx";
import { routes } from "./Util/Routes/Routes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <YVProvider>
    <RouterProvider router={routes} />
  </YVProvider>
);
