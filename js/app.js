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
    console.log("up");
    header.classList.add("active");
    navMenu.classList.remove("active");
    collapseBtn.innerHTML = `<ion-icon name="menu-sharp"></ion-icon>`;
  }

  prevScrollPos = currentScrollPos;
});

// reanimate header when resize
window.addEventListener("resize", function () {
  header.classList.remove("active");
  header.style.animation = "none";
  requestAnimationFrame(function () {
    header.style.animation = "";
  });
  header.classList.add("active");
});

// restart animations when element is in viewport
// Define the options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0.5, // Trigger when at least 50% of the element is visible
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // Add the "animate" class when the element comes into the viewport
      requestAnimationFrame(() => {
        entry.target.style.animation = "";
        console.log("animate");
      });
    } else {
      // Remove the "animate" class when the element goes out of the viewport
      requestAnimationFrame(() => {
        entry.target.style.animation = "none";
        console.log("none");
      });
    }
  });
}, options);

// Get the element to observe
const elements = document.querySelector("#animate");

// Start observing the element
observer.observe(elements);

// scroll to top button

// const scrollBtn = document.querySelector(".scrollToTop-btn");

// window.addEventListener("scroll", function () {
//   scrollBtn.classList.toggle("active", window.scrollY > 500);
// });

// scrollBtn.addEventListener("click", () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// });
