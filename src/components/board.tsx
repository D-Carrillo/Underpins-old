import { Stage, Layer } from "react-konva";
import { useEffect, useState } from "react";
import TextNote from "./TextNote.tsx";
import {NotesManager} from "../managers/NoteManager.ts";
import {useContextMenu} from "../Hooks/BaseMenu.tsx";
import { observer } from "mobx-react-lite"
import {BoardMenu} from "../Hooks/BoardMenu.ts";

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

  useContextMenu(BoardMenu, "text");

  return (
      <Stage width={windowWidth} height={windowHeight}>
        <Layer>
          {NotesManager.getNotes().map((note) => (
              <TextNote key={note.id} concrete_note={note} />
          ))}
        </Layer>
      </Stage>
  );
});

export default Board;

