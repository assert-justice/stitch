export class HashGrid {
    constructor(def, dimensions) {
        this.dimensions = dimensions;
        this.def = def;
        this.data = new Map();
        this.toKeyFn = (coords) => coords.join(',');
        this.toCoordsFn = (key) => key.split(',').map(Number);
    }
    normalizeCoords(coords) {
        if (coords.length > this.dimensions)
            throw 'too many coordinates!';
        while (coords.length < this.dimensions)
            coords.push(0);
        return coords;
    }
    toKey(coords) {
        return this.toKeyFn(this.normalizeCoords(coords));
    }
    toCoord(key) {
        return this.normalizeCoords(this.toCoordsFn(key));
    }
    get(coords) {
        const key = this.toKey(coords);
        const val = this.data.get(key);
        if (val === undefined)
            return this.def;
        return val;
    }
    set(coords, val) {
        const key = this.toKey(coords);
        this.data.set(key, val);
    }
}
