import { System } from "cleo";
import { SpriteSheet } from "./sprite_sheet";

export class Text{
    private sheet: SpriteSheet;
    text: string;
    constructor(spriteSheet: SpriteSheet, text: string = ''){
        this.sheet = spriteSheet;
        this.text = text;
    }
    draw(x: number, y: number){
        let ox = 0; let oy = 0;
        for(let i = 0; i < this.text.length; i++){
            if(this.text[i] === '\n'){
                ox = 0; oy+=this.sheet.tileHeight;
                continue;
            }
            const code = this.text.charCodeAt(i) - 32;
            if(code < 0 || code >= 105) continue; // ignore unprintable characters
            // System.println(code);
            this.sheet.setTile(code);
            this.sheet.draw(x + ox, y + oy);
            ox += this.sheet.tileWidth;
        }
    }
}