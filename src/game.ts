import { Engine, Graphics, Input } from "cleo";
import { Dict } from "./utils/dict";
import { Text } from "./utils/text";
import { SpriteSheet } from "./utils/sprite_sheet";
import { Board } from "./board";
import { VMouse } from "./v_mouse";
import { InputMap } from "./utils/input_map";

export class Game{
    static textures: Dict<string, Graphics.Texture>;
    static mouse: VMouse;
    title: Text;
    board: Board;
    input: InputMap;

    constructor(){
        Game.textures = new Dict();
        Game.textures.set('font', Graphics.Texture.fromFile('./sprites/font8x8.png'));
        Game.textures.set('palette', Graphics.Texture.fromFile('./sprites/pico-8_palette.png'));
        Game.textures.set('cell', Graphics.Texture.fromFile('./sprites/cell.png'));
        this.input = new InputMap();
        Game.mouse = new VMouse(this.input);
        this.title = new Text(new SpriteSheet(Game.textures.get('font'), 8, 8), 'text\nhere');
        this.board = new Board();
    }
    update(dt: number){
        if(Input.keyIsDown(256)) {
            Engine.quit();
            return;
        }
    }
    draw(){
        // this.title.draw(0,0);
        // Engine.quit();
        this.board.draw();
    }
}