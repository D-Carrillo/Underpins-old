const SQUARE_SIZE = 100;

interface coordinates {
    x: number;
    y: number;
}

interface size {
    height: number;
    width: number;
}
export class TextNode 
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
        this.sizes = {height: SQUARE_SIZE, width:SQUARE_SIZE};

    }

    changeCoordinate(x_coordinate:number, y_coordinate:number): void {
        this.position.x = x_coordinate;
        this.position.y = y_coordinate;
    }

    updateContent(newContent: string) {
        if (newContent.length > 300) {throw new Error("Overreach char limit in a note")}

        this.content = newContent;
    }
}
