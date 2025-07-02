const text = "Web Developer | BCA Student";
const typingElement = document.querySelector(".web");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typingElement.textContent = "";
typeEffect();


const skillCards = document.querySelectorAll(".skill-card");

function revealOnScroll() {
  skillCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (cardTop < triggerPoint) {
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

skillCards.forEach(card => {
  card.style.transform = "translateY(30px)";
  card.style.opacity = "0";
  card.style.transition = "0.6s ease";
});