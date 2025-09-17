/*

 KONVA STAGE - Main background for UI elements

*/

import { useEffect, useState } from "react";
import { Stage, Layer } from "react-konva";
import {StickyNoteUI} from '../UI-notes/UIStickyNotes';
import { StickyNotes } from "../notes/StickyNotes";
import { MainStickyNotesColors } from "../palettes/MainStickyNotesColors";



let color = MainStickyNotesColors;
let note = new StickyNotes("This is the information, this", 3,  color.LightTaupe);

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
                    <StickyNoteUI currNote={note}/>
                </Layer>
        </Stage>
    );
}
