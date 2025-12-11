import React from 'react';
import { Stage } from 'react-konva';

interface Props {
    width: number;
    height: number;
}

const Workshop: React.FC<Props> = ({width, height}) => {
    return (
        <Stage width={width} height={height}>

        </Stage>
    )
}

export default Workshop;