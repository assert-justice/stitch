import { Engine, Window, Graphics } from "cleo";
import { Game } from "./game";
Window.setStats('stitch', 1920, 1080);
Engine.init = () => {
    Graphics.setClearColor(1, 1, 1, 0);
    const game = new Game();
    Engine.update = (dt) => game.update(dt);
    Engine.draw = () => game.draw();
};
