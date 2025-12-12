import {TextNote} from "../notes/TextNote.ts";
import { makeAutoObservable } from "mobx";

class ManagerTheWorkShop{
    private workShopOpen = false;
    private note!:TextNote;

    constructor() {
        makeAutoObservable(this);
    }

    workshopToggle() {
        this.workShopOpen = !this.workShopOpen;
    }

    isOpen(): boolean {
        return this.workShopOpen;
    }

    sendNoteToWorkshop(note: TextNote) {
        this.note = note;
    }

    sendUpdatedNoteToNoteManager(info: string) {
        console.log(this.note, info);
        //Send information to be safe
    }

    getNote(): TextNote {
        return this.note;
    }
}

export const WorkshopManager = new ManagerTheWorkShop();