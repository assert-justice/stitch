export class Sprite {
    constructor(tex, props) {
        this.tex = tex;
        this.props = props !== null && props !== void 0 ? props : {};
    }
    draw(x, y) {
        this.tex.draw(x, y, this.props);
    }
    setProps(props) {
        Object.assign(this.props, props);
    }
}
