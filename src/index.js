import Phaser from 'phaser';
import { PreloadScene } from './preload-scene';
import { PlayScene } from './play-scene';
import { gameOptions } from './config';

// the game itself
let game;

// function to be executed when the window loads
window.onload = function () {
    // get optimal window's width and height
    let width = gameOptions.defaultSize.width;
    let height = gameOptions.defaultSize.height;

    // this is the best case aspect ratio
    let perfectRatio = width / height;

    // actual window's width and height
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;

    // actual width and height ratio
    let actualRatio = Math.min(
        innerWidth / innerHeight,
        gameOptions.defaultSize.maxRatio
    );

    // if perfect ratio is greater than actual ratio...
    if (perfectRatio > actualRatio) {
        // ... then adjust height
        height = width / actualRatio;
    } else {
        // ... otherwise adjust width
        width = height * actualRatio;
    }

    // game configuration object
    let gameConfig = {
        // render type, sets the type of renderer used to draw on the canvas.
        // You can choose among Phaser.AUTO, Phaser.CANVAS, Phaser.HEADLESS, Phaser.WEBGL
        type: Phaser.AUTO,

        // scale object hadles the way the game is scaled and aligned
        scale: {
            // scale mode sets the aspect mode.
            // FIT mode is likely to be the one you are looking for, as it works in most cases.
            // Modes you may want to play with are:
            // NONE: no scaling at all.
            // WIDTH_CONTROLS_HEIGHT: height is automatically adjusted based on the width.
            // HEIGHT_CONTROLS_WIDTH: width is automatically adjusted based on the height.
            // FIT: width and height are automatically adjusted to fit inside the given target area, while keeping the aspect ratio.
            // Depending on the aspect ratio there may be some space inside the area which is not covered.
            // ENVELOP: width and height are automatically adjusted to make the size cover the entire target area while keeping the aspect ratio.
            // This may extend further out than the target size.
            // RESIZE: the canvas is resized to fit all available parent space, regardless of aspect ratio.
            mode: Phaser.Scale.FIT,

            // center the game horizontally and vertically
            // available options are:
            // CENTER_BOTH: game canvas automatically centered.
            // NO_CENTER: don't center game canvas
            // CENTER_HORIZONTALLY: center game canvas horizontally
            // CENTER_VERTICALLY: center game canvas vertically
            autoCenter: Phaser.Scale.CENTER_BOTH,

            // element ID where to render the game. Remember? The <div> in index.html
            parent: 'thegame',

            // game width, in pixels
            width: width,

            // game height, in pixels
            height: height,
        },

        // background color
        backgroundColor: 0x132c43,

        scene: [PreloadScene, PlayScene],
    };

    // creation of the game itself
    game = new Phaser.Game(gameConfig);

    // give focus to window
    window.focus();
};
