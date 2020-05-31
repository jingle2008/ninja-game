import backgroundImg from './assets/sprites/background.png';
import cloudImg from './assets/sprites/cloud.png';
import tileImg from './assets/sprites/tile.png';
import dangerImg from './assets/sprites/dangertile.png';
import heroImg from './assets/sprites/hero.png';

export class PreloadScene extends Phaser.Scene {
    // class constructor
    constructor() {
        super('PreloadScene');
    }

    // method automatically executed by Phaser when the scene preloads
    preload() {
        // load background image and assign it "background" key
        this.load.image('background', backgroundImg);
        this.load.image('tile', tileImg);
        this.load.image('dangertile', dangerImg);

        this.load.image('title', 'src/assets/sprites/title.png');
        this.load.image('info', 'src/assets/sprites/info.png');
        this.load.image('playbutton', 'src/assets/sprites/playbutton.png');
        this.load.image('logo', 'src/assets/sprites/logo.png');
        this.load.image('clock', 'src/assets/sprites/clock.png');
        this.load.image('energybar', 'src/assets/sprites/energybar.png');
        this.load.image('whitetile', 'src/assets/sprites/whitetile.png');
        // load a sprite sheet and assign it "cloud" key
        this.load.spritesheet('cloud', cloudImg, {
            // frame width, in pixels
            frameWidth: 256,

            // frame height, in pixels
            frameHeight: 256,
        });

        this.load.spritesheet('hero', heroImg, {
            frameWidth: 77,
            frameHeight: 97,
        });
        this.load.spritesheet('icons', 'src/assets/sprites/icons.png', {
            frameWidth: 150,
            frameHeight: 150,
        });
        // this is how we preload a bitmap font
        this.load.bitmapFont(
            'font',
            'src/assets/fonts/font.png',
            'src/assets/fonts/font.fnt'
        );

        // this is how we preload an audio file
        this.load.audio('death', [
            'src/assets/sounds/death.mp3',
            'src/assets/sounds/death.ogg',
        ]);
        this.load.audio('run', [
            'src/assets/sounds/run.mp3',
            'src/assets/sounds/run.ogg',
        ]);
        this.load.audio('stick', [
            'src/assets/sounds/stick.mp3',
            'src/assets/sounds/stick.ogg',
        ]);
        this.load.audio('grow', [
            'src/assets/sounds/grow.mp3',
            'src/assets/sounds/grow.ogg',
        ]);
        this.load.audio('pick', [
            'src/assets/sounds/pick.mp3',
            'src/assets/sounds/pick.ogg',
        ]);
        this.load.audio('click', [
            'src/assets/sounds/click.mp3',
            'src/assets/sounds/click.ogg',
        ]);
    }

    // method automatically executed by Phaser once the scene has been created,
    // often immediately after "preload" method
    create() {
        // create an animation
        this.anims.create({
            // we refer to this animation with "idle" key
            key: 'idle',

            // frames of the sprite sheet to use
            frames: this.anims.generateFrameNumbers('hero', {
                start: 0,
                end: 11,
            }),

            // frame rate, in frames per second
            frameRate: 15,

            // animation is be repeated endlessly
            repeat: -1,
        });

        // same concept is applied to run animation
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('hero', {
                start: 12,
                end: 19,
            }),
            frameRate: 15,
            repeat: -1,
        });

        // launch "PlayGame" scene
        this.scene.start('PlayScene');
    }
}
