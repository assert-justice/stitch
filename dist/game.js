import { Engine, Graphics, Input } from "cleo";
import { Dict } from "./utils/dict";
import { Text } from "./utils/text";
import { SpriteSheet } from "./utils/sprite_sheet";
import { Board } from "./board";
export class Game {
    constructor() {
        Game.textures = new Dict();
        Game.textures.set('font', Graphics.Texture.fromFile('./sprites/font8x8.png'));
        Game.textures.set('palette', Graphics.Texture.fromFile('./sprites/pico-8_palette.png'));
        Game.textures.set('cell', Graphics.Texture.fromFile('./sprites/cell.png'));
        this.title = new Text(new SpriteSheet(Game.textures.get('font'), 8, 8), 'text\nhere');
        this.board = new Board();
    }
    update(dt) {
        if (Input.keyIsDown(256)) {
            Engine.quit();
            return;
        }
    }
    draw() {
        // this.title.draw(0,0);
        // Engine.quit();
        this.board.draw();
    }
}
