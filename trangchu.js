const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://script.google.com/macros/s/AKfycby4NqoHt9m_TpfLlJnpgN3qJZt-K0bMGyfvKsKyV39FS0_8hxN7E5VbP4bOMdd-KQoF7w/exec?category=Shopee",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const vouchers = result;
    const board = document.querySelector(".board");

    board.innerHTML = "";

    vouchers.forEach((voucher) => {
      const mgg = document.createElement("div");
      mgg.className = "mgg";

      mgg.innerHTML = `
    <a href="#"></a>
    <div class="voucher-main" style="display: flex; justify-content: center;">
      <div class="info-voucher"> 
        <div><span>Giảm giá: ${voucher.name}</span></div>
        <div><progress value="${voucher.start}" max="${voucher.end}"></progress></div>
        <div><span>Chi tiết</span></div>
      </div>
      <div class="action-voucher">
        <button class="btn">Dùng ngay</button>
        <button class="btn">List áp dụng</button>
      </div>
    </div>
  `;

      board.appendChild(mgg);
    });
  })
  .catch((error) => console.error(error));

  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.banner-track');
    const banners = track.querySelectorAll('img');
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
  
    document.querySelector('.next-button').addEventListener('click', nextImage);
    document.querySelector('.prev-button').addEventListener('click', prevImage);
  
    banners.forEach(banner => {
      const clone = banner.cloneNode(true);
      track.appendChild(clone);
    });
  });
  


