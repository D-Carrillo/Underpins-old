import { Stage, Layer } from "react-konva";
import { useEffect, useState } from "react";
import TextNote from "./TextNote.tsx";
import {NotesManager} from "../managers/NoteManager.ts";
import { observer } from "mobx-react-lite"
import {useContextMenu} from "../Hooks/BaseMenu.tsx";
import {BoardMenu} from "../Hooks/BoardMenu.ts";
import { KonvaEventObject } from 'konva/lib/Node';


const Board = observer(() => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <Stage width={windowWidth} height={windowHeight}
           onContextMenu={(e: KonvaEventObject<MouseEvent>) => {
             useContextMenu(e.evt, BoardMenu, "text");
           }}
      >
        <Layer>
          {NotesManager.getNotes().map((note) => (
              <TextNote key={note.id} concrete_note={note} />
          ))}
        </Layer>
      </Stage>
  );
});

export default Board;

