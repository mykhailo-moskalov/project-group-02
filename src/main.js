import './js/menu';
import './js/sale';

console.log('this is main.js');
let itemWatch = document.querySelectorAll('.saleImgRow-item');
let mainImg = document.querySelector('.saleMainImg-item');

itemWatch.forEach((e, i) => {
  itemWatch[i].addEventListener('click', doSwitch);
  // prettier-ignore
  function doSwitch() {
    console.log(i + 1);
    mainImg.setAttribute("src", `./img/sale/gallary/${i+1}-min.png`);
    mainImg.setAttribute("srcset", `./img/sale/gallary/${i+1}-min.png 1x, ./img/sale/gallary/${i+1}-min.png 2x`);

  }
});
