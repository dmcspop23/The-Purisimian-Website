const primaryNav = document.querySelector(".nav-bar");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

const text = "- The Official Publication of CPC"; // The text you want to animate
const eraseDelay = 300; // Delay in milliseconds before erasing the text
const typeDelay = 200; // Delay in milliseconds between typing each character
let isDeleting = false;
let charIndex = 0;
let textIndex = 0;
const typewriterElement = document.getElementById("typewriter");
const typedItems = typewriterElement.getAttribute("data-typed-items").split(",").map(item => item.trim());

function type() {
  const item = typedItems[textIndex]; // Get the current item to type or erase

  if (isDeleting) {
    // Erasing the text
    typewriterElement.textContent = item.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % typedItems.length; // Move to the next item
    }
  } else {
    // Typing the text
    typewriterElement.textContent = item.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === item.length) {
      isDeleting = true;
      setTimeout(type, eraseDelay); // Delay before starting to erase
    }
  }

  setTimeout(type, typeDelay); // Delay between typing each character
}

type();









