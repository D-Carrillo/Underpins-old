import { Rect, Text, Group } from "react-konva";
import { Html } from "react-konva-utils";
import { TextNode as TextN } from "../notes/TextNode.ts"
import { useState, useRef, useEffect } from "react";
import "../components-styling/TextNode.css";

interface TextNodeProps {
    onStartEditing?: () => void;
    onStopEditing?: () => void;
    posX: number,
    posY: number,
}


const TextNode: React.FC<TextNodeProps> = ({  onStartEditing, onStopEditing, posX, posY }) => {
    const noteRef = useRef(new TextN("Edit here", posX, posY));

    const note = noteRef.current

    var [textValue, setTextValue] = useState(note.content);
    var [editingEnable, setEditingEnable] = useState(false);

    var [position, setPosition] = useState({
        coorX: note.position.x,
        coorY: note.position.y,
    });

    const [, setUpdateTrigger] = useState(0);

    useEffect(() => {
        note.changeCoordinate(position.coorX, position.coorY);

        setUpdateTrigger(prev => prev +1);
    },[position]);

    useEffect(() => {
        note.updateContent(textValue);
    }, [textValue]);

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && editingEnable) {
                event.preventDefault();
                setEditingEnable(false);
                onStopEditing?.();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return() => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [editingEnable]);

    const SendTextChangeToNodeObject = (event: any) => {

        const newContent = event.target.value;

        setTextValue(newContent);
    };

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

            onDblClick={() => {
                setEditingEnable(true);
                onStartEditing?.();
            }}

            >
            <Rect
                width={note.sizes.width}
                height={note.sizes.height}
                fill="#fffc99"
                shadowBlur={editingEnable ? 20: 10}
                shadowColor={editingEnable ? "#9a864fff" : undefined}
            />

            { editingEnable ? (

            <Html>
                <textarea className="TextNodeEditorInput"
                
                autoFocus

                style={{
                    position: `absolute`,
                    width: `${note.sizes.width}px`,
                    height: `${note.sizes.height}px`,
                }}

                value={textValue}

                onChange={SendTextChangeToNodeObject}
                    
                />
            </Html>

            ) : (

            <Text
                width={note.sizes.width}
                height={note.sizes.height}
                wrap="word"

                text={note.content}
                fontSize={15}
            />
            )}
        </Group>
    );
};

export default TextNode;
