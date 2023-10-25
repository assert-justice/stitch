import { Input } from "cleo";
import { Tile } from "./ui/tile";
import { tileWidth } from "./constants";
import { InputMap } from "./utils/input_map";

export class VMouse{
    held?: Tile;
    input: InputMap;
    get cx(){return Math.trunc(Input.mouseX / tileWidth);}
    get cy(){return Math.trunc(Input.mouseY / tileWidth);}
    get grabPressed(){return this.input.getButton('grab').isPressed();}
    get releasePressed(){return this.input.getButton('release').isPressed();}
    constructor(input: InputMap){
        this.input = input;
        input.addButton('grab').mouseButtons = [0];
        input.addButton('release').mouseButtons = [1];
    }
}