// PROCESS RAW DATA
function formatTimestamp(timestamp) {
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var formattedTime =
    hours + ":" + minutes.substr(-2) + " " + day + "/" + month + "/" + year;
  return formattedTime;
}

// console.log(formatTimestamp(1716310740)); // Output: "HH:MM dd/mm/yyyy"
function TimestampLaz(timestamp) {
  let date = new Date(timestamp);
  let formattedDate = date.toLocaleDateString("vi-VN");
  return formattedDate;
}

function formattedAmount(amount) {
  let formattedAmount = amount.toLocaleString("vi-VN") + "đ";
  return formattedAmount;
}

function copyVoucherCode(code, element) {
  var voucherCode = code;
  var tempInput = document.createElement("input");
  tempInput.value = voucherCode;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  console.log("Copied");
  element.textContent = "Copied";
}
// CALL DATA
function getVoucher(category) {
  const list_voucher = document.querySelector(".list_voucher");
  list_voucher.innerHTML = `<div class="loader"></div>`;
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
      const vouchers = result;
      list_voucher.innerHTML = "";
      vouchers.forEach((voucher) => {
        if (category == "Shopee") {
          code = voucher.code;
          list_voucher.innerHTML += `<div class="voucher_item">
         <div class="voucher_img">
            <img src="${voucher.icon}" alt="">
            <p><b>${voucher.apply}</b></p>
         </div>
         <div class="voucher_content">
            <div class="voucher_detail">
               <div class="voucher_name">
                  <p id="name1"><b>${voucher.name}</b></p>
                  <p id="name2">Đơn từ ${voucher.min_spend}</p>
                  <div class="voucher_progress">
                     <progress value="${
                       voucher.used
                     }" max="100" style="width:150px;"></progress>
                     <span>${voucher.used}%</span>
                  </div>
                  <p class="voucher_time">HSD: ${formatTimestamp(
                    voucher.end
                  )}</p>
                  <p class="voucher_count">Số lượng: ${voucher.count} lượt</p>
               </div>
      
               <div class="voucher_info">
               </div>
      
            </div>
            <div class="voucher_btn">
               <button class="voucher_button" id="btn_copy" onclick="copyVoucherCode(
                 '${voucher.code}', this
               )">Copy</button>
               <button class="voucher_button" id="btn_apply" onclick="window.open('${
                 voucher.link_aff
               }', '_blank');">Áp dụng</button>
            </div>
         </div>
      </div>`;
        }
        // Lazada
        else {
          list_voucher.innerHTML += `<div class="voucher_item_laz">
          <div class="voucher_img_laz">
            <img src="./Lazada img/logo2.png" alt="">
            <p><b>${voucher.categorySlug}</b></p>
            <p class="voucher_time_laz">HSD: ${TimestampLaz(
              voucher.expiredAt
            )}</p>
        
          </div>
          <div class="dot_line"></div>
          <div class="voucher_content_laz">
            <div class="voucher_detail_laz">
              <div class="voucher_name_laz">
                <p><b>Giảm <span id="name1_laz">${formattedAmount(
                  voucher.discountAmount
                )}</span></b></p>
                <p>Đơn từ <span id="name2_laz">${formattedAmount(
                  voucher.minSpend
                )}</span></p>
                <br>
                <p class="voucher_note" style="color: #FF7F50;">Note: ${
                  voucher.note
                }</p>
              </div>
        
              <div class="voucher_info">
              </div>
        
            </div>
            <div class="voucher_btn_laz">
              <!-- <button class="voucher_button" id="btn_copy">Copy</button> -->
              <button class="voucher_button_laz" id="btn_apply" onclick="window.open('${
                voucher.affLink
              }', '_blank');"><b>Lấy ngay</b></button>
            </div>
          </div>
        </div>`;
        }
      });
    })
    .catch((error) => console.error(error));
}

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

//  back to top
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
// getVoucher("Shopee");
