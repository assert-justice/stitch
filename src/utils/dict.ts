export class Dict<T,U> extends Map<T,U>{
    get(key:T): U{
        const val = super.get(key);
        if(val === undefined) throw `Value '${key}' is not a key in dictionary`;
        return val;
    }
}

export class DefaultDict<T,U> extends Dict<T,U>{
    def: U;
    constructor(def: U){
        super();
        this.def = def;
    }
    get(key: T): U{
        if(!this.has(key)) return this.def;
        return super.get(key);
    }
}
export class DefaultFnDict<T,U> extends Dict<T,U>{
    defFn: ()=>U;
    constructor(defFn: ()=>U){
        super();
        this.defFn = defFn;
    }
    get(key: T): U{
        if(!this.has(key)) return this.defFn();
        return super.get(key);
    }
}
