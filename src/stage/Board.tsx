/*

 KONVA STAGE - Main background for UI elements

*/

import { useEffect, useState } from "react";
import { Stage, Layer, Rect } from "react-konva";

export default function Board()
{
    const [Size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({width: window.innerWidth, height: window.innerHeight} )}

        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <Stage width={Size.width} height={Size.height}>
                <Layer>
                    <Rect x={50} y={100} width={100} height={200} fill={"red"}></Rect>
                </Layer>
        </Stage>
    );
}
