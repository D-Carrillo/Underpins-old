import {TextNote} from "../notes/TextNote.ts";

class ManagerForNotes{
    // Functions to implement

    // LoadNotesFromJSON()
    // SaveANote()
    // SaveNoteToJSON()
    // DeleteNote()
    // DeleteNoteFromJSON()
    // UpdateNoteInformation() - highly polymorphic


    // Make the creating of notes rely on this
    CreateNote() : TextNote {
        return new TextNote("New note", 1, 2);
    }

    loadNotes(): TextNote[] {
        return [new TextNote("Type Here", 100, 200), new TextNote("Type here", 400, 100)];
    }

    // First thing to implement this, would be the visuals.
    // -> just make the Workshop be able to write and then save to the note object.

}

export const NotesManager = new ManagerForNotes();