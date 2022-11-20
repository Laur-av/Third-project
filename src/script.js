"use strict";

const navContainer = document.querySelector(".nav__container");
const hamburger = document.querySelector(".hamburger__menu");
const navMenu = document.querySelector(".nav__menu");
const shopping = document.querySelector(".nav__shoppingbag")
const shoppingCart = document.querySelector(".shoppingcart")
const closeBtn = document.querySelector(".sc__close")

//Hamburger menu
hamburger.addEventListener("click", function (e) {
  e.preventDefault
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".dropdown__menu").querySelectorAll(".nav__link");
    const logo = link.closest(".dropdown__menu").closest(".nav__container").firstElementChild.querySelector("img");
    const bagLogo = link.closest(".dropdown__menu").previousElementSibling

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
    bagLogo.style.opacity = this;
  }
};

navContainer.addEventListener("mouseover", handleHover.bind(0.5));
navContainer.addEventListener("mouseout", handleHover.bind(1));

//Shopping bag
shopping.addEventListener('click', function (e) {
  e.preventDefault
  shoppingCart.classList.add("active");
})

closeBtn.addEventListener('click', function (e) {
  e.preventDefault
  shoppingCart.classList.remove("active");
})