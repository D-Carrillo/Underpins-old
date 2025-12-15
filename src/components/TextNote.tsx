import { Rect, Text, Group } from "react-konva";
import { TextNote as TextN } from "../notes/TextNote.ts"
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useContextMenu } from "./BaseMenu.tsx";
import {NoteMenu} from "../Menus/NoteMenu.ts";
import { KonvaEventObject } from 'konva/lib/Node';
import TextEditor from './TextEditor.tsx';
import Konva from "konva";

interface Props {
    concrete_note: TextN;
}

const TextNote: React.FC<Props> = ({concrete_note}) => {

    const noteRef = useRef(concrete_note);

    const note = noteRef.current;

    const [isEditing, setIsEditing] = useState(false);
    const textRef = useRef<Konva.Text>(null);

    let [position, setPosition] = useState({
        coorX: note.position.x,
        coorY: note.position.y,
    });

    const handleTextChange = useCallback((newText: string) => {
       noteRef.current.updateContent(newText);
    }, []);

    const handleDblClick = useCallback(() => {
       setIsEditing(true);
    }, []);

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

            onDblClick = {handleDblClick}

            onContextMenu={(e: KonvaEventObject<MouseEvent>) => {
                e.cancelBubble = true;
                e.evt.stopPropagation();
                useContextMenu(e.evt, NoteMenu, note.id);
            }}
        >
            <Rect
                width={note.sizes.width}
                height={note.sizes.height}
                fill="#fffc99"
                shadowBlur={10}
            />

            <Text
                ref = {textRef}
                width={note.sizes.width}
                columns={note.sizes.height}
                wrap="word"
                fontFamily={"Arial"}
                text={note.content}
                fontSize={15}
                visible ={!isEditing}
            />

            {isEditing && (
                <TextEditor textNode={textRef.current!} onChange={handleTextChange} onClose={() => setIsEditing(false)}/>
            )}
        </Group>
    );
};

export default TextNote;
