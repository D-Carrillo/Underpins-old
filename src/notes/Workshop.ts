import {BaseNote} from "./BaseNote.ts";
import {WorkshopManager} from "../managers/WorkshopManager.ts";
import {TextNote} from "./TextNote.ts";

const INIT_HEIGHT = 150;
const INIT_WIDTH = 250;

export class Workshop extends BaseNote {

    note: TextNote;

    constructor(content: string, x_coordinate: number, y_coordinate: number, note: TextNote)
    {
        super(content, x_coordinate, y_coordinate, INIT_HEIGHT, INIT_WIDTH);
        this.note = note;
    }

    updateContent = (newContent: string) => {
        WorkshopManager.sendUpdatedNoteToNoteManager(newContent);
    }

}
