import { Stage, Layer, Rect } from "react-konva";
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
  const [isStageLocked, setIsStageLocked] = useState<boolean>(false);
  const [nodes, setNodes] = useState<NodeData[]>([]);
  
  const handleStartEditing = () => {setIsStageLocked(true)}
  const handleStopEditing = () => {setIsStageLocked(false)}

  const addNode = (x: number, y: number) => {
    const newID = nodes.length > 0 ? nodes[nodes.length - 1].id + 1 : 1;
    const newNode = { id: newID, posX: x, posY: y};
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();

      const existingMenu = document.querySelector(".custom-menu");
      if (existingMenu) existingMenu.remove();

      const menu = document.createElement("div");
      menu.classList.add("custom-menu");
      menu.style.position = "absolute";
      menu.style.top = `${event.pageY}px`;
      menu.style.left = `${event.pageX}px`;

      const button = document.createElement("button");
      button.textContent = "Add New Node";
      button.addEventListener("click", () => {
        addNode(event.pageX, event.pageY);
        closeMenu();
      });

      menu.appendChild(button);
      document.body.appendChild(menu);

      const closeMenu = () => {
        menu.remove();
        document.removeEventListener("click", closeMenu);
        document.removeEventListener("keydown", escClose);
      };

      setTimeout(() => document.addEventListener("click", closeMenu));

      const escClose = (event: KeyboardEvent) => {
        if (event.key === "Escape") closeMenu();
      };
      document.addEventListener("keydown", escClose);
    };

    window.addEventListener("contextmenu", handleContextMenu);
    return () => window.removeEventListener("contextmenu", handleContextMenu);
  }, [nodes]);

  return (
    <Stage width={windowWidth} height={windowHeight}>
        <Layer>
        {nodes.map((node) => (
            <TextNodes key={node.id} onStopEditing={handleStopEditing} onStartEditing={handleStartEditing} posX={node.posX} posY={node.posY} />
        ))}

        {isStageLocked && (
            <Rect
                x={0}
                y={0}
                width={windowWidth}
                height={windowHeight}
                fill="transparent"
                listening={true}
            />
        )}
        </Layer>
    </Stage>
  );
};

export default Board;
