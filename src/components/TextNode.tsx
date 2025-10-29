import { Rect, Layer, Text } from "react-konva";
import { TextNode as TextN } from "../notes/TextNode.ts"

function getMiddle(num: number): number {
    return num / 2;
}

function TextNode() {
    var note = new TextN("Important information, but it is also really long information", window.innerWidth, window.innerHeight);

    return (
        <Layer>
            <Rect
                x={getMiddle(note.position.x)}
                y={getMiddle(note.position.y)}
                width={note.sizes.width}
                height={note.sizes.height}
                fill="#fffc99"
                shadowBlur={10}
                draggable={true}
            />
            <Text
                x={getMiddle(note.position.x)}
                y={getMiddle(note.position.y)}
                width={note.sizes.width}
                height={note.sizes.height}
                wrap="word"

                text={note.content}
                fontSize={15}
                draggable={true}
            />
        </Layer>
    );
};

export default TextNode;