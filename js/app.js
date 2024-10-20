// Get all sections
const sections = document.querySelectorAll("section");

//Add list items dynimaclly to the nav bar (ul)
const fragment = document.createDocumentFragment()
for (const section of sections) {
  const listItem = document.createElement("LI");
  listItem.textContent = section.dataset.title;
  listItem.className = section.id;
  fragment.appendChild(listItem);
}
document.querySelector("ul").appendChild(fragment);

/**
 * @description Add active styling class to the section viewd in the viewport and add it also to is corresponding li in the navbar
 */
function makeActive() {
  for (let i = 0; i < sections.length; i++) {
    //Get which section is being view
    const box = sections[i].getBoundingClientRect();
    // Add active styling class to both the section and it's li in navbar
    if (box.top <= 500 && box.bottom >= 500) {
      sections[i].classList.add("active");
      document.querySelectorAll("li")[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
      document.querySelectorAll("li")[i].classList.remove("active");
    }
  }
}
// Listen to scroll events and call mackActive each time to update the viewd section with active styling class
document.addEventListener("scroll", makeActive);

//Listen to the click event on the unoreded list (Use event delgation)
document.querySelector("ul").addEventListener("click", (event) => {
  const target = event.target;
  event.preventDefault();
  if (target.nodeName === "LI") {
    // Get the corresponing section the li clicked
    const section = document.getElementById(target.classList[0]);
    //Scroll smoothly to the desired section
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

//Hide navbar after time without scolling
const nav = document.querySelector('nav');
let timer = null;
document.addEventListener('scroll', () => {
    if(timer !== null){
        clearTimeout(timer);
        nav.classList.add('d-flex');
    }
    timer = setTimeout(() => {
        nav.classList.remove('d-flex')
    }, 5000);
}, false);

const upBtn = document.querySelector('button');
document.addEventListener('scroll', () => {
    if(window.innerHeight < window.scrollY) {
        upBtn.classList.add('d-block');
    }
    if(window.innerHeight > window.scrollY) {
        upBtn.classList.remove('d-block');
    }
});
upBtn.addEventListener('click', () => {
    document.querySelector('.hero').scrollIntoView({behavior: "smooth", block: "start"})
});


//Collapse section functionlty
document.querySelector('main').addEventListener('click', (event) => {
  const target = event.target;
  if(target.parentElement.classList.contains('collapse-btn')){
    console.log("HERE");
    target.parentElement.nextElementSibling.classList.toggle('d-none');
    // target.parentElement.querySelector('i').style.transform = 'rotate(180deg)';
    if(target.parentElement.querySelector('i').classList.contains('bxs-down-arrow')){
      target.parentElement.querySelector('i').classList.remove('bxs-down-arrow');
      target.parentElement.querySelector('i').classList.add('bxs-up-arrow');
    }
    else if(target.parentElement.querySelector('i').classList.contains('bxs-up-arrow')){
      target.parentElement.querySelector('i').classList.remove('bxs-up-arrow');
      target.parentElement.querySelector('i').classList.add('bxs-down-arrow');
    }
  }
});