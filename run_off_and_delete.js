const config = {
    size: 2,
    icon: 'systems/pf2e/icons/spells/triple-time.webp',
    label: 'run',
    tag: 'run',
    drawIcon: true,
    drawOutline: true,
    interval: 0 ,
    rememberControlled: true
};
const position = await warpgate.crosshairs.show(config);
if(position.cancelled) return;

const sequence = new Sequence();
for(const token of canvas.tokens.controlled) {
  sequence.animation().on(token).moveTowards(position).fadeOut(1500);
}
sequence.play();

await Sequencer.Helpers.wait(1500)

for(const token of canvas.tokens.controlled) {
  token.document.delete()
}

return;
