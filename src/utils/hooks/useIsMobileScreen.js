import { useState, useEffect } from "react";

const useIsMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 576) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  });

  return isMobile;
};

export default useIsMobileScreen;
