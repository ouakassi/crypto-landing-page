var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
});

const box = document.querySelectorAll(".box");
const boxContent = document.querySelectorAll(".box-content");
const icon = document.querySelectorAll(".box-head i");
const firstBoxContent = document.querySelectorAll(".box-content")[0];
const showBoxContent = "active";

box.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (!boxContent[i].classList.contains(showBoxContent)) {
      boxContent[i].classList.add(showBoxContent);
      boxContent[i].style.height = boxContent[i].scrollHeight + "px";
      icon[i].classList.replace("uil-angle-down", "uil-angle-up");
    } else {
      boxContent[i].classList.remove(showBoxContent);
      boxContent[i].style.height = 0;
      icon[i].classList.replace("uil-angle-up", "uil-angle-down");
    }
    console.log(e);
  });
});
