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
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  banners.forEach((banner) => {
    const clone = banner.cloneNode(true);
    track.appendChild(clone);
  });

  createDots();
  updateTrackPosition();
  setInterval(nextImage, 5000);

  document.querySelector(".next-button").addEventListener("click", nextImage);
  document.querySelector(".prev-button").addEventListener("click", prevImage);
});

// back to top

var sttElem = document.querySelector(".stt");
var screanHeight = window.innerHeight;

var sttScroll = function sttScroll() {
  document.addEventListener("scroll", function (e) {
    if (screanHeight <= window.scrollY) {
      sttElem.classList.add("stt__active");
    } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
      sttElem.classList.remove("stt__active");
      sttElem.style.pointerEvents = "auto";
    }
  });
};

var sttClick = function sttClick() {
  sttElem.addEventListener("click", function () {
    var docHeight = window.scrollY;
    var progress = 0;
    var position = docHeight;
    var speed = 5;

    sttElem.style.pointerEvents = "none";

    var sttAnim = function sttAnim() {
      progress += 1;
      position -= progress * speed;
      window.scrollTo(0, position);

      if (position > 0) {
        requestAnimationFrame(sttAnim);
      }
    };

    requestAnimationFrame(sttAnim);
  });
};

var sttFunc = function sttFunc() {
  sttScroll();
  sttClick();
};

document.addEventListener("DOMContentLoaded", sttFunc);

// rcm products
function formattedAmount(amount) {
  let formattedAmount = amount.toLocaleString("vi-VN") + "đ";
  return formattedAmount;
}

function getPrd(category) {
  const listPrd = document.querySelector(".rcm_dash");
  listPrd.innerHTML = `<div class="loader"></div>`;
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://script.google.com/macros/s/AKfycby4NqoHt9m_TpfLlJnpgN3qJZt-K0bMGyfvKsKyV39FS0_8hxN7E5VbP4bOMdd-KQoF7w/exec?category=${category}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      const prds = result;
      listPrd.innerHTML = "";
      prds.forEach((item) => {
        listPrd.innerHTML += `<div class="item_shopee">
  <div class="img_prd" style="position: relative;">
    <a href="${item.link}" target="_blank">
      <img src="${item.Img}" alt="">
    </a>
    <div class="sale_off">
      <p>-${item.raw_discount}%</p>
    </div>
  </div>
  <div class="detail_prd">
    <div class="namePrd">
      <a href="${item.link}" target="_blank">
        ${item.name}
      </a>
    </div>
  </div>
  <div class="price">
    <div class="price_sale" id="price">
      <p style="color: red;">${formattedAmount(item.price)}</p>
    </div>
    <div class="price_origin" id="price">
      <p style="color: black;"><del>${formattedAmount(
        item.price_origin
      )}</del></p>
    </div>
  </div>
</div>`;
      });
    })
    .catch((error) => console.error(error));
}

getPrd("Recommend");
