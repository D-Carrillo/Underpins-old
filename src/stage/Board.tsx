/*

 KONVA STAGE - Main background for UI elements

*/

import { useEffect, useState } from "react";
import { Stage, Layer } from "react-konva";
import {StickyNoteUI} from '../UI-notes/UIStickyNotes';

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
                    <StickyNoteUI/>
                    <StickyNoteUI/>
                </Layer>
        </Stage>
    );
}
