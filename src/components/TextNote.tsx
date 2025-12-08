import { Rect, Text, Group } from "react-konva";
import { TextNode as TextN } from "../notes/TextNode.ts"
import React, { useState, useRef, useEffect } from "react";

interface TextNodeProps {
    posX: number,
    posY: number,
}

const TextNote: React.FC<TextNodeProps> = ({ posX, posY }) => {
    const noteRef = useRef(new TextN("Edit here", posX, posY));

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

