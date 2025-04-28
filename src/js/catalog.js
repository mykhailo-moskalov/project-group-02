let btn = document.querySelector(".catalog-button");
let catalogEl = document.querySelectorAll(".catalog-images");

btn.addEventListener('click', () => showMore());

console.log(catalogEl);
function showMore() {
  catalogEl[4].classList.toggle("catalog-show");
  catalogEl[5].classList.toggle("catalog-show");
  if (catalogEl[5].classList.contains("catalog-show")) {
    btn.innerHTML = "Hide more";
  } else {
    btn.innerHTML = "Show more";
  }
}
