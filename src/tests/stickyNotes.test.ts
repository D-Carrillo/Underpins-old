import { test, expect } from 'vitest';
import { StickyNotes } from '../notes/StickyNotes.ts';

test("SkickyNote loads information", () => {
    var note = new StickyNotes("Information");

    expect(note.content).toBe("Information");
});

test("Created at the right time", () =>{
    var before = Date.now();
    var note = new StickyNotes("Information"); 
    var after = Date.now();

    expect(note.createAt).toBeGreaterThanOrEqual(before);
    expect(note.createAt).toBeLessThanOrEqual(after);
});

test("Constructor makes unique IDs", () => {
    var note1 = new StickyNotes("Very important information");
    var note2 = new StickyNotes("Ultra important infromation");

    expect(note1.id).not.toBe(note2.id);
});