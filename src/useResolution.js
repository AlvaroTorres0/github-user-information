import { useState, useCallback, useEffect } from "react";
export function useResolution() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return { isMobile };
}
