import { Stage, Layer } from "react-konva";
import { useEffect, useState } from "react";
import TextNote from "./TextNote.tsx";
import { TextNote as CNOTE } from '../notes/TextNote.ts';
import {NotesManager} from "../managers/NoteManager.ts";
import {useContextMenu} from "../Hooks/Menu.tsx";

const Board = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [notes, setNotes] = useState<CNOTE[]>(NotesManager.loadNotes());

  const addNode = (x: number, y: number, type: string) => {
    const newNote = NotesManager.CreateNote(x, y, type);
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useContextMenu((x,y, type) => addNode(x,y, type));

  return (
      <Stage width={windowWidth} height={windowHeight}>
        <Layer>
          {notes.map((note) => (
              <TextNote key={note.id} concrete_note={note} />
          ))}
        </Layer>
      </Stage>
  );
};

export default Board;

