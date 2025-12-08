import { Stage, Layer } from "react-konva";
import { useEffect, useState } from "react";
import TextNote from "./TextNote.tsx";
import { TextNote as CNOTE } from '../notes/TextNote.ts';
import {NotesManager} from "../managers/NoteManager.ts";

const Board = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [notes, setNotes] = useState<CNOTE[]>(NotesManager.loadNotes());

  const addNode = (x: number, y: number) => {
    const newNote = NotesManager.CreateNote(x, y);
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

  // Put all of this menu to a different component, this component should only handle the notes display.
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();

      document.querySelectorAll(".custom-menu").forEach((el) => el.remove());

      const menu = document.createElement("div");
      menu.className = "custom-menu";
      menu.style.position = "absolute";
      menu.style.top = `${event.pageY}px`;
      menu.style.left = `${event.pageX}px`;

      const button = document.createElement("button");
      button.textContent = "Add New Node";
      button.onclick = () => {
        addNode(event.pageX, event.pageY);
        menu.remove();
      };

      menu.appendChild(button);
      document.body.appendChild(menu);

      const closeMenu = () => menu.remove();
      const escClose = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();

      setTimeout(() => document.addEventListener("click", closeMenu, { once: true }));
      document.addEventListener("keydown", escClose, { once: true });
    };

    window.addEventListener("contextmenu", handleContextMenu);
    return () => window.removeEventListener("contextmenu", handleContextMenu);
  }, [notes]);

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

