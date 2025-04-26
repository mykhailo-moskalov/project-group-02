/* SALE JS */

let itemWatch = document.querySelectorAll(".saleImgRow-item");
let mainImg = document.querySelector(".saleMainImg-item");

const basePath = "/project-group-02";

itemWatch.forEach((e, i) => {
  itemWatch[i].addEventListener("click", doSwitch);

  function doSwitch() {
    console.log(i+1);
    mainImg.setAttribute("src", `${basePath}/img/sale/${i+1}/sale-${i+1}-mob-max.png`);
    mainImg.setAttribute("srcset", `${basePath}/img/sale/${i+1}/sale-${i+1}-mob-max.png 1x, /img/sale/${i+1}/sale-${i+1}-mob@2x-max.png 2x`);
  }
});

