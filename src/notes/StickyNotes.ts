/* 

    STICKY NOTES CLASS - This class is for the normal sticky notes and their methods 

*/

interface coordinates {
    x: number;
    y: number;
}

export class StickyNotes 
{
    createAt: number; 
    content: string; 
    id: string;
    position: coordinates;


    constructor(content: string, x_coordinate: number, y_coordinate: number) 
    {
        this.createAt = Date.now();
        this.content = content;     
        this.id = `${this.createAt} + ${Math.random().toString(36).substring(2,9)}`;
        this.position = {x: x_coordinate, y: y_coordinate};
    }

    changeCoordinate(x_coordinate:number, y_coordinate:number): void {
        this.position.x = x_coordinate;
        this.position.y = y_coordinate;
    }
}
