// Efek smooth scroll saat klik menu navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animasi sederhana saat scroll (fade-in)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// Set style awal untuk animasi
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 0.8s ease";
});
