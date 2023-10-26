// Author: Sgt_Ghatak
// Date: 2023-10-26

// Warpgate Crosshair
let config = {
    size: 1,
    icon: 'icons/magic/fire/blast-jet-stream-splash.webp',
    label: 'cannon fire',
    tag: 'fire',
    drawIcon: true,
    drawOutline: true,
    interval: 0
}

let position = await warpgate.crosshairs.show(config)

new Sequence()

    // Smoke 1 animation (long)
    .effect()
        .file("animated-spell-effects-cartoon.smoke.49")
        .atLocation(position, {offset: {x:1.25}, gridUnits: true})
        .size(3, {gridUnits: true})
        .rotate(270) // change this value to shoot in a different direction
        .zIndex(2)

    // Smoke 2 animation (wide)
    .effect()
        .file("animated-spell-effects-cartoon.smoke.53")
        .atLocation(position, {offset: {x:1.25}, gridUnits: true})
        .size(3, {gridUnits: true})
        .rotate(270) // change this value to shoot in a different direction
        .zIndex(1)

    // Cannonball animation
    .effect()
        .file("animated-spell-effects-cartoon.smoke.121")
        .atLocation(position, {offset: {x:4}, gridUnits: true})
        .rotate(0) // change this value to shoot in a different direction
        .playbackRate(3)
        .zIndex(0)

    // Cannon sound effect
    .sound()
        .file("INSERT cannon-fire.mp3 FILE PATH HERE")
        .volume(0.1)
        .startTime(200)

    .play()