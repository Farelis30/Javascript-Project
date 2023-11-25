let currentIndex = 0;

const showSlide = (index) => {
  updateDots();
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider-item");

  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + "%";
  slider.style.transform = "translateX(" + translateValue + ")";
};

const prevSlide = () => {
  showSlide(currentIndex - 1);
};

const nextSlide = () => {
  showSlide(currentIndex + 1);
};

setInterval(() => {
  nextSlide();
}, 4000);
