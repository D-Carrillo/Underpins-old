/* 

    STICKY NOTES CLASS - This class is for the normal sticky notes and their methods 

*/


export class StickyNotes 
{
    createAt: number; 
    content: string; 
    id: string;

    constructor(content: string) 
    {
        this.createAt = Date.now();
        this.content = content;     
        this.id = `${this.createAt} + ${Math.random().toString(36).substring(2,9)}`
    }
}

