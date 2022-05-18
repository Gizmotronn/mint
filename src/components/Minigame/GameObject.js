import Sprite from "./Sprite";

class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.sprite = new Sprite({
            gameObject: this,
            src: "",
        }); 
    }
}

export default GameObject;