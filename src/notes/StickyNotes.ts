/* 

    STICKY NOTES CLASS - This class is for the normal sticky notes and their methods 

*/

import { Notes } from "./Notes";
import { MainStickyNotesColors } from "../palettes/MainStickyNotesColors";

export class StickyNotes extends Notes 
{
    content: string; 
    color: MainStickyNotesColors; 

    constructor(content: string, id: number, color: MainStickyNotesColors) 
    {
        super(id);
        this.content = content; 
        this.color = color;       
    }
}