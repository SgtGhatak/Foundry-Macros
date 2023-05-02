function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

if (Tagger.hasTags(token, "smoking")) {

    await Tagger.removeTags(token, "smoking");
    await Sequencer.EffectManager.endEffects({name: "smoking", object: token});
    
} else {

Tagger.addTags(token, "smoking");

await new Sequence()
.effect()
.file("jb2a.smoke.puff.centered.dark_black.0")
.name("smoking")
.atLocation(token)
.attachTo(token)
.size(0, {gridUnits: true})
.persist()

.play()

await sleep(250);

while (Tagger.hasTags(token, "smoking")) {
    x = Math.floor(Math.random() * 3)

    if (x >= 0 || x < 1) {
        await new Sequence()

        .effect()
        .file("jb2a.smoke.puff.centered.dark_black.0")
        .atLocation(token)
        .attachTo(token)
        .size(3.5, {gridUnits: true})
        .timeRange(0, 2000)
        .randomRotation()

        .play()
        await sleep(500);
    }
    
    if (x >= 1 || x < 2) {
        await new Sequence()

        .effect()
        .file("jb2a.smoke.puff.centered.dark_black.1")
        .atLocation(token)
        .attachTo(token)
        .size(3.5, {gridUnits: true})
        .timeRange(0, 2000)
        .randomRotation()

        .play()
        await sleep(500);
    }
    
    if (x >= 2 || x <= 3) {
        await new Sequence()

        .effect()
        .file("jb2a.smoke.puff.centered.dark_black.2")
        .atLocation(token)
        .attachTo(token)
        .size(3.5, {gridUnits: true})
        .timeRange(0, 2000)
        .randomRotation()

        .play()
        await sleep(500);
    }
}
}
