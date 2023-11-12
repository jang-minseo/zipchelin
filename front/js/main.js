/* 메인 베너 */
var swiper = new Swiper(".main_banner", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


/* 집슐랭 픽 */
var swiper = new Swiper(".zipPick", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

var swiper = new Swiper(".zipPick2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

/* 요리 저장소 */
var swiper = new Swiper(".cookConsulSlide", {
  direction: "vertical",
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


/* 더보기 버튼 */
function viewBtn() {
  document.getElementsByClassName('rank_btn')[0].style.display = "none";
  document.getElementsByClassName('rank_row1')[0].style.display = "flex";
  document.getElementsByClassName('rank_row1')[1].style.display = "flex";
}


/* 하트 토글 버튼 */
document.querySelectorAll('.fa-regular.fa-heart').forEach(function (icon) {
  icon.addEventListener('click', function () {
    this.classList.toggle('fa-regular');
    this.classList.toggle('fa-solid');
  });
});


