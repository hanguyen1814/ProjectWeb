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

console.log(formatTimestamp(1716310740)); // Output: "HH:MM dd/mm/yyyy"

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

    const dashboard = document.querySelector(".dashboard");
    dashboard.innerHTML = "";
    vouchers.forEach((voucher) => {
      dashboard.innerHTML += `<div class="voucher_item">
         <div class="voucher_img">
            <img src="${voucher.icon}" alt="">
            <p><b>${voucher.apply}</b></p>
         </div>
         <div class="voucher_content">
            <div class="voucher_detail">
               <div class="voucher_name">
                  <p id="name1"><b>${voucher.name}</b></p>
                  <p id="name2">Đơn tối thiểu ${voucher.min_spend}</p>
                  <div class="voucher_progress">
                     <progress value="43" max="100" style="width:15rem;"></progress>
                     <span>43%</span>
                  </div>
               </div>
      
               <div class="voucher_info">
                  <p class="voucher_time">HSD: ${formatTimestamp(
                    voucher.end
                  )}</p>
                  <p class="voucher_count">Số lượng: 500 lượt</p>
               </div>
      
            </div>
            <div class="voucher_btn">
               <button class="voucher_button" id="btn_copy">Copy</button>
               <button class="voucher_button" id="btn_apply">Áp dụng</button>
            </div>
         </div>
      </div>`;
    });
  })
  .catch((error) => console.error(error));
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