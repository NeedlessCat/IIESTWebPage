import { createContext } from "react";
import { faculty, alumniNews, facultyNews, images } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    faculty,
    alumniNews,
    facultyNews,
    images,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
