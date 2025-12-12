import React from 'react';
import { Group, Rect, Text } from 'react-konva';
import {Workshop as Shop} from "../notes/Workshop.ts";

interface Props {
    workshop: Shop;
}

const Workshop: React.FC<Props> = ({workshop}) => {
    return (
        <Group
            x={workshop.position.x}
            y={workshop.position.y}
        >
            <Rect
                width={workshop.sizes.width}
                height={workshop.sizes.height}
                fill="#fffc99"
                shadowBlur={10}
            />

            <Text
                width={workshop.sizes.width}
                columns={workshop.sizes.height}
                wrap="word"
                fontFamily={"Arial"}
                text={workshop.content}
                fontSize={15}
            />
        </Group>
    )
}

export default Workshop;