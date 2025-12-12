import Board from "./board.tsx";
import Workshop from "./Workshop.tsx";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite"
import { WorkshopManager } from "../managers/WorkshopManager.ts";


const UIController = observer(() => {

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
                <Board width={WorkshopManager.isOpen()? windowWidth * .6 : windowWidth} height={windowHeight}/>
            </div>

            { WorkshopManager.isOpen() &&
                <div  style={{outline:'2px solid blue'}}>
                    <Workshop width={windowWidth * .4} height={windowHeight} note={WorkshopManager.getNote()}/>
                </div>
            }
        </div>
    )
});

export default  UIController;
