// header
// 준비이벤트 (위에 넣어줄 때는 준비이벤트를 넣어줘야 읽힘)
$(function () {
  // 헤더 색 바꿔주기
  // $('.header-fix').css('background', 'white');

  // 전역변수 (전체)
  const $window = $(window);
  const $header = $("#header");

  $header.each(function () {
    // header의 정수리(top) 위치값(offset)
    // let headerOffsetTop = $header.offset().top;
    // 모든 페이지의 헤더값이 아닌 지금 나의 엄마를 잡고 싶다면?
    let headerOffsetTop = $(this).offset().top;

    // console.log(headerOffsetTop)
    // console.log("header의 위치값 " + headerOffsetTop)

    // scroll event
    // window가 스크롤 됐을 때 ([참고] .on: jQuery에서 "addEventListener"의 기능)
    // scroll 이벤트가 발생할 때 한 번만 호출되도록 수정 (off스크롤)
    $window.off("scroll").on("scroll", function () {
      // 윈도우의 스크롤 확인
      const $scrolled = $window.scrollTop();
      // console.log("윈도우의 스크롤 값 : " + $scrolled)

      // 윈도우의 스크롤 값이 header의 위치값보다 커졌을 때
      if ($scrolled > headerOffsetTop) {
        // 참일 경우
        // header에 .sticky 추가
        $header.addClass("sticky");
        // $header.addClass('sticky') 대신 gsap 넣어도 된다
      } else {
        // 거짓일 경우
        // header에 .sticky 제거
        $header.removeClass("sticky");
      }
    });

    // trigger: 스크롤 이벤트를 강제로 발생시키는 역할
    //      이미 발생한 것 같이 보여줌 (새로고침했을때 sticky가 계속 적용되어 있음)
    $window.trigger("scroll");
  });
});

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

// ytb-section

document.addEventListener("DOMContentLoaded", function () {
  const ytbSection = document.querySelector(".ytb-section");
  const ytbWrap = document.querySelector(".ytb_wrap");

  window.addEventListener("scroll", function () {
    const ytbSectionTop = ytbSection.offsetTop;
    const ytbWrapTop = ytbWrap.offsetTop;
    let bounds = ytbSection.getBoundingClientRect();
    const scrollPercentage =
      window.scrollY / (ytbSection.offsetHeight - window.innerHeight);

    if (bounds.top < window.innerHeight && bounds.bottom >= 0) {
      // 스크롤 값이 ytb-section의 시작 위치를 넘어갈 때
      const clipPathValue = 0 + scrollPercentage * 1; // 예시: 10에서 60 사이의 값으로 변경
      ytbWrap.style.clipPath = `inset(${clipPathValue}%)`;
    }
  });
});

// fp-section
// 윈도우에 스크롤 이벤트를 걸어줌
window.addEventListener("scroll", function () {
  const section = document.querySelectorAll(".fp-wrap");

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
  });
});

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
