
export class TodoItem {
    constructor(public task: string, public complete: boolean = false,) 
    {
        // no statements required
        this.createdAt = Date.now()
    } 
    
    public createdAt: number;

}