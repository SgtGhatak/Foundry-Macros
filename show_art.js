if (token === undefined) {
  ui.notifications.warn("Please select token first.");
} else {
  let tActor = token.actor;
  let ip = new ImagePopout(tActor.data.img, {
    title: tActor.name,
    shareable: true,
    uuid: tActor.uuid
  }).render(true);
  ip.shareImage();
}
