/* SALE JS */

let itemWatch = document.querySelectorAll('.saleImgRow-item');
let mainImg = document.querySelector('.saleMainImg');

itemWatch.forEach((e, i) => {
  itemWatch[i].addEventListener('click', doSwitch);
  // prettier-ignore
  function doSwitch() {
    mainImg.innerHTML(`
      <img
            class="saleMainImg-item"
            srcset="
              /img/sale/2/sale-2-mob-max.png    1x,
              /img/sale/2/sale-2-mob@2x-max.png 2x
            "
            src="/img/sale/2/sale-2-mob-max.png"
            alt="foto main"
            width="235"
          />
    `);
  }
});
