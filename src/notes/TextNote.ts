const INIT_HEIGHT = 150;
const INIT_COLUMNS = 250;
const NOTE_CONTENT_LIMIT = 270;

interface coordinates {
    x: number;
    y: number;
}

interface size {
    height: number;
    width: number;
}

export class TextNote
{
    createAt: number; 
    content: string; 
    id: string;
    position: coordinates;
    sizes: size;


    constructor(content: string, x_coordinate: number, y_coordinate: number) 
    {
        this.createAt = Date.now();
        this.content = content;     
        this.id = `${this.createAt} + ${Math.random().toString(36).substring(2,9)}`;
        this.position = {x: x_coordinate, y: y_coordinate};
        this.sizes = {height: INIT_HEIGHT, width:INIT_COLUMNS};

    }

    changeCoordinate(x_coordinate:number, y_coordinate:number): void {
        this.position.x = x_coordinate;
        this.position.y = y_coordinate;
    }

    updateContent(newContent: string) {
        if (newContent.length > NOTE_CONTENT_LIMIT) {throw new Error("Overreach char limit in a note")}

        this.content = newContent;
    }
}
