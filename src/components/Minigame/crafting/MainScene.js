import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        console.log("preload");
    }

    create() {
        console.log("create");
        this.player = new Phaser.Physics.Matter.Sprite(this.matter.world);

        // Player I/O device input for player movement
        this.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
    }

    update() {
        console.log("update");
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        
        // Velocity vector configuration
        // X v.vector
        if(
            this.inputKeys.left.isDown
        ) {
            playerVelocity.x = -1
        } else if (this.inputKeys.right.isDown) {
            playerVelocity.x = 1
        }
        // Y velocity vector
        if(
            this.inputKeys.down.isDown
        ) {
            playerVelocity.y = -1
        } else if (this.inputKeys.up.isDown) {
            playerVelocity.y = 1
        }
    }
}