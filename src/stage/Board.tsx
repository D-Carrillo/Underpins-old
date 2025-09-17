/*

 KONVA STAGE - Main background for UI elements

*/

import { useEffect, useState } from "react";
import { Stage, Layer } from "react-konva";
import {StickyNoteUI} from '../UI-notes/UIStickyNotes';
import { StickyNotes } from "../notes/StickyNotes";
import { AddNoteButton } from "../UI-notes/AddNotesButton.tsx"


export default function Board()
{
    const [notes, setNotes] = useState<StickyNotes[]>([]);

    const handleAddNote = ( note: StickyNotes) => {
      setNotes((prev) => [...prev,note]);
    };
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
        <div>
            <Stage width={Size.width} height={Size.height}>
                <Layer>
                    <AddNoteButton onAddNote={handleAddNote}/>
                    {notes.map((n) => (
                        <StickyNoteUI currNote={n}/>
                    ))}
                </Layer>
            </Stage>
        </div>
    );
}
