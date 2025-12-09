import {TextNote} from "../notes/TextNote.ts";
import NoteFactory from "../Factories/NoteFactory.ts";

class ManagerForNotes{
    private notes: TextNote[];

    constructor() {
        this.notes = this.loadNotes();
    }

    // Functions to implement

    // LoadNotesFromJSON()


    AddANote(newNote : TextNote){
        this.notes.push(newNote);
    }

    // SaveNoteToJSON()


    deleteNote(id: string) {
        const newNotes = this.notes.filter(note => note.id !== id);

        this.notes.length = 0;
        this.notes = newNotes;

        //For the note that is being deleted, you have to call the database or JSON to delete from its system by passing the ID
    }

    //Using arr.filter() on the unique ID
    //setItems(items => items.filter(item => item.id !== id));


    // DeleteNoteFromJSON()
    // UpdateNoteInformation() - highly polymorphic

    createNote(x: number, y: number, type: string) : TextNote {
        const newNote = NoteFactory.makeNote(x, y, type);
        this.AddANote(newNote);
        return newNote;
    }

    //Only for when we don't have JSON
    loadNotes(): TextNote[] {
        return [new TextNote("Type Here", 100, 200), new TextNote("Type here", 400, 100)];
    }

    // First thing to implement this, would be the visuals.
    // -> just make the Workshop be able to write and then save to the note object.

}

export const NotesManager = new ManagerForNotes();