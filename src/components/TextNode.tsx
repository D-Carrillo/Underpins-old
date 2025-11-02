import { Rect, Layer, Text, Group } from "react-konva";
import { Html } from "react-konva-utils";
import { TextNode as TextN } from "../notes/TextNode.ts"
import { useState, useRef, useEffect } from "react";
import "../components-styling/TextNode.css";


function TextNode() {
    const noteRef = useRef(new TextN("Important information, but it is also really long information", window.innerWidth / 2, window.innerHeight / 2));
    var [editingEnable, setEditingEnable] = useState(false);

    const note = noteRef.current

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
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                setEditingEnable(false);
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return() => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <Layer>
            <Group
                draggable={true}
                x={position.coorX}
                y={position.coorY}

                onDragEnd={(e) => {
                    const node = e.target;

                    const absolutePosition = node.absolutePosition();

                    setPosition({
                        coorX: absolutePosition.x,
                        coorY: absolutePosition.y,
                    });
                }}

                onDblClick={() => (
                    setEditingEnable(true)
                )}

                >
                <Rect
                    width={note.sizes.width}
                    height={note.sizes.height}
                    fill="#fffc99"
                    shadowBlur={10}
                />
                { editingEnable ? (

                <Html>
                    <textarea className="TextNodeEditorInput"
                    
                    style={{
                        position: `absolute`,
                        width: `${note.sizes.width}px`,
                        height: `${note.sizes.height}px`,
                    }}
                    
                    >
                        {note.content}</textarea>
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
        </Layer>
    );
};

export default TextNode;