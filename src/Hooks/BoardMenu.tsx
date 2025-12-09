import {useEffect} from "react";

type ContextMenuHandler = (x: number, y: number, type: string) => void;

export function useContextMenu(onAddTextNote: ContextMenuHandler) {
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
            button.textContent = "Add New Text Note";
            button.onclick = () => {
                onAddTextNote(event.pageX, event.pageY, "text");
                menu.remove();
            };

            menu.appendChild(button);
            document.body.appendChild(menu);

            const closeMenu = () => menu.remove();
            const escClose = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();

            setTimeout(() => document.addEventListener("click", closeMenu, {once: true}));
            document.addEventListener("keydown", escClose, {once: true});
        };

        window.addEventListener("contextmenu", handleContextMenu);
        return () => window.removeEventListener("contextmenu", handleContextMenu);

    }, [onAddTextNote]);
}