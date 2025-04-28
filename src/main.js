/* SALE JS */

let itemWatch = document.querySelectorAll('.saleImgRow-item');
let mainImg = document.querySelector('.saleMainImg-item');

itemWatch.forEach((e, i) => {
  itemWatch[i].addEventListener('click', doSwitch);
  // prettier-ignore
  function doSwitch() {
    console.log(mainImg.getAttribute("src"));
    console.log(mainImg.getAttribute("srcset"));
    mainImg.setAttribute("src", `/img/sale/4/sale-4-mob.png`);
    mainImg.setAttribute("srcset", `/img/sale/4/sale-4-mob.png 1x, /img/sale/4/sale-4-mob@2x.png 2x`);

  }
});
