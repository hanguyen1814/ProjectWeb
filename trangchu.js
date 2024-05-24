document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".banner-track");
  const banners = track.querySelectorAll("img");
  const totalImages = banners.length / 2;
  let currentIndex = 0;

  function updateTrackPosition() {
    track.style.transform = `translateX(-${currentIndex * (100 / 4)}%)`;
    updateDots();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateTrackPosition();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateTrackPosition();
  }

  function createDots() {
    const dotsContainer = document.querySelector(".dot-indicators");
    for (let i = 0; i < totalImages; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateTrackPosition();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  banners.forEach(banner => {
    const clone = banner.cloneNode(true);
    track.appendChild(clone);
  });

  createDots();
  updateTrackPosition();
  setInterval(nextImage, 5000);

  document.querySelector(".next-button").addEventListener("click", nextImage);
  document.querySelector(".prev-button").addEventListener("click", prevImage);
});
