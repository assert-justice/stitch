import { Graphics, Window } from "cleo";
import { Game } from "./game";
import { SpriteSheet } from "./utils/sprite_sheet";

const tileWidth = 32;

export class Board{
    palette: SpriteSheet;
    cell: Graphics.Texture;
    constructor(){
        this.palette = new SpriteSheet(Game.textures.get('palette'), 1, 1);
        this.cell = Game.textures.get('cell');
    }
    drawRegion(x: number, y: number, w: number, h: number, color: number){
        this.palette.setTile(color);
        this.palette.setProps({width: tileWidth * w, height: tileWidth*h});
        this.palette.draw(tileWidth*x,tileWidth*y);
    }
    draw(){
        this.cell.draw(0, 0, {
            width: Window.width, 
            height: Window.height,
            sw: Window.width,
            sh: Window.height,
        });
        this.drawRegion(0, 33, 60, 2, 1);
        this.drawRegion(0, 0, 16, 2, 2);
        this.drawRegion(14, 2, 2, 30, 3);
        this.drawRegion(0, 31, 16, 2, 4);
        this.drawRegion(16, 0, 44, 2, 5);
        this.drawRegion(0, 2, 14, 29, 6);
    }
}