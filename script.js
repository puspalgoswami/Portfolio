const roles = [
  { text: "Web Developer", article: "a" },
  { text: "ML Enthusiast", article: "an" },
  { text: "probably stuck on a C++ code right now", article: "" }
];

let roleIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");
const prefix = document.getElementById("prefix");

function type() {
  const current = roles[roleIndex];
  const fullText = current.text;

  prefix.textContent = current.article
    ? `I'm ${current.article} `
    : `I'm `;

  if (charIndex < fullText.length) {
    typedText.textContent += fullText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = typedText.textContent.slice(0, -1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) type();
});
