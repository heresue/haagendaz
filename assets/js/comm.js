new Swiper(".swiper-container", {
    direction: "vertical", // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
  });


// best-section
var swiper = new Swiper(".swiper-best", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var swiper = new Swiper(".swiper-best", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});