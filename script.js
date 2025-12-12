const tipButton = document.querySelector("#tip-button");
const tipText = document.querySelector("#tip-text");

const focusModeButton = document.querySelector("#focus-mode-button");

const yearSpan = document.querySelector("#year");
const footerYears = document.querySelectorAll(".footer-year");

const studyTips = [
  "Review your notes within 24 hours to help your memory stick.",
  "Teach a friend what you just learned to test your understanding.",
  "Turn big tasks into small steps and check them off one by one.",
  "Use short breaks to stretch, breathe, or walk instead of scrolling.",
  "Practice a little bit every day instead of cramming at the end."
];

function showRandomTip() {
  const randomIndex = Math.floor(Math.random() * studyTips.length);
  tipText.textContent = studyTips[randomIndex];
}

if (tipButton && tipText) {
  tipButton.addEventListener("click", showRandomTip);
}

function toggleFocusMode() {
  document.body.classList.toggle("focus-mode");
}

if (focusModeButton) {
  focusModeButton.addEventListener("click", toggleFocusMode);
}

const currentYear = new Date().getFullYear();

if (yearSpan) {
  yearSpan.textContent = currentYear;
}

if (footerYears.length) {
  footerYears.forEach(span => {
    span.textContent = currentYear;
  });
}

/* -------- Extra creative JS: time-based greeting on home -------- */

const heroText = document.querySelector(".hero-text");

if (heroText) {
  const greeting = document.createElement("p");
  greeting.className = "greeting-text";

  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = "Good morning! Let’s start the day with steady progress.";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon! Keep going—you’re building something slowly and surely.";
  } else {
    greeting.textContent = "Good evening. You’ve already done a lot today; a little more focus goes a long way.";
  }

  // 插在介绍段落后、按钮前
  const firstParagraph = heroText.querySelector("p");
  if (firstParagraph) {
    firstParagraph.insertAdjacentElement("afterend", greeting);
  } else {
    heroText.prepend(greeting);
  }
}

/* -------- Extra creative JS: subtle parallax on hero image -------- */

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
  const maxShift = 8; // 最大偏移像素，保持很轻微
  document.addEventListener("mousemove", (event) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = ((event.clientX - innerWidth / 2) / innerWidth) * maxShift;
    const offsetY = ((event.clientY - innerHeight / 2) / innerHeight) * maxShift;
    heroImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

  document.addEventListener("mouseleave", () => {
    heroImage.style.transform = "translate(0, 0)";
  });
}
