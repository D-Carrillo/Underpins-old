import { Stage, Layer } from "react-konva";
import { useEffect, useState } from "react";
import TextNodes from "./TextNote.tsx";

interface NodeData {
  id: number;
  posX: number;
  posY: number;
}

const Board = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [notes, setNotes] = useState<NodeData[]>([]);

  const addNode = (x: number, y: number) => {
      //Make this function call the Manager, to create the note, and then put it into the setNotes
    const newID = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
    setNotes((prevNodes) => [...prevNodes, { id: newID, posX: x, posY: y }]);
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
          {/*  Remove this dependency, Board should only output the notes, it should not even care about the types because
          the NoteManager would only return the TSX component*/}
          {notes.map((note) => (
              <TextNodes key={note.id} posX={note.posX} posY={note.posY} />
          ))}
        </Layer>
      </Stage>
  );
};

export default Board;

