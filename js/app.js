// set preloader inactivate when page is loaded
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  setInterval(() => {
    preloader.classList.add("inactive");
  }, 1);
});

// hamburger menu toggle function
const header = document.querySelector("header");
const navMenu = document.querySelector(".nav-menu");
const collapseBtn = document.querySelector(".collapse-btn");

collapseBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  if (navMenu.classList.contains("active")) {
    collapseBtn.innerHTML = `<ion-icon name="close-sharp"></ion-icon>`;
  } else {
    collapseBtn.innerHTML = `<ion-icon name="menu-sharp"></ion-icon>`;
  }
  header.classList.remove("active");
  header.style.animation = "none";
  requestAnimationFrame(function () {
    header.style.animation = "";
  });
  header.classList.add("active");
});

//  header hide when scroll down and show when scroll up
let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
let scrollTimeout;
let scrollDistance = 500;
window.addEventListener("scroll", function () {
  let currentScrollPos =
    window.pageYOffset || document.documentElement.scrollTop;
  let scrollDirection = currentScrollPos > prevScrollPos ? "down" : "up";

  if (scrollDirection === "down" && currentScrollPos > scrollDistance) {
    header.classList.remove("active");
    console.log("down");
  } else {
    header.classList.add("active");
    console.log("up");
  }

  prevScrollPos = currentScrollPos;
});
