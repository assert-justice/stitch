export class HashGrid<T>{
    def: T;
    data: Map<string, T>;
    dimensions: number;
    toKeyFn: (coords: number[])=>string;
    toCoordsFn: (key: string)=>number[]; 
    constructor(def: T, dimensions: number){
        this.dimensions = dimensions;
        this.def = def;
        this.data = new Map();
        this.toKeyFn = (coords)=>coords.join(',');
        this.toCoordsFn = (key)=>key.split(',').map(Number);
    }
    private normalizeCoords(coords: number[]){
        if(coords.length > this.dimensions) throw 'too many coordinates!';
        while(coords.length < this.dimensions) coords.push(0);
        return coords;
    }
    private toKey(coords: number[]){
        return this.toKeyFn(this.normalizeCoords(coords));
    }
    private toCoord(key: string){
        return this.normalizeCoords(this.toCoordsFn(key));
    }
    get(coords: number[]): T{
        const key = this.toKey(coords);
        const val = this.data.get(key);
        if(val === undefined) return this.def;
        return val;
    }
    set(coords: number[], val: T){
        const key = this.toKey(coords);
        this.data.set(key, val);
    }
}