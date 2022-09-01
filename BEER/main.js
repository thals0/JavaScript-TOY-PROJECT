const subBtn = document.querySelector("#snb .btnMenu");
const subMenu = document.querySelector("#snb .sub_menu");

subBtn.addEventListener("click", function () {
  if (subMenu.classList.contains("hide")) {
    subMenu.classList.remove("hide");
  } else {
    subMenu.classList.add("hide");
  }
});
