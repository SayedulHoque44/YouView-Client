import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Components/Layouts/MainLayouts";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
  },
]);
