/*

    ADD NOTES - this button would sit at the right more corner and is to add new notes

*/

import { Group, Circle, Text } from "react-konva";

export const AddNoteButton = () => {
    const handleAddNote = () => {
        alert("✅ Button clicked!");
        console.log("this")
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