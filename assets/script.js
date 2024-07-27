document.addEventListener("DOMContentLoaded", function() {
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

// Function to initialize navbar event listeners
function initializeNavbar() {
    document.getElementById("index-btn").addEventListener("click", function() {
        navigateTo("index.html", "index-btn");
    });
    document.getElementById("html-btn").addEventListener("click", function() {
        navigateTo("html.html", "html-btn");
    });
    document.getElementById("js-btn").addEventListener("click", function() {
        navigateTo("js.html", "js-btn");
    });
    document.getElementById("css-btn").addEventListener("click", function() {
        navigateTo("css.html", "css-btn");
    });
    document.getElementById("info-btn").addEventListener("click", function() {
        navigateTo("info.html", "info-btn");
    });

    // Highlight the active button based on the current page
    highlightActiveButton();
}

// Function to navigate to a different page and add active class
function navigateTo(page, buttonId) {
    // Navigate to the specified page
    window.location.href = page;
    // Store the active button ID in local storage
    localStorage.setItem("activeButtonId", buttonId);
}

// Function to highlight the active button based on local storage
function highlightActiveButton() {
    const activeButtonId = localStorage.getItem("activeButtonId");
    if (activeButtonId) {
        document.getElementById(activeButtonId).classList.add("active");
    }
}
//untukjs pagedocument.addEventListener('DOMContentLoaded', function() {
console.log('Dokumen HTML telah sepenuhnya dimuat dan dianalisis.');

const button = document.getElementById('myButton');
const displayText = document.getElementById('displayText');

button.addEventListener('click', function() {
    displayText.textContent = 'Tombol telah diklik!';
});