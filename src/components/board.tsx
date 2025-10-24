import { Stage, Layer, Circle } from "react-konva";

function Board() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight} style={{backgroundColor: "f4e4ac"}}>
            <Layer>
                <Circle x={30} y={40} radius={30} fill={"Blue"}></Circle>
            </Layer>
        </Stage>
    ); 
};

export default Board;
