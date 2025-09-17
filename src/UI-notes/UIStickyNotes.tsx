/*

    UI STICKY NOTES - the sticky note UI is handle here

    To modify how a sticky note looks modify bellow.

*/

import { Group, Rect, Text } from 'react-konva'
import { StickyNotes } from "../notes/StickyNotes";



export const StickyNoteUI = ({currNote}: {currNote: StickyNotes}) => {
    return(
        <Group x={50} y={50} draggable>
            <Rect
                x={30}
                y={30}
                fill={currNote.color}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.2}
                width={300}
                height={200}
            />
            <Text
                x={30}
                y={30}
                text={currNote.content}
                fontSize={18}
                padding={20}
                align="center"
            />
        </Group>
    );
}