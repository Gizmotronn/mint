class Sprite {
    constructor(config) {
        // Set image for the character(s) or other object(s)
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        // Configure animation & initial state
        this.animation = config.animations || {
            idleDown: [
                [0,0]
            ],
            /*walkDown: [

            ]*/
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0; // What animation [frame] will be shown?

        // Reference the game object
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x * 16 - 8; // Set this value for the sprite to be equal to the specific game object's position
        const y = this.gameObject.y * 16 - 18;

        ctx.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32    
        ) // Customise this for different sized sprite sheets (or image/asset params, if not pixel art/from sprite sheet(s))
    }
}

/* Some notes:
Any game object can pass in their own definitions for animations -> not just the player character
*/

export default Sprite;