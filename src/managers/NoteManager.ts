import {TextNote} from "../notes/TextNote.ts";
import NoteFactory from "../Factories/NoteFactory.ts";

class ManagerForNotes{
    // Functions to implement

    // LoadNotesFromJSON()
    // SaveANote()
    // SaveNoteToJSON()
    // DeleteNote()
    // DeleteNoteFromJSON()
    // UpdateNoteInformation() - highly polymorphic


    // Make the creating of notes rely on this
    CreateNote(x: number, y: number, type: string) : TextNote {
        return NoteFactory.makeNote(x, y, type);
    }

    //Only for when we don't have JSON
    loadNotes(): TextNote[] {
        return [new TextNote("Type Here", 100, 200), new TextNote("Type here", 400, 100)];
    }

    // First thing to implement this, would be the visuals.
    // -> just make the Workshop be able to write and then save to the note object.

}

export const NotesManager = new ManagerForNotes();