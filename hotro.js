document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = Array.from(sliderWrapper.children);
    const totalSlides = slides.length;
    const slidesToShow = 4;
    let currentIndex = slidesToShow;
  
    
    for (let i = 0; i < slidesToShow; i++) {
        const cloneFirst = slides[i].cloneNode(true);
        const cloneLast = slides[slides.length - 1 - i].cloneNode(true);
        sliderWrapper.appendChild(cloneFirst);
        sliderWrapper.insertBefore(cloneLast, slides[0]);
      }
  
    const totalClones = slidesToShow * 2;
    const slideWidth = 100 / (totalSlides + totalClones);
    sliderWrapper.style.width = `${(totalSlides + totalClones) * 25}%`; 
    sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  
    function updateTrackPosition() {
      sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
      sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth*3}%)`;
    }
  
    function nextImage() {
        currentIndex++;
        if (currentIndex > totalSlides + slidesToShow) {
          currentIndex = slidesToShow + 1;
        }
        updateTrackPosition();
      }
  
      function prevImage() {
        currentIndex--;
        if (currentIndex < slidesToShow - 1) {
          currentIndex = totalSlides + slidesToShow - 1;
        }
        updateTrackPosition();
      }
  
    
      const nextButton = document.querySelector('.next-button');
  const prevButton = document.querySelector('.prev-button');
  nextButton.addEventListener('click', nextImage);
  prevButton.addEventListener('click', prevImage);
  
   
  updateTrackPosition();
    
   
    setInterval(nextImage, 3000); 
  });
  