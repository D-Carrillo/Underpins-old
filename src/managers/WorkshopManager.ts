import { makeAutoObservable } from "mobx";
import {Workshop} from "../notes/Workshop.ts";
import {TextNote} from "../notes/TextNote.ts";

class ManagerTheWorkShop{
    private workshops:Workshop[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    makeWorkshop(x_pos: number, y_pos: number, note: TextNote) {
        this.workshops.push(new Workshop(note.content, x_pos, y_pos, note));
    }

    sendUpdatedNoteToNoteManager(info: string) {
        console.log(this.workshops, info);
        //Send information to be safe
    }

    getWorkshops() {
        return this.workshops;
    }
}

export const WorkshopManager = new ManagerTheWorkShop();