import { test, expect, describe } from 'vitest';
import { StickyNotes } from '../notes/StickyNotes.ts';

function any<T>(): T {
    return undefined as unknown as T;
}
test("SkickyNote loads information", () => {
    const note = new StickyNotes("Information", any<number>(), any<number>());

    expect(note.content).toBe("Information");
});

test("Created at the right time", () =>{
    const before = Date.now();
    const note = new StickyNotes(any<string>(), any<number>(), any<number>()); 
    const after = Date.now();

    expect(note.createAt).toBeGreaterThanOrEqual(before);
    expect(note.createAt).toBeLessThanOrEqual(after);
});

test("Constructor makes unique IDs", () => {
    const note1 = new StickyNotes(any<string>(), any<number>(), any<number>());
    const note2 = new StickyNotes(any<string>(), any<number>(), any<number>());

    expect(note1.id).not.toBe(note2.id);
});

describe("Coordinate loading test", () => {
    test.each([
    [0,0], 
    [-1,-1],
    [1,1],
    [1,-1],
    [-1,1],
])("Creates cordinates (%i, %i)", (x,y) => {
    const note = new StickyNotes(any<string>(), x, y); 

    expect(note.position.x).toBe(x);
    expect(note.position.y).toBe(y);
    });
});

test("Change the note's coordinates", () => {
    const note = new StickyNotes(any<string>(), any<number>(), any<number>());

    note.changeCoordinate(2,-1);

    expect(note.position.x).toBe(2);
    expect(note.position.y).toBe(-1);
});
