
// get all sections 
const sections = document.querySelectorAll('section');

//Add list items dynimaclly to the nav bar (ul)
for (const section of sections) {
    const title = section.querySelector('h2').textContent;
    const itemList = document.createElement('LI');
    itemList.textContent = title;
    itemList.className = section.id;
    document.querySelector('ul').appendChild(itemList);
}

function makeActive(){
    for (let i = 0; i < sections.length; i++) {
        const box = sections[i].getBoundingClientRect();
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= 500 && box.bottom >= 500) {
            sections[i].classList.add('active')
            document.querySelectorAll('li')[i].classList.add('active')
        } else {
            sections[i].classList.remove('active')
            document.querySelectorAll('li')[i].classList.remove('active')

        }
     }
}
document.addEventListener('scroll', makeActive)

document.querySelector('ul').addEventListener('click', (event) => {
    const target = event.target;
    event.preventDefault();
    if(target.nodeName = "LI"){
        const section = document.getElementById(target.classList[0]);
        section.scrollIntoView({behavior: "smooth", block: "center"})
    }
});
