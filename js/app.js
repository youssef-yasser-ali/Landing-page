// Define Global Variables
"use strict";
const navbarList = document.getElementById("navbar__list");
const section = document.querySelector("main");
const allSection = document.querySelectorAll("section");
// End Global Variables
// start function

//function to create nav dinamic

allSection.forEach((nav, i) => {
  const codeNav = `
  <li> <a  class="menu__link" data-nav="section${i + 1}">section ${
    i + 1
  }</a></li>`;
  navbarList.insertAdjacentHTML("beforeend", codeNav);
});

const allNav = document.querySelectorAll("li a");

// click navbar to  view section
allNav.forEach(function (nav) {
  nav.addEventListener("click", function () {
    let navdata = nav.getAttribute("data-nav");
    document
      .querySelector(`#${navdata}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});
// to set the section  active
window.onscroll = () => {
  let active = "";
  allSection.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      active = section.id;
    }
  });
  allNav.forEach((nav) => {
    nav.classList.remove("active-nav");
    let navdata = nav.getAttribute("data-nav");
    if (navdata == active) {
    }
  });
  allSection.forEach((sec) => {
    sec.classList.remove("your-active-class");
    if (sec.id == active) {
      sec.classList.add("your-active-class");
    }
  });
};
