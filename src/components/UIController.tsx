import Board from "./Board.tsx";
import { useState, useEffect } from "react";
const UIController = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <Board width={windowWidth} height={windowHeight}/>
    )
};

export default  UIController;
