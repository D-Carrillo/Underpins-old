import React from 'react';
import { Stage } from 'react-konva';
import {TextNote} from "../notes/TextNote.ts";

interface Props {
    width: number;
    height: number;
    note: TextNote
}

const Workshop: React.FC<Props> = ({width, height, note}) => {
    console.log(note);
    return (
        <Stage width={width} height={height}>
        </Stage>
    )
}

export default Workshop;