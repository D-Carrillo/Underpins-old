import { Stage, Layer } from "react-konva";
import { useEffect, useState } from "react";
import TextNote from "./TextNote.tsx";
import {NotesManager} from "../managers/NoteManager.ts";
import {useContextMenu} from "../Hooks/BoardMenu.tsx";
import { observer } from "mobx-react-lite";

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

  useContextMenu();

  return (
      <Stage width={windowWidth} height={windowHeight}>
        <Layer>
          {NotesManager.notes.map((note) => (
              <TextNote key={note.id} concrete_note={note} />
          ))}
        </Layer>
      </Stage>
  );
});

export default Board;

