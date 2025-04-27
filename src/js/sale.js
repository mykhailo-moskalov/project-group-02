/* SALE JS */

let itemWatch = document.querySelectorAll('.saleImgRow-item');
let mainImg = document.querySelector('.saleMainImg-item');

itemWatch.forEach((e, i) => {
  itemWatch[i].addEventListener('click', doSwitch);
  // prettier-ignore
  function doSwitch() {
    console.log(i + 1);
    mainImg.setAttribute("src", `/project-group-02/img/sale/gallary/${i + 1}-min.png`);
    mainImg.setAttribute("srcset", `/project-group-02/img/sale/gallary/${i + 1}-min.png 1x, /project-group-02/img/sale/gallary/${i + 1}-min.png 2x`);
  }
});
