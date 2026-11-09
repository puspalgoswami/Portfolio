// ==========================================
// PUSPAL GOSWAMI — PORTFOLIO JAVASCRIPT
// ==========================================

// Dynamic role text animation
const roles = [
  "a Full-stack Developer",
  "a Backend Developer",
  "an AI/ML Enthusiast",
  "a Software Developer"
];

const typedText = document.getElementById("typed-text");

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = false;

function typeRole() {
  if (!typedText || reduceMotion) return;

  const currentRole = roles[roleIndex];

  if (!deleting) {
    // Type characters
    charIndex++;
    typedText.textContent = currentRole.slice(0, charIndex);

    if (charIndex >= currentRole.length) {
      deleting = true;
      setTimeout(typeRole, 1700);
      return;
    }
  } else {
    // Delete characters
    charIndex--;
    typedText.textContent = currentRole.slice(0, charIndex);

    if (charIndex <= 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, deleting ? 38 : 75);
}

// Start animation
if (typedText && !reduceMotion) {
  setTimeout(() => {
    deleting = true;
    typeRole();
  }, 1700);
}


// ==========================================
// RESPONSIVE MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(!isExpanded)
    );

    siteNav.classList.toggle("open", !isExpanded);
  });

  // Close menu after clicking a navigation link
  const navLinks = siteNav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// ==========================================
// AUTOMATIC COPYRIGHT YEAR
// ==========================================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}