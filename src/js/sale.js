/* SALE JS */

let itemWatch = document.querySelectorAll(".saleImgRow-item");
let mainImg = document.querySelector(".saleMainImg-item");

console.log(itemWatch);

itemWatch.forEach((e, i) => {
  itemWatch[i].addEventListener("click", doSwitch);

  function doSwitch() {
    console.log(i+1);
    mainImg.setAttribute("src", `./img/sale/sale-${i+1}-mob-max.png`);
    mainImg.setAttribute("srcset", `./img/sale/${i+1}/sale-${i+1}-mob-max.png 1x, ./img/sale/${i+1}/sale-${i+1}-mob@2x-max.png 2x`);
  }
});