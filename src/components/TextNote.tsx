import { Rect, Text, Group } from "react-konva";
import { TextNote as TextN } from "../notes/TextNote.ts"
import React, { useState, useRef, useEffect } from "react";

interface Props {
    concrete_note: TextN;
}

const TextNote: React.FC<Props> = ( {concrete_note}) => {

    const noteRef = useRef(concrete_note);

    const note = noteRef.current;

    let [position, setPosition] = useState({
        coorX: note.position.x,
        coorY: note.position.y,
    });

    const [, setUpdateTrigger] = useState(0);

    useEffect(() => {
        note.changeCoordinate(position.coorX, position.coorY);
        setUpdateTrigger(prev => prev + 1);
    }, [position]);

    return (
        <Group
            draggable={true}
            x={position.coorX}
            y={position.coorY}
            onDragEnd={(event) => {
                const node = event.target;
                const absolutePosition = node.absolutePosition();
                setPosition({
                    coorX: absolutePosition.x,
                    coorY: absolutePosition.y,
                });
            }}
        >
            <Rect
                width={note.sizes.width}
                height={note.sizes.height}
                fill="#fffc99"
                shadowBlur={10}
            />

            <Text
                width={note.sizes.width}
                columns={note.sizes.height}
                wrap="word"
                fontFamily={"Arial"}
                text={note.content}
                fontSize={15}
            />
        </Group>
    );
};

export default TextNote;

