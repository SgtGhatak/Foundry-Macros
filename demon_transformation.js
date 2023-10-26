// Author: Sgt_Ghatak
// Date: 2023-10-26

new Sequence()

    // Movement animation into the air
    .animation()
        .on(token)
        .moveTowards({x: token.document.x, y: token.document.y - 200}, {ease: "easeInOutSine"})
        .moveSpeed(1)
        .waitUntilFinished()

    // Creates a red clone of the token and fades it in
    .effect()
        .name("red")
        .from(token)
        .atLocation(token)
        .attachTo(token)
        .tint("#FF0000")
        .fadeIn(3000)
        .delay(1000)
        .persist()

    // The shake animations
    .animation()
        .on(token)
        .rotateIn(10, 200, {ease: "linear"})
        .waitUntilFinished()

    .animation()
        .on(token)
        .rotateIn(-10, 400, {ease: "linear"})
        .waitUntilFinished()


    .animation()
        .on(token)
        .rotateIn(10, 400, {ease: "linear"})
        .waitUntilFinished()

    .animation()
        .on(token)
        .rotateIn(-10, 400, {ease: "linear"})
        .waitUntilFinished()


    .animation()
        .on(token)
        .rotateIn(10, 200, {ease: "linear"})
        .waitUntilFinished()

    .animation()
        .on(token)
        .rotateIn(-10, 200, {ease: "linear"})
        .waitUntilFinished()



    .animation()
        .on(token)
        .rotateIn(10, 100, {ease: "linear"})
        .waitUntilFinished()

    .animation()
        .on(token)
        .rotateIn(-10, 100, {ease: "linear"})
        .waitUntilFinished()


    .animation()
        .on(token)
        .rotateIn(0, 50, {ease: "linear"})
        .waitUntilFinished()
    // End of Shake animations

    // Creates a blood splatter effect behind the tokens
    .effect()
        .file("animated-spell-effects-cartoon.misc.blood splatter")
        .atLocation(token)
        .size(4, {gridUnits: true})
        .belowTokens()
        .delay(1000)
        .duration(6000)
        .fadeOut(1000)
        .filter("ColorMatrix", {hue: -5, saturate: 1})
        .noLoop(true)

    // Plays the sound of the blood splatter
    .sound()
        .file("INSERT blood-squelch.wav FILE PATH HERE")
        .volume(1)
        .startTime(100)
        .delay(1000)

    // Makes the token invisible
    .animation()
        .on(token)
        .fadeOut(1)
        .delay(1000)

    .play()


// Wait command
await new Promise(r => setTimeout(r, 7500));

// Deleted the red clone
Sequencer.EffectManager.endEffects({name: "red", object: token })

//Replaces old actor with the in the new actor. Insert the Actor ID for your intended actor.
const dretch = (await game.actors.get("INSERT ACTOR ID HERE").getTokenDocument({x: token.x, y: token.y, elevation: token.document.elevation, alpha: token.document.alpha})).toObject();

await token.document.update(dretch);

await new Promise(r => setTimeout(r, 1000));

new Sequence()

    // Fades in the invisible token
    .animation()
        .on(token)
        .fadeIn(2000)
        .delay(1000)
        .waitUntilFinished()

    // Lowers the token from the air
    .animation()
        .on(token)
        .moveTowards({x: token.document.x, y: token.document.y + 200}, {ease: "easeInOutSine"})
        .moveSpeed(1)

    .play()