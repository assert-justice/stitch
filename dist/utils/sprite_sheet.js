import { Sprite } from "./sprite";
export class SpriteSheet extends Sprite {
    constructor(tex, tileWidth, tileHeight) {
        super(tex, { width: tileWidth, height: tileHeight, sw: tileWidth, sh: tileHeight });
        this.idx = 0;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.width = Math.trunc(tex.width / tileWidth);
        this.height = Math.trunc(tex.height / tileHeight);
    }
    setTile(idx) {
        this.idx = idx;
        if (idx < 0 || idx >= this.width * this.height)
            throw 'Sprite index out of bounds!';
        const cx = idx % this.width;
        const cy = Math.trunc(idx / this.width);
        this.setProps({
            sx: cx * this.tileWidth,
            sy: cy * this.tileHeight,
        });
    }
}
