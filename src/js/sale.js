let itemWatch = document.querySelectorAll('.saleImgRow-item');
let mainImg = document.querySelector('.saleMainImg');
let imagesMain = document.querySelectorAll('.saleMainImg-item');
console.log(imagesMain);
itemWatch.forEach((e, i) => {
  itemWatch[i].addEventListener('click', () => doSwitch(i)); // передаємо індекс +1
});
function doSwitch(index) {
  console.log(index);
  imagesMain.forEach(e => {
    e.classList.remove('saleImg-active');
  });
  imagesMain[index].classList.add('saleImg-active');
}
