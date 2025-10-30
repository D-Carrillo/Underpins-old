import { Rect, Layer, Text, Group } from "react-konva";
import { TextNode as TextN } from "../notes/TextNode.ts"

function getMiddle(num: number): number {
    return num / 2;
}


function TextNode() {
    var note = new TextN("Important information, but it is also really long information", window.innerWidth, window.innerHeight);

    return (
        <Layer>
            <Group
                draggable={true}
                x={getMiddle(note.position.x)}
                y={getMiddle(note.position.y)}
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
        </Layer>
    );
};

export default TextNode;