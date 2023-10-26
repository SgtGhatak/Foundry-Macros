// Author: Sgt_Ghatak
// Date: 2023-04-23

//ENTER YOUR BELL RINGING SOUND HERE, paste the file path of your sound file inbetween the quotation marks ("")
bellRingingSound = "worlds/vilandris/music/Sound%20Effects/Hand%20bell%20ringing.mp3";

await new Sequence()

.effect()
.file("https://i.imgur.com/fb1pa04.png")
.atLocation(token, {offset: {x: -0.3, y: 0.3}, gridUnits: true})
.attachTo(token)
.size(0.5, {gridUnits: true})
.duration(4000)
.fadeIn(1000)
.loopProperty("sprite", "rotation", { from: -90, to: 90, duration: 200, delay: 800, pingPong: true})
.fadeOut(500)

.sound()
.file(bellRingingSound)
.duration(4000)
.fadeInAudio(1000)
.fadeOutAudio(1000)
.volume(0.5)

.play()
