/*

    ADD NOTES - this button would sit at the right more corner and is to add new notes

*/

import { Group, Circle, Text } from "react-konva";
import { StickyNotes } from "../notes/StickyNotes";
import { MainStickyNotesColors } from "../palettes/MainStickyNotesColors";

type AddNoteButtonProps = {
    onAddNote: (note: StickyNotes) => void;
};

export const AddNoteButton = ({onAddNote}: AddNoteButtonProps ) => {
    const handleAddNote = () => {
        alert("✅ Button clicked!");
        let text = prompt("What is your information?");
        let id = parseInt(prompt("ID") as string);

        let color = MainStickyNotesColors;
        let note = new StickyNotes( text!, id!,  color.LightTaupe);

        onAddNote(note);

    };

    return (
        <Group x={50} y={50} onClick={handleAddNote}>
            <Circle radius={30} fill="blue" />
            <Text
                text="+"
                fontSize={24}
                fill="white"
                align="center"
                offsetX={6} // centers the "+"
                offsetY={12}
            />
        </Group>
    );
};