import { useEffect, useState } from "react";

export const Useviewwidth = () => {
  const [Viewport, SetViewport] = useState("");

  useEffect(() => {
    const handleWindowResize = () => {
      SetViewport(window.innerWidth);
    };

    SetViewport(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return Viewport;
};
