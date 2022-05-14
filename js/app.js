// Define Global Variables
"use strict";
const navbarList = document.querySelector("#navbar__list");
const section = document.querySelector("main");
// End Global Variables

// start function

// function to create  elemnet in navbar
function creatNav(nSection) {
  // creat nav
  const html = `
  <li> <a href="#${nSection}"  class="menu__link" data-nav="Section ${nSection}">section ${nSection}</a></li>`;

  navbarList.insertAdjacentHTML("afterbegin", html);
}

//function to create new Section
function creatSec(nSection) {
  //creat section
  const html = `      <section id="${nSection}" >
  <div class="landing__container ">
    <h2>Section ${nSection}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      fermentum metus faucibus lectus pharetra dapibus. Suspendisse
      potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
      lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
      convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
      eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
      nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
      lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
      tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
      vitae elit. Integer nec libero venenatis libero ultricies molestie
      semper in tellus. Sed congue et odio sed euismod.
    </p>

    <p>
      Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
      gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
      Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
      consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
      elementum tortor mollis non.
    </p>
  </div>
</section>`;

  section.insertAdjacentHTML("beforeend", html);
}
let nSection = 1;

//funciton to creat new section and nav dynamic id
function addNew() {
  creatNav(nSection);
  creatSec(nSection);
  nSection++;
}
// new 4 section ---> to add new section call this function  << addNew() >>
addNew();
addNew();
addNew();
addNew();
// to set the section  active
const allSection = document.querySelectorAll("section");

window.onscroll = function () {
  allSection.forEach((sec) => {
    if (
      sec.getBoundingClientRect().top >= -200 &&
      sec.getBoundingClientRect().top <= 300
    ) {
      sec.classList.add("your-active-class");
    } else {
      sec.classList.remove("your-active-class");
    }
  });
};
