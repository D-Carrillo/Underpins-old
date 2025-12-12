import { Stage, Layer } from "react-konva";
import TextNote from "./TextNote.tsx";
import {NotesManager} from "../managers/NoteManager.ts";
import { observer } from "mobx-react-lite"
import {useContextMenu} from "./BaseMenu.tsx";
import {BoardMenu} from "../Menus/BoardMenu.ts";
import { KonvaEventObject } from 'konva/lib/Node';
import { WorkshopManager } from "../managers/WorkshopManager.ts";
import React from 'react';
import Workshop from "./Workshop.tsx";

interface Props {
    width: number;
    height: number;
}

const Board: React.FC<Props> = observer(({ width, height }) => {
  return (
      <Stage width={width} height={height}
           onContextMenu={(event: KonvaEventObject<MouseEvent>) => {
             useContextMenu(event.evt, BoardMenu, "text");
           }}
      >
        <Layer>
            {NotesManager.getNotes().map((note) => (
                <TextNote key={note.id} concrete_note={note} />
            ))}

            {WorkshopManager.getWorkshops().length > 0 &&  WorkshopManager.getWorkshops().map((workshop) => (
                <Workshop key={workshop.id} workshop={workshop} />
            ))}
        </Layer>
      </Stage>
  );
});

export default Board;
