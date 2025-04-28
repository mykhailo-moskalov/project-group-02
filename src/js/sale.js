/* SALE JS */

let itemWatch = document.querySelectorAll('.saleImgRow-item');
let mainImg = document.querySelector('.saleMainImg');
let imagesMain = document.querySelectorAll('.saleMainImg-item');
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

console.log(imagesMain);

itemWatch.forEach((e, i) => {
  itemWatch[i].addEventListener('click', () => doSwitch(i)); // передаємо індекс +1
});

function doSwitch(index) {
  console.log(index);
  imagesMain.forEach((e) => { e.classList.remove("saleImg-active") });
  imagesMain[index].classList.add("saleImg-active");
}
