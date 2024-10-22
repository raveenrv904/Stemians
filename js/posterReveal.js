const extra2 = document.querySelector(".extra2");

const extra2Inner = document.querySelector(".extra2-inner");
const extra2InnerMain = document.querySelector(" .extra2-inner-main");

const showPoster = () => {
  setTimeout(() => {
    extra2.classList.remove("hide");
  }, 4000);
};

window.onload = showPoster;

extra2Inner.addEventListener("click", () => {
  extra2.classList.add("hide");
});
extra2InnerMain.addEventListener("click", () => {
  extra2.classList.add("hide");
});
