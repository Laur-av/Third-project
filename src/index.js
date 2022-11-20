import shopItemsData from "./data.js";

const productsIndex = document.getElementById("products")

const generateShopIndex = () => {
    return (productsIndex.innerHTML = shopItemsData
      .map((x) => {
        let { id, name, desc, img, price } = x;
        return `
          <div class="section__2--products--product-${id}">
            <div class="products__links">
              <a id="go--to--product-${id}" href="#">
                <img src=${img} alt="" />
                <div class="overlay"></div>
                <button id="go--to--product-${id}" class="btn btn--promo">View Product</button>
              </a>
            </div>
            <div class="product__wrap">
              <div class="product__title">
                <p>${name}</p>
              </div>
              <div class="product__price">
                <p>$ ${price} USD</p>
              </div>
            </div>
          </div>`;
      })
      .join(" "));
  };
generateShopIndex();


const goToBtn1 = document.getElementById(`go--to--product-1`);
const goToBtn2 = document.getElementById(`go--to--product-2`);
const goToBtn3 = document.getElementById(`go--to--product-3`);
const goToBtn4 = document.getElementById(`go--to--product-4`);
const goToBtn5 = document.getElementById(`go--to--product-5`);
const goToBtn6 = document.getElementById(`go--to--product-6`);
const goToBtn7 = document.getElementById(`go--to--product-7`);
const goToBtn8 = document.getElementById(`go--to--product-8`);
const goToBtn9 = document.getElementById(`go--to--product-9`);
const goToBtn10 = document.getElementById(`go--to--product-10`);
const goToBtn11 = document.getElementById(`go--to--product-11`);
const goToBtn12 = document.getElementById(`go--to--product-12`);


goToBtn1.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-1.html";
});

goToBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-2.html";
});

goToBtn3.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-3.html";
});

goToBtn4.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-4.html";
});

goToBtn5.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-5.html";
});

goToBtn6.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-6.html";
});

goToBtn7.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-7.html";
});

goToBtn8.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-8.html";
});

goToBtn9.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-9.html";
});

goToBtn10.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-10.html";
});

goToBtn11.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-11.html";
});

goToBtn12.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./products/eachproduct-12.html";
});

