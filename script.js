document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
  
    // Simulate a short delay for the loading effect (optional)
    setTimeout(() => {
      loadingScreen.style.opacity = "0"; // Fade out the loading screen
      loadingScreen.style.pointerEvents = "none"; // Prevent interaction
    }, 1000); // Adjust duration as needed (in milliseconds)
  
    // Remove the loading screen from the DOM after the fade-out
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 1500); // Ensure this happens after the fade-out transition
  });
  
  



function scrollToSection() {
    const targetSection = document.querySelector('.scrollable-section.second-background');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error('Target section not found!');
    }
}
function Homescroll(){
    const targetSection = document.querySelector('.background-section');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error('Target section not found!');
    }

}
function ProjectScroll(){
    const targetSection = document.querySelector('.third-background');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error('Target section not found!');
    }

}
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", handleMouseMove);
});

function handleMouseMove(e) {
  const rect = this.getBoundingClientRect();
  const mouseX = e.clientX - rect.left - rect.width / 2;
  const mouseY = e.clientY - rect.top - rect.height / 2;

  let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

  angle = (angle + 360) % 360;

  this.style.setProperty("--start", angle + 60);
}



let lastScrollTop = 0; // Store the last scroll position
const buttonContainer = document.getElementById("button-container");

window.addEventListener("scroll", function () {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop + 5) {
    // If scrolling down slightly, hide the container
    buttonContainer.style.opacity = "0";
    buttonContainer.style.pointerEvents = "none"; // Prevent clicks when hidden
  } else if (st < lastScrollTop - 5) {
    // If scrolling up slightly, show the container
    buttonContainer.style.opacity = "1";
    buttonContainer.style.pointerEvents = "auto"; // Allow clicks when visible
  }

  // Update the last scroll position
  lastScrollTop = st <= 0 ? 0 : st; // Avoid negative scroll values
});

