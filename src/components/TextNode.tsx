import { Rect, Layer } from "react-konva";

function getMiddle(num: number): number {
    return num / 2;
}

function TextNode() {
    return (
        <Layer>
            <Rect
                x={getMiddle(window.innerWidth)}
                y={getMiddle(window.innerHeight)}
                width={100}
                height={100}
                fill="#E3D890"
                shadowBlur={10}
                draggable={true}
            />
        </Layer>
    );
};

export default TextNode;