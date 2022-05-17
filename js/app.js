// Define Global Variables
"use strict";
const navbarList = document.getElementById("navbar__list");
const section = document.querySelector("main");
// End Global Variables
let nSection = 0;
// start function

//function to create new Section

function creatSection() {
  nSection++;
  const codeNav = `
    <li> <a href="#section${nSection}"  class="menu__link" data-nav="Section ${nSection}">section ${nSection}</a></li>`;
  const codeSectioin = `      <section id="section${nSection}" >
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

  section.insertAdjacentHTML("beforeend", codeSectioin);
  navbarList.insertAdjacentHTML("beforeend", codeNav);
}

// new 3 section ---> to add new section call this function  << addNew() >>
creatSection();
creatSection();
creatSection();
// to set the section  active
const allSection = document.querySelectorAll("section");

window.onscroll = () => {
  let active = "";
  allSection.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      active = section.id;
    }
  });
  allSection.forEach((sec) => {
    sec.classList.remove("your-active-class");
    if (sec.id == active) {
      sec.classList.add("your-active-class");
    }
  });
};
