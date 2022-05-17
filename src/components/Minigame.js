import Phaser from "Phaser";
import styles from "./Styles/phaser-styles.css"
// import Overworld from "./Phaser/Overworld.js"
// import init from "./Phaser/init.js"

const Minigame = () => {
  return (
    <div>
      <title>Star Sailors</title>
      <link href='./Styles/phaser-styles.css' type='text/css' rel='stylesheet' />
      <div className='game-container'>
        <canvas className='game-canvas' width='352' height='198' />
      </div>
    </div>
  )
}

export default Minigame;