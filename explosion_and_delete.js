//Updated: 2023/04/23
//Author: Sgt_Ghatak

await new Sequence()

.effect()
.file("animated-spell-effects-cartoon.explosions.07")
.atLocation(token)
.size(3, {gridUnits: true})
.zIndex(3)

.effect()
.file("animated-spell-effects-cartoon.air.puff.02")
.startTime(200)
.atLocation(token)
.size(3, {gridUnits: true})
.belowTokens()
.delay(150)
.zIndex(2)

.animation()
.on(token)
.fadeOut(1)
.delay(200)

.effect()
.file("jb2a.impact.ground_crack.orange.02")
.atLocation(token)
.fadeOut(1000)
.size(2.5, {gridUnits: true})
.belowTokens()
.zIndex(1)

.effect()
.file("jb2a.impact.ground_crack.still_frame.02")
.atLocation(token)
.belowTokens()
.fadeIn(1000)
.filter("ColorMatrix", {hue: -15, saturate: 1})
.size(2.5, {gridUnits: true})
.persist()
.zIndex(0)

.effect()
.file("animated-spell-effects-cartoon.misc.blood splatter")
.atLocation(token)
.startTime(300)
.belowTokens()
.fadeIn(250)
.filter("ColorMatrix", {hue: -5, saturate: 1})
.size(1.5, {gridUnits: true})
.delay(100)
.persist()
.zIndex(2)


.effect()
.file("jb2a.particles.outward.orange.02.03")
.atLocation(token)
.duration(1500)
.fadeIn(500)
.fadeOut(1000)
.size(2, {gridUnits: true})
.zIndex(1)
.waitUntilFinished()

.play()

canvas.tokens.controlled[0].document.delete()
