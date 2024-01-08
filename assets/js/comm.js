// fp-section
var swiper = new Swiper(".swiperFp", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// best-section
var swiper = new Swiper(".swiperBest", {
  slidesPerView: "auto",
  spaceBetween: 20,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// var swiper = new Swiper(".swiperBest", {
//   slidesPerView: auto,
//   centeredSlides: true,
//   spaceBetween: 20,
//   freeMode: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });



// footer
// menu
const accordion = document.querySelector(".accordion");
function toggleAccordion() {
  const clickedItem = this.parentNode;
  const items = accordion.querySelectorAll("li");

  items.forEach((item) => {
    if (clickedItem === item) {
      item.classList.toggle("on");
    } else {
      item.classList.remove("on");
    }
  });
}

const titles = accordion.querySelectorAll(".title");
titles.forEach((title) => {
  title.addEventListener("click", toggleAccordion);
});

