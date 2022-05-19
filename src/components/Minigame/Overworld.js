import GameObject from "./GameObject";

class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    startGameLoop() {
        const step = () => { 
            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {
        this.startGameLoop();

        console.log("Hello (over)world", this)

        // Overworld/game background
        const image = new Image(); // Load the image to the canvas memory so that pixel generation can be created based on the image (e.g. drawing a room in pixels based on an image inserted [here] into memory)
        image.onload = () => {
            this.ctx.drawImage(image,0,0)
        };
        image.src = "/images/maps/DemoMap.png"; // Still need to get this assets -> take from github/signal-k/marketplace (Phaser)    
        
        // Place some game objects
        const character = new GameObject({
            x: 5,
            y: 6,
            src: "/",
        })
        
        const npc1 = new GameObject({
            x: 7,
            y: 9,
            src: "/images/characters/npc1"
        })

        // Draw the sprites of configured game objects
        setTimeout(() => {
            character.sprite.draw(this.ctx);  
            npc1.sprite.draw(this.ctx);
        }) // Images need to download before they can be drawn to the map
    }
}

export default Overworld;