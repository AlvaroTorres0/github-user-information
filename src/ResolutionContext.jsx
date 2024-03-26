import { createContext, useContext } from "react";
import { useResolution } from "./useResolution";

const ResolutionContext = createContext();

export const useResolutionContext = () => useContext(ResolutionContext);

export const ResolutionProvider = ({ children }) => {
  const { isMobile } = useResolution();

  return (
    <ResolutionContext.Provider value={{ isMobile }}>
      {children}
    </ResolutionContext.Provider>
  );
};
