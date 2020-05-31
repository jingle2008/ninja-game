// object containing all customizable options, stored in a single place so you can
// easily change the gameplay by etiding a single piece of code
export const gameOptions = {
    // another object with the default size
    defaultSize: {
        // width of the game in the perfect scenario, in pixels
        width: 750,

        // height of the game in the perfect scenario, in pixels
        height: 1334,

        // maximum aspect ratio supported, a landscape iPad.
        // More than enough for a portrait game
        maxRatio: 4 / 3,
    },

    // array with the distance range between two platforms, in pixels
    platformGapRange: [200, 400],

    // array with the width range of each platform, in pixels
    platformWidthRange: [50, 150],

    // scrolling time, in milliseconds
    scrollTime: 250,

    // platform height, as a ratio from game height
    platformHeight: 0.6,

    // danger zone width, in pixels
    dangerZoneWidth: 20,

    // width of the pole, in pixels
    poleWidth: 8,

    // time to make pole reach its full length, in milliseconds
    poleGrowTime: 400,

    // time to make the pole rotate once released, in milliseconds
    poleRotateTime: 500,

    // milliseconds needed to move the ninja by a pixel
    heroWalkTime: 2,
    // time needed for the ninja to fall down, in milliseconds
    heroFallTime: 500,

    // do we have to show the GUI?
    showGUI: true,
    // amount of seconds you get for hitting the danger zone with the pole
    bonusTime: 3,

    // string to refer the local storage object which saves the best score
    localStorageName: 'irresponsible',

    // initial time, if you don't get any bonus, game ends in 30 seconds
    initialTime: 30,

    // do we have to play sounds?
    soundOn: true,
};
