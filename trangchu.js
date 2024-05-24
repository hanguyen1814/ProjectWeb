document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".banner-track");
  const banners = track.querySelectorAll("img");
  const totalImages = banners.length / 2;
  let currentIndex = 0;

  function updateTrackPosition() {
    track.style.transform = `translateX(-${currentIndex * (100 / 4)}%)`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateTrackPosition();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateTrackPosition();
  }

  updateTrackPosition();

  setInterval(nextImage, 5000);

  document.querySelector(".next-button").addEventListener("click", nextImage);
  document.querySelector(".prev-button").addEventListener("click", prevImage);

  banners.forEach((banner) => {
    const clone = banner.cloneNode(true);
    track.appendChild(clone);
  });
});
