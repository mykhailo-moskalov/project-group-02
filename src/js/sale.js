/* SALE JS */

let itemWatch = document.querySelectorAll('.saleImgRow-item');
let mainImg = document.querySelector('.saleMainImg');

// itemWatch.forEach((e, i) => {
//   itemWatch[i].addEventListener('click', doSwitch);


  // prettier-ignore
  // function doSwitch() {
  //   console.log(i + 1);
  //   mainImg.setAttribute("src", `/img/sale/4/sale-4-mob.png`);
  //   mainImg.setAttribute("srcset", `/img/sale/4/sale-4-mob.png    1x,
  //                 /img/sale/4/sale-4-mob@2x.png 2x`);
  // }
  // });

itemWatch.forEach((e, i) => {
  itemWatch[i].addEventListener('click', () => doSwitch(i + 1)); // передаємо індекс +1
});

function doSwitch(index) {
  mainImg.innerHTML = `
    <img
      class="saleMainImg-item"
      srcset="
        img/sale/${index}/sale-${index}-mob-max.png 1x,
        img/sale/${index}/sale-${index}-mob@2x-max.png 2x
      "
      src="img/sale/${index}/sale-${index}-mob-max.png"
      alt="foto main"
      width="235"
    />
  `;
}
