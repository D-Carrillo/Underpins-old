import { Rect, Layer, Text, Group } from "react-konva";
import { TextNode as TextN } from "../notes/TextNode.ts"
import { useState, useRef, useEffect } from "react";


function TextNode() {
    const noteRef = useRef(new TextN("Important information, but it is also really long information", window.innerWidth, window.innerHeight));

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
                >
                <Rect
                    width={note.sizes.width}
                    height={note.sizes.height}
                    fill="#fffc99"
                    shadowBlur={10}
                />
                <Text
                    width={note.sizes.width}
                    height={note.sizes.height}
                    wrap="word"

                    text={note.content}
                    fontSize={15}
                />

                <Text 
                />
            </Group>

            <Text
                text={"( " + String(note.position.x) + ", " + String(note.position.y) + " )"}
            />
            <Text
                x={300}
                text={"( " + String(position.coorX) + ", " + String(position.coorY) + " )"}
            />
        </Layer>
    );
};

export default TextNode;