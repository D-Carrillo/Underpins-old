/* 

    STICKY NOTES CLASS - This class is for the normal sticky notes and their methods 

*/

interface cordinates {
    x: number;
    y: number;
}

export class StickyNotes 
{
    createAt: number; 
    content: string; 
    id: string;
    position: cordinates;


    constructor(content: string, x_cordinate: number, y_cordinate: number) 
    {
        this.createAt = Date.now();
        this.content = content;     
        this.id = `${this.createAt} + ${Math.random().toString(36).substring(2,9)}`;
        this.position = {x: x_cordinate, y: y_cordinate};
    }
}
