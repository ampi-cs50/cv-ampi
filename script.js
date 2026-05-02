const boton = document.getElementById("scrollToTop");

window.onscroll = function () {
  if (boton) {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      boton.style.display = "block";
    } else {
      boton.style.display = "none";
    }
  }
};

if (boton) {
  boton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
