const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');
const container = document.getElementsByClassName('container')[0];

container.onscroll = () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (container.scrollTop >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};
