import { Stage} from "react-konva";
import { useEffect, useState } from "react";
import TextNodes from "./TextNode.tsx"

const Board = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
          setWindowHeight(window.innerHeight); 
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Stage width={windowWidth} height={windowHeight}>
            <TextNodes/>
        </Stage>
    ); 
};

export default Board;
