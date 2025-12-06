import { Stage, Layer } from "react-konva";
import { useEffect, useState } from "react";
import TextNodes from "./TextNode.tsx";

interface NodeData {
  id: number;
  posX: number;
  posY: number;
}

const Board = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [nodes, setNodes] = useState<NodeData[]>([]);

  const addNode = (x: number, y: number) => {
    const newID = nodes.length > 0 ? nodes[nodes.length - 1].id + 1 : 1;
    setNodes((prevNodes) => [...prevNodes, { id: newID, posX: x, posY: y }]);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  }, [nodes]);

  return (
      <Stage width={windowWidth} height={windowHeight}>
        <Layer>
          {nodes.map((node) => (
              <TextNodes key={node.id} posX={node.posX} posY={node.posY} />
          ))}
        </Layer>
      </Stage>
  );
};

export default Board;

