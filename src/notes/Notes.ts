/* 

    BASE CLASS FOR NOTES - All notes types should derive from this class 

*/

export abstract class Notes
{
    readonly id: number;
    readonly timeOfCreation: Date; 
    timeofLastEdition: Date; 

    constructor(id: number) 
    {
        this.id = id; 
        this.timeOfCreation = new Date();
        this.timeofLastEdition = new Date();
    }

    //update time of editing function 

} 