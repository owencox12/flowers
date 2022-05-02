let swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    navigation: {
        nextEl: ".slider__right",
        prevEl: ".slider__left",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4
        },
        1000: {
          slidesPerView: 3
        },
        769: {
          slidesPerView: 2
        },
        572: {
          slidesPerView: 1
        },
        100: {
          slidesPerView: 1
        }
      },
      pagination: {
        el: ".swiper-pagination",
      },
})


let burger = document.querySelector(".main__menu_left_burger")

let burgerMenu = document.querySelector(".header__burger_list")
let body = document.querySelector("body")
burger.addEventListener("click", function(){
  burger.classList.toggle("main__menu_left_burger_active")
  burgerMenu.classList.toggle("header__burger_list_active")
  body.classList.toggle("lock")
})


let nav = document.querySelector(".header__menu_list")

nav.addEventListener("click", function(e){
  let link = e.target
  if (link.dataset.id) {
    e.preventDefault();
    let target = document.querySelector(link.hash)
    let pos = target.offsetTop
    window.scrollTo({
      top: pos,
      behavior: "smooth"
    })
  }
})