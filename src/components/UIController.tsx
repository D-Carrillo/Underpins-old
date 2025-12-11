import Board from "./board.tsx";
import Workshop from "./Workshop.tsx";
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

    return (
        <div style={{display:'flex'}}>
            <div style={{outline:'2px solid red'}}>
                <Board width={windowWidth * .7} height={windowHeight}/>
            </div>
            <div  style={{outline:'2px solid blue'}}>
                <Workshop width={windowWidth * .3} height={windowHeight}/>
            </div>
        </div>
    )
}

export default  UIController;