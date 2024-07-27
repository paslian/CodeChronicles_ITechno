document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#element", {
    strings: ["helo Word }"],
  })
    .move(-3, { delay: 100 })
    .type("l", { delay: 400 })
    .move(1, { delay: 200 })
    .move(-8, { delay: 200 })
    .type("l", { delay: 225 })
    .pause(200)
    .move(null, { to: "START", instant: true, delay: 300 })
    .move(1, { delay: 200 })
    .delete(1)
    .type("{ H", { delay: 400 })
    .move(null, { to: "END" })
    .go();
});