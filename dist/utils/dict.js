export class Dict extends Map {
    get(key) {
        const val = super.get(key);
        if (val === undefined)
            throw `Value '${key}' is not a key in dictionary`;
        return val;
    }
}
export class DefaultDict extends Dict {
    constructor(def) {
        super();
        this.def = def;
    }
    get(key) {
        if (!this.has(key))
            return this.def;
        return super.get(key);
    }
}
export class DefaultFnDict extends Dict {
    constructor(defFn) {
        super();
        this.defFn = defFn;
    }
    get(key) {
        if (!this.has(key))
            return this.defFn();
        return super.get(key);
    }
}
