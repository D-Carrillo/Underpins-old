import { Html } from 'react-konva-utils';
import Konva from 'konva';
import {useEffect, useRef } from "react";

const TextArea = (props: { textNode: Konva.Text, onChange: (newText: string) => void, onClose: () => void })=> {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (!textareaRef.current) return;
        const textarea = textareaRef.current;
        const textPosition = props.textNode.position();
        const areaPosition = {
            x: textPosition.x,
            y: textPosition.y,
        };

        textarea.value = props.textNode.text();
        textarea.style.position = "absolute";
        textarea.style.top = `${areaPosition.y}px`;
        textarea.style.left = `${areaPosition.x}px`;
        textarea.style.width = `${props.textNode.width() - props.textNode.padding() * 2}px`;
        textarea.style.height = `${props.textNode.height() - props.textNode.padding() * 2}px`;
        textarea.style.fontSize = `${props.textNode.fontSize()}px`;
        textarea.style.border = 'none';
        textarea.style.padding = '0px';
        textarea.style.margin = '0px';
        textarea.style.overflow = 'hidden';
        textarea.style.background = 'none';
        textarea.style.outline = 'none';
        textarea.style.resize = 'none';
        textarea.style.lineHeight = `${props.textNode.lineHeight() * props.textNode.fontSize()}px`;
        textarea.style.fontFamily = props.textNode.fontFamily();
        textarea.style.transformOrigin = "left top";
        textarea.style.textAlign = props.textNode.align();
        textarea.style.color = `${props.textNode.fill()}`;

        const save = (newContent: string) =>{
            props.onChange(newContent);
            props.onClose();
        }

        const handleOutsideClick = (event: MouseEvent) => {
            if (event.target !== textarea) {
                save(textarea.value);
            }
        }

        const handleKeyDown = (event: KeyboardEvent)=> {

            // To not allow infinite writing limit the amount if times a user can ue the Enter key
            if (event.key === "Escape") {
                save(textarea.value);
            }
        }

        const handleInput = () => {
            const scale= props.textNode.getAbsoluteScale().x;
            textarea.style.width = `${props.textNode.width() * scale}px`;
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight + props.textNode.fontSize()}px`;
        }

        textarea.addEventListener("keydown", handleKeyDown);
        textarea.addEventListener("input", handleInput);
        setTimeout(() => {
            window.addEventListener("click", handleOutsideClick);
        });

        return () => {
            textarea.removeEventListener("keydown", handleKeyDown);
            textarea.removeEventListener("input", handleInput);
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [props.textNode, props.onChange, props.onClose]);

    return (
        <textarea
            ref={textareaRef}
            style={{
                minHeight: "1em",
                position: "absolute",
            }}
            autoFocus={true}
        />
    );
}

const TextEditor = (props: { textNode: Konva.Text; onChange: (newText: string) => void; onClose: () => void; }) => {
    return(
        <Html>
            <TextArea {...props}/>
        </Html>
    );
}

export default TextEditor;