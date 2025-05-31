const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    function setActiveLink() {
      let index = sections.length;
      while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
      navLinks.forEach((link) => link.classList.remove("active-scroll"));
      navLinks[index].classList.add("active-scroll");
    }

    function revealOnScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        if (sectionTop <= window.innerHeight - sectionHeight / 4) {
          section.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", () => {
      setActiveLink();
      revealOnScroll();
    });

    document.addEventListener("DOMContentLoaded", () => {
      revealOnScroll();
    });

const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

function updateSlidePosition() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});


window.addEventListener('resize', updateSlidePosition);