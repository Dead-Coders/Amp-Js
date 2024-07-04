const myanime = anime.timeline({
  delay: anime.stagger(200),
});

myanime.add({
  targets: ".box",
  duration: 2000,
  delay: anime.stagger(200),

  //   rotateZ: "90deg",
  //   translateX: (el, i) => 100 + 100 * i,
  translateX: 100 + 100,
  //   loop: true,
  //   direction: "alternate",

  //   scale: 1.5,
});

myanime.add({
  targets: ".box",
  duration: 2000,
  delay: anime.stagger(200),
  backgroundColor: "rgb(78, 197, 197)",
});
