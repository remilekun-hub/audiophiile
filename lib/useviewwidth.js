import { useEffect, useState } from "react";

export const Useviewwidth = () => {
  const [Viewport, SetViewport] = useState("");
  useEffect(() => {
    window.addEventListener("resize", () => {
      setviewport(window.innerWidth);
    });

    setTimeout(() => {
      SetViewport(window.innerWidth);
    }, 100);

    return () => {
      window.removeEventListener("resize", () => {
        SetViewport(window.innerWidth);
      });
    };
  }, []);
  return Viewport;
};
