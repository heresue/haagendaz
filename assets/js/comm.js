// intro-section
var swiper = new Swiper(".swiperIntro", {
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



// fp-section
// 윈도우에 스크롤 이벤트를 걸어줌
window.addEventListener("scroll", function () {
  const section = document.querySelectorAll(".fp-section");

  section.forEach(function (section) {
      let bounds = section.getBoundingClientRect();
      const imgbox = section.querySelector(".imgBox");
      const textbox = section.querySelector(".textBox");

      let scrolled = window.scrollY;
      console.log(`scrollY : ${scrolled}`);
      console.log(`bounds.top : ${bounds.top}`);
      console.log(`bounds.bottom : ${bounds.bottom}`);
      console.log(`window.innerHeight : ${window.innerHeight}`);
      
      if (bounds.top < window.innerHeight && bounds.bottom >= 0) {
          let sectionScrolled = window.pageYOffset - section.offsetTop;
          imgbox.style.transform = `translateY(${sectionScrolled * 0.8}px)`;
          textbox.style.transform = `translateY(${sectionScrolled * 0.3}px)`;
      }
      })
})



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

