// Author: Sgt_Ghatak
// Date: 2023-10-26
//Sized for 1080p monitors

Char1 = token.document.texture.src
Box = "INSERT YOUR FILE PATH HERE"  //put the file location for the dialogue box image between the quoatation marks!
Name = token.document.name
Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

RandomString = ""

for (let i = 0; i < 21; i++) {
    RandomIndex = Math.floor(Math.random() * 25)
    RandomString = RandomString.concat(Alphabet[RandomIndex])
}

const Style = {
    "fill": "white",
    "fontFamily": "Modesto Condensed Light", //Font used for the name, change if required
    "fontSize": 24,
    "strokeThickness": 1
}

const Style2 = {
    "fill": "white",
    "fontFamily": "Sacre",  //Font used for the dialogue text, change if required
    "fontSize": 30,
    "strokeThickness": 3,
    "wordWrap": true
}

if(Tagger.hasTags(token, "Speaking")){

    await Tagger.removeTags(token, "Speaking");
    Sequencer.EffectManager.endEffects({ name: "Image"})
    Sequencer.EffectManager.endEffects({ name: "Box"})
    Sequencer.EffectManager.endEffects({ name: "Name"})
    Sequencer.EffectManager.endEffects({ name: "Dialogue"})

} else {

    Tagger.addTags(token, "Speaking")

    new Sequence()
        .effect()
            .file(Char1)
            .name("Image")
            .screenSpace()
            .screenSpaceAboveUI()
            .size(375)
            .screenSpacePosition({ x: -635, y: 260 })
            .animateProperty("sprite", "position.x", { from: 800, to: 0, duration: 500, ease: "easeOutQuint"})
            .fadeIn(500)
            .fadeOut(1000)
            .zIndex(0)
            .persist()

        .effect()
            .file(Box)
            .name("Box")
            .screenSpace()
            .screenSpaceAboveUI()
            .size({width: 995, height: 195})
            .screenSpacePosition({ x: 0, y: 320 })
            .fadeIn(500)
            .fadeOut(1000)
            .zIndex(1)
            .delay(500)
            .persist()

        .effect()
            .text(Name, Style)
            .name("Name")
            .screenSpace()
            .screenSpaceAboveUI()
            .screenSpacePosition({ x: -300, y: 250 })
            .fadeIn(500)
            .fadeOut(1000)
            .zIndex(2)
            .delay(500)
            .persist()

        .play()

    await Sequencer.Helpers.wait(1250)

    for(i = 0; i < RandomString.length; i++){

        new Sequence()
            .effect()
            .text(RandomString.charAt(i), Style2)
            .name("Dialogue")
            .screenSpace()
            .screenSpaceAboveUI()
            .screenSpacePosition({ x: -350 + 37*i, y: 320 })
            .fadeIn(200)
            .fadeOut(100)
            .zIndex(2)
            .persist()

            .play()
      
        await Sequencer.Helpers.wait(100)
   }
}