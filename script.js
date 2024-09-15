window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const nav = document.getElementsByClassName("a-header");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  if (window.scrollY > 2) {
    header.classList.add("scrolled");
    nav[0].classList.add("scrolled-nav");
    nav[1].classList.add("scrolled-nav");
    nav[2].classList.add("scrolled-nav");
    nav[3].classList.add("scrolled-nav");
    nav[4].classList.add("scrolled-nav");
    btn1.classList.add("scrolled-btn1");
    btn2.classList.add("scrolled-btn2");
  } else {
    header.classList.remove("scrolled");
    nav[0].classList.remove("scrolled-nav");
    nav[1].classList.remove("scrolled-nav");
    nav[2].classList.remove("scrolled-nav");
    nav[3].classList.remove("scrolled-nav");
    nav[4].classList.remove("scrolled-nav");
    btn1.classList.remove("scrolled-btn1");
    btn2.classList.remove("scrolled-btn2");
  }
});

window.addEventListener("scroll", () => {
  const svgs = document.querySelectorAll("svg");
  const paths = document.querySelectorAll("path");
  const scrollPosition = window.scrollY;

  svgs.forEach((svg) => {
    if (scrollPosition > 2) {
      paths[0].style.fill = "#333E49";
      paths[1].style.fill = "#00756a";
      svg.style.backgroundColor = "white"; // Change background color
    } else {
      paths[0].style.fill = "white"; // Revert to initial fill color
      paths[1].style.fill = "white"; // Revert to initial fill color
      svg.style.backgroundColor = "#00756a"; // Revert to initial background color
    }
  });
});
