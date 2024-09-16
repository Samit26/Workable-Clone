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

let a = 1;
setInterval(() => {
  const text1 = document.getElementById("text-12");
  const text2 = document.getElementById("text-13");
  if (a == 1) {
    text1.innerText = "Navarro reduces time to hire by 50%";
    text2.innerText = ` "We’ve been filling positions a lot faster because our managers are
            now involved in the hiring process. So far we’ve made 150 hires in 6
            months and we’ve reduced our time to hire from 50 days to 26."`;
    a = 2;
  } else if (a == 2) {
    text1.innerText = "JOEY Restaurants cuts agency spend by 75%";
    text2.innerText = `"With the insights we can gather using Workable, we’re able to reduce our dependence on external recruitment agencies to just one or two specialty roles a year."`;
    a = 3;
  } else if (a == 3) {
    text1.innerText = "Eurobank increases apply rate by 22%";
    text2.innerText = `"By using Workable, we’re now attracting a new generation of candidates and building a richer and more robust workforce."`;
    a = 1;
  }
}, 1500);
