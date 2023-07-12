import { useContext } from "react";
import { YVContext } from "../Provider/YVProvider";

const useYVContext = () => {
  const contextValue = useContext(YVContext);
  return contextValue;
};

export default useYVContext;
