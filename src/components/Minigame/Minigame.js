import Phaser from "Phaser";
import styles from "./Styles/phaser-styles.css";
import Overworld from "./Overworld.js";
import init from "./init.js";
import Sprite from "./Sprite";
import GameObject from "./GameObject";

const Minigame = () => {
  return (
    <div>
      <title>Star Sailors</title>
      <link href='./Styles/phaser-styles.css' type='text/css' rel='stylesheet' />
      <div className='game-container'>
        <canvas className='game-canvas' width='352' height='198' />
      </div>
      {/* Second compontent of the game -> copy data between each container */}
      <div id="crafting-game-container">
        <script type="module" src="./crafting/game.js"></script>
      </div>
    </div>
  )
}

export default Minigame;