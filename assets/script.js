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

document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  let currentSection = 0;
  let isScrolling = false;

  function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, 500);
  }

  function handleScroll(event) {
    if (isScrolling) return;
    event.preventDefault();
    let delta = Math.sign(event.deltaY);
    currentSection = Math.min(
      Math.max(currentSection + delta, 0),
      sections.length - 1
    );
    scrollToSection(currentSection);
  }

  window.addEventListener("wheel", handleScroll);
  window.addEventListener("keydown", function (event) {
    if (isScrolling) return;

    if (event.key === "ArrowDown") {
      currentSection = Math.min(currentSection + 1, sections.length - 1);
    } else if (event.key === "ArrowUp") {
      currentSection = Math.max(currentSection - 1, 0);
    }
    scrollToSection(currentSection);
  });
});
