let Top = document.querySelector(".back_to_top");

window.addEventListener("scroll", function () {
  if (this.scrollY > 200) {
    Top.classList.add("on");
  } else {
    Top.classList.remove("on");
  }
});

Top.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
