class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        console.log("Hello (over)world", this)

        const image = new Image(); // Load the image to the canvas memory so that pixel generation can be created based on the image (e.g. drawing a room in pixels based on an image inserted [here] into memory)
        image.onload = () => {
            this.ctx.drawImage(image,0,0)
        };
        image.src = "/images/maps/DemoMap.png"; // Still need to get this assets -> take from github/signal-k/marketplace (Phaser)

        // Character position variables
        const x = 5;
        const y = 6;

        // Character Creation
        const character = new Image();
        character.onload = () => {
            this.ctx.drawImage(character,
                0, // Params for cropping the sprite pack -> left cut
                0, // top cut
                32, // Size of cut in pixels -> 32x32 (width)
                32, // height of cut
                x * 16 -8, // x pos of cut image
                y * 16 -18, // * 16 -> compensating for the grid size, then move the character to the top left of the grid
                32, // Size of character (in pixels)
                32)
        }
        character.src = "/images/characters/character.png"

        // Perspective/shadow for the character
        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(shadow,
                0, 
                0, 
                32, 
                32, 
                x * 16 -8, 
                y * 16 -18, 
                32, 
                32)
        }
        shadow.src = "images/characters/shadow.png" 
    }
}

export default Overworld;